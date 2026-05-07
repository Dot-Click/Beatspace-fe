import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuthContext();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111827]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F59E0B]"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // If authenticated but not an admin, redirect to a safe page (e.g., home or login)
  if (!isAdmin) {
    console.warn("Unauthorized access attempt to admin route");
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;
