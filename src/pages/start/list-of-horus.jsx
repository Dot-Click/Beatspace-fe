import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ListOfHorus = () => {
  const [selectedItem, setSelectedItem] = useState("BEATS");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = ["COMICS", "BEATS", "MERCH", "GAMES"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "COMICS") {
      navigate("/comics");
    } else if (item === "BEATS") {
      navigate("/beats");
    } else if (item === "MERCH") {
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
        className="max-sm:!top-[33%]  max-sm:!p-0 min-md:!top-[34%] min-md:!p-0 min-lg:!top-[26%]
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
          className="max-sm:!gap-0 min-md:!gap-0"
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
                <Box
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid #F6F4D3",
                    marginRight: "1rem",
                    transform: "rotate(-90deg)",
                  }}
                />
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
                className="max-sm:!text-[0.8rem] min-md:!text-[1.5rem] min-lg:!text-[2rem] min-xl:!text-[2.5rem]"
              >
                {item}
              </Text>

              {selectedItem === item && (
                <Box
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "8px solid #F6F4D3",
                    marginLeft: "1rem",
                    transform: "rotate(90deg)",
                  }}
                />
              )}
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListOfHorus;
