import React, { useMemo } from "react";
import { userGetRole } from "../services/hooks";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import RouteLoader from "../components/common/RouteLoader";

const UserRoute = ({ Component }) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const role = useMemo(() => userGetRole(), []);

  if (isLoading) {
    return <RouteLoader />;
  }

  if (!isAuthenticated) {
    localStorage.removeItem("token");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("user");
    return <Navigate to="/" replace />;
  }

  if (!role) {
    localStorage.removeItem("token");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event('authChange'));
    return <Navigate to="/" replace />;
  }

  if (role === "user") {
    return <Component />;
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event('authChange'));
    return <Navigate to="/" replace />;
  }
};

export default UserRoute;
