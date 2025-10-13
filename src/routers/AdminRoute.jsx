import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  
  // You can add role checking logic here if needed
  // For now, we'll assume authenticated users have admin access
  // In a real app, you'd check the user's role from the auth context or API

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;
