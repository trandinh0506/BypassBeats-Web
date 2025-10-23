import { Routes, Route } from "react-router-dom";
import SongFeed from "./pages/song";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SongFeed />} />
    <Route path="/login" element={<></>} />
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
