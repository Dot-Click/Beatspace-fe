import React, { useState } from "react";
import { Box, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";

const ShopList = () => {
  const [selectedItem, setSelectedItem] = useState("SHIRTS");
  const navigate = useNavigate();

  const menuItems = ["SHIRTS"];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "SHIRTS") {
      navigate("/merch");
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
      <UserHeader title="SHOP" />

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
        className="max-sm:!-mt-10 min-md:!-mt-0"
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="!gap-[1rem]"
        >
          {menuItems.map((item) => (
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
                  className="max-sm:!w-3 max-sm:!h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-8 !mr-[1rem] min-md:!mr-[1.5rem] min-lg:!mr-[3rem] min-xl:!mr-[3rem] min-lg:!h-8"
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
                  fontSize: "1.5rem",
                  color: selectedItem === item ? "#F6F4D3" : "#9ca3af",
                  textShadow: selectedItem === item ? "0 0 10px #F6F4D3" : "none",
                  transition: "all 0.3s ease",
                }}
                className="vision-font max-sm:!text-[1rem] min-md:!text-[1.5rem] min-lg:!text-[2rem] min-xl:!text-[2.5rem]"
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
                  className="max-sm:!w-3 max-sm:!h-3 min-md:!w-4 min-md:!h-4 !ml-[1rem] min-md:!ml-[1.5rem] min-lg:!ml-[3rem] min-xl:!ml-[3rem] min-lg:!w-8 min-lg:!h-8"
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

export default ShopList;
