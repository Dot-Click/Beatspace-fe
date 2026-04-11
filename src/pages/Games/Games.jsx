import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";

const Games = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleBackgroundClick = () => {
    setIsHovered(false);
  };

  return (
    <>
      <UserHeader title="GAMES" />

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
        onClick={handleBackgroundClick}
      >
        <Box
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="!w-[60%] !mx-auto max-sm:!top-[38%] min-sm:!top-[17%] min-md:!w-full min-md:!top-[17%] min-lg:!top-[22%] min-xl:!top-[22%]"
        >
          <Text
            className="vision-font max-sm:!scale-[1.1] min-md:!scale-[2] !scale-[1.5] !mt-16"
            style={{
              color: "#1f2937",
              transition: "all 0.3s ease",
              margin: 0,
            }}
          >
            ETERNAL RUN
          </Text>

          <Image
            src="/assets/Cloud.webp"
            alt="Cloud"
            style={{
              position: "absolute",
              left: "-2rem",
              top: "40%",
              width: "7rem",
              height: "4.5rem",
              opacity: 0.9,
              filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
              animation: "floatCloud1 8s ease-in-out infinite",
              zIndex: 1,
            }}
            className="max-sm:!left-[-6.5rem] max-sm:!h-24 max-sm:!w-24 min-md:!left-20 min-md:!h-32 min-md:!w-32 min-lg:!left-32 min-lg:!h-32 min-lg:!w-36 min-xl:!left-44 min-xl:!h-40 min-xl:!w-40 min-xl:top-[20%] "
          />

          <Image
            src="/assets/Cloud.webp"
            alt="Cloud"
            style={{
              position: "absolute",
              right: "1rem",
              top: "25%",
              width: "3.5rem",
              height: "2rem",
              opacity: 0.9,
              filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
              animation: "floatCloud2 6s ease-in-out infinite",
              zIndex: 1,
            }}
            className="max-sm:!right-[-10%] min-md:!right-[16%] min-md:!h-16 min-md:!w-16 min-lg:!right-[20%] min-lg:!h-20 min-lg:!w-20 min-xl:!right-[20%] min-xl:!h-28 min-xl:!w-28 "
          />

          <Image
            src="/assets/Cloud.webp"
            alt="Cloud"
            style={{
              position: "absolute",
              right: "-8rem",
              top: "-20%",
              width: "8rem",
              height: "5rem",
              opacity: 0.9,
              filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
              transform: "scaleX(-1)",
              animation: "floatCloud3 10s ease-in-out infinite",
              zIndex: 1,
            }}
            className="max-sm:!top-5 !right-[0%] !top-[90%] max-sm:!right-[-6rem] max-sm:!h-24 max-sm:!w-24 min-md:!right-[20%] min-md:!top-[90%] min-lg:!right-[0%] min-lg:!top-[90%] min-lg:!h-32 min-lg:!w-32 min-xl:!right-[0%] min-xl:!top-[90%] min-xl:!h-40 min-xl:!w-40"
          />
        </Box>

        <Box
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            width: "100%",
            maxWidth: "24rem",
          }}
        >
          <Group justify="center" mt={20}>
            <div
              style={{
                display: "inline-block",
                padding: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onClick={handleClick}
              className="md:p-3"
            >
              <Text
                className="vision-font hover:max-sm:!scale-[0.7] max-sm:!scale-[1.1] hover:min-md:!scale-[1.3] min-md:!scale-[2.2] min-md:!mt-28"
                style={{
                  color: isHovered ? "#F6F4D3" : "#1f2937",
                  textShadow: isHovered
                    ? "0 0 10px #F6F4D3, 0 0 20px #F6F4D3, 0 0 30px #F6F4D3"
                    : "none",
                  transition: "all 0.3s ease",
                  margin: 0,
                }}
              >
                {">"} START GAME
              </Text>
            </div>
          </Group>
        </Box>
      </Box>
    </>
  );
};

export default Games;
