import axios from "axios";
import { config } from "../configs";

const handleError = (error) => {
  const originalRequest = error.config;

  if (error.response.data.msg === "jwt expired") {
    originalRequest._retry = true;
    const session = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : {};

    console.log("session");
    console.log(session);

    return axios
      .get(`${config.api_host_dev}/cms/refresh-token/${session.refreshToken}/${session.email}`)
      .then((res) => {
        console.log("res.data.data");
        console.log(res.data.data);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...session,
            token: res.data.data.token,
          })
        );
        originalRequest.headers.Authorization = `Bearer ${res.data.data.token}`;

        return axios(originalRequest);
      })
      .catch((err) => {
        window.location.href = "/signin";
        localStorage.removeItem("auth");
      });
  }

  return error;
};

export default handleError;
