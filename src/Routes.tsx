import { Routes, Route } from "react-router-dom";
import SongFeed from "./pages/SongFeed";
import SignUpPage from "./pages/auth/SignUp";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import PlaylistFeed from "./pages/PlaylistFeed";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SongFeed />} />
    <Route path="/playlists" element={<PlaylistFeed />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />

    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

export default AppRoutes;
