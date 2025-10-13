import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const AdminIndex = () => {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If authenticated, redirect to admin dashboard
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // If not authenticated, redirect to admin login
  return <Navigate to="/admin/login" replace />;
};

export default AdminIndex;