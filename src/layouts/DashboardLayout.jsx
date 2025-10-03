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
        <div className="grid grid-cols-1 xl:grid-cols-5 relative duration-700 h-screen ">
          <Sidebar opened={opened} toggle={toggle} />
          <div
            className={
              "xl:col-span-4 bg-slate-100 duration-700"
            }
          >
            <Navbar opened={opened} toggle={toggle} />
            <div className="lg:min-h-[76vh] lg:max-h-[76vh] overflow-auto mx-3  ">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
