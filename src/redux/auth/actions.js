import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token, role, email, refreshToken) {
  // console.log("actions");
  // console.log({
  //   token: token,
  //   role: role,
  //   email: email,
  //   refreshToken: refreshToken,
  // });
  return {
    type: USER_LOGIN,
    token,
    role,
    email,
    refreshToken,
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  return {
    type: USER_LOGOUT,
  };
}
