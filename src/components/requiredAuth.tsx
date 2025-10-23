import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const is_authenticated = useAuth((s) => s.is_authenticated);
  const location = useLocation();

  if (!is_authenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
