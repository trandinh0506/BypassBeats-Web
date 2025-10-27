import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    alert(`Password reset link sent to ${email}`);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput
        label="Email"
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <AuthButton type="submit">Reset Password</AuthButton>

      <div className="text-sm text-center mt-4 text-gray-300">
        <p>
          Remember your password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </div>
    </form>
  );
}
