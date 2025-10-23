import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { planetIcon } from "../../customIcons";

const Games = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/Frame.png"
        alt="TV Frame"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 2,
          pointerEvents: "none",
        }}
        className="max-sm:!h-52 max-sm:!top-[30%] min-md:!h-[27rem] min-md:!top-[25%]
        min-lg:!h-full min-lg:!w-full min-lg:!top-0 "
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/assets/dark-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Box
        style={{
          position: "absolute",
          top: "8rem",
          right: "12rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="max-sm:!top-[35%] max-sm:!right-12 min-md:!top-[32%] min-md:!right-20
        min-lg:!top-[7rem] min-lg:!right-28 min-xl:!top-[8.5rem] min-xl:!right-[10rem]"
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{
            width: "120px",
            height: "auto",
            filter: "brightness(1.2)",
          }}
          className="max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-44"
        />
      </Box>

      <Box
        style={{
          position: "absolute",
          top: "8rem",
          left: "12rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="max-sm:!top-[35%]  max-sm:!left-12 min-md:!top-[32%] min-md:!left-20
        min-lg:!top-[7rem] min-lg:!left-28 min-xl:!top-[8.5rem] min-xl:!left-[10rem]"
      >
        {planetIcon()}
      </Box>

      <Box
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      ></Box>
    </Box>
  );
};

export default Games;
