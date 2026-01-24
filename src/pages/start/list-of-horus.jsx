

import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon } from "../../customIcons";

const ListOfHorus = () => {
  const [selectedItem, setSelectedItem] = useState("BEATS");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = ["COMICS", "BEATS", "SHOP", "GAMES"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "COMICS") {
      navigate("/comics");
    } else if (item === "BEATS") {
      navigate("/beats");
    } else if (item === "SHOP") {
      navigate("/merch");
    } else if (item === "GAMES") {
      navigate("/games");
    }
  };

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
    setIsHovered(false);
  };

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/start");
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

      {/* image frame  */}
      {/* <Image
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
        className="!h-full min-md:!h-full
        min-lg:!h-full min-lg:!w-full min-lg:!top-0 "
      /> */}

      {/* <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: 'black',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          pointerEvents: "none",
        }}
      /> */}

      <Box
        style={{
          position: "absolute",
          top: "8rem",
          right: "12rem",
          zIndex: 4,
          pointerEvents: "auto",
        }}
        className="!top-[16%] !right-[10%] min-md:!top-[16%] min-md:!right-24
        min-lg:!top-[15%] min-lg:!right-[12%] min-xl:!top-[8.5rem] min-xl:!right-[10rem]"
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{
            width: "120px",
            height: "auto",
            filter: "brightness(1.2)",
          }}
          className="!w-16 min-md:!w-20 min-lg:!w-28 min-xl:!w-44"
        />
      </Box>

      <Box
        style={{
          position: "absolute",
          top: "8rem",
          left: "12rem",
          zIndex: 5,
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
        className="!top-[16%] !left-[10%] min-md:!top-[16%] min-md:!left-24
        min-lg:!top-[15%] min-lg:!left-[12%] min-xl:!top-[8.5rem] min-xl:!left-[10rem]"
      >
        <Box
          role="button"
          aria-label="Back"
          onClick={handleBack}
          style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
          className="!scale-[0.7] min-lg:!scale-[0.9] min-2xl:!scale-[1]"
        >
          <BackButtonIcon />
        </Box>
      </Box>

      <Box
        className="!top-[18%]   max-sm:!p-0 min-md:!top-[27%] min-md:!p-0 min-lg:!top-[31%]
        min-xl:!top-[27%]"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="!gap-0 min-md:!gap-0" 
        >
          {menuItems.map((item, index) => (
            <div
              className="max-sm:px-0 max-sm:py-0"
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              onClick={() => handleItemClick(item)}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
            {selectedItem === item && (
                <svg
                  viewBox="0 0 16 16"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "1rem",
                    imageRendering: "pixelated",
                    flexShrink: 0,
                  }}
                  className="max-sm:!w-3 max-sm:!h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-5 min-lg:!h-5"
                >
                  {/* Left chevron (<) */}
                  <rect x="2" y="2" width="2" height="2" fill="#F6F4D3" />
                  <rect x="4" y="4" width="2" height="2" fill="#F6F4D3" />
                  <rect x="6" y="6" width="2" height="2" fill="#F6F4D3" />
                  <rect x="4" y="8" width="2" height="2" fill="#F6F4D3" />
                  <rect x="2" y="10" width="2" height="2" fill="#F6F4D3" />
                </svg>
              )}

              <Text
                style={{
                  fontSize: "1.4rem",
                  color: selectedItem === item ? "#F6F4D3" : "#9ca3af",
                  textShadow:
                    selectedItem === item ? "0 0 10px #F6F4D3" : "none",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                }}
                className="!text-[1.3rem] !vision-font min-md:!text-[1.5rem] min-lg:!text-[2rem] min-xl:!text-[2.5rem]"
              >
                {item}
              </Text>
              
            {selectedItem === item && (
                <svg
                  viewBox="0 0 16 16"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginLeft: "1rem",
                    imageRendering: "pixelated",
                    flexShrink: 0,
                  }}
                  className="max-sm:!w-3 max-sm:!h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-5 min-lg:!h-5"
                >
                  {/* Right chevron (>) */}
                  <rect x="12" y="4" width="2" height="2" fill="#F6F4D3" />
                  <rect x="10" y="6" width="2" height="2" fill="#F6F4D3" />
                  <rect x="8" y="8" width="2" height="2" fill="#F6F4D3" />
                  <rect x="12" y="10" width="2" height="2" fill="#F6F4D3" />
                  <rect x="10" y="8" width="2" height="2" fill="#F6F4D3" />
                </svg>
            )}
              
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListOfHorus;
