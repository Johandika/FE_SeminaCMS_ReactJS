import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import SForm from "./form";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import { useDispatch } from "react-redux"; // Setiap mau ada perubahan di reduxnya kita menggunakan useDispatch
import { userLogin } from "../../redux/auth/actions";

export default function Signin() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`/cms/auth/signin`, form);
      // res.data adalah cara akses data ke database , sedangkan penambahan .data untuk kedua kalinya adalah default dari axios sama seperti halnnya untuk mengakses pesan error pada axios defaultnya harus menggunakan .response

      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.refreshToken,
          res.data.data.email
        )
      );
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setIsLoading(false);
      setAlert({
        status: true,
        type: "danger",
        message: err.response.data.msg ?? "Internal Server Error",
      });
    }
  };

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Signin</Card.Title>
          <SForm
            form={form.email}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
