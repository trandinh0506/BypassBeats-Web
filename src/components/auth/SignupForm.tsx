import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

export default function SignupForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    displayName: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup form:", form);
    alert(`Welcome, ${form.displayName}!`);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthInput
        label="Display Name"
        name="displayName"
        value={form.displayName}
        onChange={handleChange}
      />
      <AuthInput
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <AuthInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <AuthButton type="submit">Sign Up</AuthButton>

      <p className="text-sm text-center mt-4">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Log in
        </span>
      </p>
    </form>
  );
}
