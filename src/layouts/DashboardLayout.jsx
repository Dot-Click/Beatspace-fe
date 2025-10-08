import React from "react";
import Sidebar from "../components/layout/sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";

const DashboardLayout = () => {
  const opened = false;
  const toggle = () => {};
  const authLoading = false;
  const isPending = false;

  return (
    <>
      {authLoading || isPending ? (
        <div className={"min-h-screen flex items-center justify-center bg-slate-100"}>
          {/* Loader Placeholder */}
        </div>
      ) : (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <Sidebar opened={opened} toggle={toggle} />
          </div>
          
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Topbar */}
            <Navbar opened={opened} toggle={toggle} />
            
            {/* Page Content */}
            <div className="flex-1 overflow-auto bg-white p-6">
              <Outlet />
            </div>
            
            {/* Footer */}
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
