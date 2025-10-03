import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div className="hidden lg:block xl:col-span-2">
        
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
