import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form:", form);
    alert(`Welcome back, ${form.username}! Remember: ${form.remember}`);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AuthInput
        label="Username"
        name="username"
        value={form.username}
        onChange={handleChange}
      />

      <div className="relative">
        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="flex justify-between items-center mt-1">
          <label className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="h-4 w-4 accent-blue-600"
            />
            <span>Remember me</span>
          </label>

          <span
            onClick={() => navigate("/forgot-password")}
            className="text-sm text-blue-500 hover:underline cursor-pointer"
          >
            Forgot password?
          </span>
        </div>
      </div>

      <AuthButton type="submit">Log In</AuthButton>

      <div className="text-sm text-center mt-4">
        <p>
          Don&apos;t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </form>
  );
}
