import React from "react";
import { Box } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import UserHeader from "../components/common/UserHeader";

/**
 * UserLayout handles the global background video and common header
 * for all user-facing pages.
 */
const UserLayout = () => {
  const location = useLocation();

  // Determine title and subtitle based on current route
  // You can also pass these via context if needed, but for now 
  // we can infer them or keep UserHeader dynamic inside the layout
  // if we want to avoid re-adding it to every page.
  
  // However, it's often better to keep UserHeader in the pages 
  // so they can pass specific props (like prefix/suffix/title).
  // But the BACKGROUND VIDEO definitely belongs here.

  return (
    <Box
      style={{
        height: "100vh",
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Global Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/assets/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Main Content Area */}
      <Box style={{ position: "relative", zIndex: 1, flex: 1, height: "100%", overflow: "hidden" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default UserLayout;
