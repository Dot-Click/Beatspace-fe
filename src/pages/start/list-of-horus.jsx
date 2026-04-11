import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";

const ListOfHorus = () => {
  const [selectedItem, setSelectedItem] = useState("BEATS");
  const navigate = useNavigate();

  const menuItems = ["COMICS", "BEATS", "SHOP", "GAMES"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "COMICS") {
      navigate("/comics");
    } else if (item === "BEATS") {
      navigate("/beats");
    } else if (item === "SHOP") {
      navigate("/shop-list");
    } else if (item === "GAMES") {
      navigate("/games");
    }
  };

  const handleItemHover = (item) => {
    setSelectedItem(item);
  };

  const handleItemLeave = () => {
    // Selection stays on the last hovered item
  };

  return (
    <>
      <UserHeader title="MENU" />

      <Box
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
          {menuItems.map((item) => (
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
              onMouseEnter={() => handleItemHover(item)}
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
                  textShadow: selectedItem === item ? "0 0 10px #F6F4D3" : "none",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                }}
                className="!text-[1.3rem] vision-font min-md:!text-[1.5rem] min-lg:!text-[2rem] min-xl:!text-[2.5rem]"
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
    </>
  );
};

export default ListOfHorus;
