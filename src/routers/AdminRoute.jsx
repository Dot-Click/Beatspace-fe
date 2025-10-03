import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ Component }) => {
  const isAuthenticated = false;
  const isLoading = false;
  const role = null;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!role) {
    return <Navigate to="/" replace />;
  }

  if (role === "admin") {
    return <Component />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AdminRoute;
