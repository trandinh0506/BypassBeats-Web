import { Routes, Route } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<></>} />
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
