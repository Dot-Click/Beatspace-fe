import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { beatsIcon } from "../../customIcons";
import { useNavigate } from "react-router-dom";

const Beats = () => {
  const [selectedItem, setSelectedItem] = useState("PHONiX");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = ["SAPHIRE", "PHONiX", "HORUS", "SPALE RALOOON"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate("/beatplay");
  };

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
        className="max-sm:!h-72 max-sm:!top-[30%] min-md:!h-[27rem] min-md:!top-[25%]
        min-lg:!h-full min-lg:!w-full min-lg:!top-0 "
      />

      <Box
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
          className="max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-36"
        />
      </Box>

      <Box
        style={{
          position: "absolute",
          top: "8rem",
          left: "12rem",
          zIndex: 3,
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
        className="max-sm:!top-[35%]  max-sm:!left-12 min-md:!top-[32%] min-md:!left-20
        min-lg:!top-[7rem] min-lg:!left-28 min-xl:!top-[8.5rem] min-xl:!left-[10rem]"
      >
        <Box
          style={{
            width: "40px",
            height: "30px",
            backgroundColor: "#F6F4D3",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
          className="max-sm:!w-7 max-sm:!h-5"
        >
          {beatsIcon()}
        </Box>

        <Text
          style={{
            fontSize: "1.4rem",
            color: "#F6F4D3",
            letterSpacing: "2px",
            textShadow: "0 0 10px #F6F4D3",
          }}
          className="max-sm:!text-base"
        >
          BE★TS
        </Text>
      </Box>

      <Box
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="max-sm:!p-0"
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="max-sm:!gap-0 min-md:!gap-0 min-md:-mt-28 min-lg:-mt-1"
        >
          {menuItems.map((item, index) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              className="max-sm:!px-0  pixel-font max-sm:!scale-[0.6]
                  min-md:!scale-[0.5] max-sm:!py-0"
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
                  color: selectedItem === item ? "#F6F4D3" : "#9ca3af",
                  textShadow:
                    selectedItem === item ? "0 0 10px #F6F4D3" : "none",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                }}
                className="max-sm:!text-lg min-lg:text-xl"
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

export default Beats;
