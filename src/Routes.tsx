import { Routes, Route } from "react-router-dom";
import SongFeed from "./pages/song";
import SignUpPage from "./pages/auth/SignUp";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SongFeed />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    <Route
      path="/dashboard"
      element={
        <>
          <></>
        </>
      }
    />
    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

export default AppRoutes;
