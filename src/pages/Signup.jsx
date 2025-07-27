import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import api from '../api/axiosInstance';

export default function Signup() {
  const navigate = useNavigate();
const handleSignup = async (form) => {
  const res = await api.post("/auth/signup", form);
  alert("✅ Please check your email to confirm your account.");
  navigate("/login");
};

    return <AuthForm title="Sign Up" variant="signup" onSubmit={handleSignup} />;
}