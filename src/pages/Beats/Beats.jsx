import React, { useState } from "react";
import { Box, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";
import { useTranslation } from "react-i18next";

const Beats = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState("phonix");
  const navigate = useNavigate();

  const menuItems = [
    { key: "saphire", value: "saphire" },
    { key: "phonix", value: "phonix" },
    { key: "horus", value: "horus" },
    { key: "spale_ralooon", value: "spale_ralooon" }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item.key);
    navigate(`/beatplay?category=${item.value}`);
  };

  const handleItemHover = (item) => {
    setSelectedItem(item.key);
  };

  const handleItemLeave = () => {
    // Selection stays on the last hovered item
  };

  return (
    <>
      <UserHeader title={t('beats_page.title')} />

      <Box
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="!p-0 "
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="!gap-0 min-md:!gap-3 min-lg:!gap-10 mix-2xl:!gap-6"
        >
          {menuItems.map((item) => (
            <div
              key={item.value}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              }}
              className="!px-0 !py-0"
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => handleItemHover(item)}
              onMouseLeave={handleItemLeave}
            >
              {selectedItem === item.key && (
                <svg
                  viewBox="0 0 16 16"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "1rem",
                    imageRendering: "pixelated",
                    flexShrink: 0,
                  }}
                  className="!w-3 !h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-5 min-lg:!h-5"
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
                  color: selectedItem === item.key ? "#F6F4D3" : "#9ca3af",
                  textShadow: selectedItem === item.key ? "0 0 10px #F6F4D3" : "none",
                  letterSpacing: "2px",
                  transition: "all 0.3s ease",
                }}
                className="!text-lg vision-font min-md:!text-xl min-lg:!text-3xl"
              >
                {t(`beats_page.${item.key}`)}
              </Text>
              {selectedItem === item.key && (
                <svg
                  viewBox="0 0 16 16"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginLeft: "1rem",
                    imageRendering: "pixelated",
                    flexShrink: 0,
                  }}
                  className="!w-3 !h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-5 min-lg:!h-5"
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

export default Beats;
