import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import AuthForm from "../components/AuthForm";
import api from "../api/axiosInstance";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (form) => {
    const res = await api.post("/auth/login", form);
    login(res.data.token);
    navigate("/dashboard");
  };

  return <AuthForm title="Login" variant="login" onSubmit={handleLogin} />;
}
