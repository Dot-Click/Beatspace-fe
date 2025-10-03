import React from "react";
import { Navigate } from "react-router-dom";

const DashboardRoute = ({ Component }) => {
  const isAuthenticated = true;
  const isLoading = false;
  const role = "user";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!role) {
    return <Navigate to="/not-found" replace />;
  }

  if (role === "admin" || role === "user") {
    return <Component />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default DashboardRoute;