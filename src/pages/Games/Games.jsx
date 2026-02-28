import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { BackButtonIcon, planetIcon } from "../../customIcons";
import { useNavigate } from "react-router-dom";

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

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/menu");
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
      {/* <Image
        src="/assets/Frame.png"
        alt="TV Frame"
        style={{
          position: "absolute",
          // position: "relative",
          inset: 0,
          width: "100%",
          // height: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 2,
          pointerEvents: "none",
        }}
        className="!h-full !top-0 min-md:!h-full min-md:!top-0 max-lg:!h-full max-sm:!top-[0%] max-lg:!top-[0%] "
      /> */}

      {/* <Box
        style={{
          position: "absolute",
          inset: 0,
          // backgroundImage: 'url("/assets/Hero-bg.webp")',
          backgroundColor:"black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          pointerEvents: "none",
        }}
      /> */}

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

      {/* Back Button - Top Left Corner */}
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
        className="!top-[17%]  !left-[13%] max-sm:!top-[35%]  max-sm:!left-12 min-md:!top-[17%] min-md:!left-[13%]
        min-lg:!top-[17%] min-lg:!left-[13%] min-xl:!top-[17%] min-xl:!left-[13%]"
      >
        <Box
          role="button"
          aria-label="Back"
          onClick={handleBack}
          style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
          className="max-sm:!scale-[0.7] min-md:!scale-[0.6] !scale-[0.4] min-lg:!scale-[0.7] min-xl:!scale-[0.8]"
        >
          <BackButtonIcon />
        </Box>
      </Box>

      <Box
        style={{
          position: "absolute",

          inset: 0,
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
          className="!w-[60%] !mx-auto max-sm:!top-[38%] min-sm:!top-[17%] min-md:!w-full min-md:!top-[17%] min-lg:!top-[22%] 
          min-xl:!top-[22%]"
        >


          <Text
            className="pixel-font max-sm:!scale-[1.1]
                  min-md:!scale-[2]
                  !scale-[1.5]
                  !mt-16"
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
            className="max-sm:!left-[-6.5rem] max-sm:!h-24 max-sm:!w-24 min-md:!left-20 min-md:!h-32 min-md:!w-32
            min-lg:!left-32 min-lg:!h-32 min-lg:!w-36 min-xl:!left-44 min-xl:!h-40 min-xl:!w-40 min-xl:top-[20%] "
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
            className="max-sm:!right-[-10%] min-md:!right-[16%] min-md:!h-16 min-md:!w-16
            min-lg:!right-[20%] min-lg:!h-20 min-lg:!w-20
            min-xl:!right-[20%] min-xl:!h-28 min-xl:!w-28 "
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
            className="max-sm:!top-5 !right-[0%] !top-[90%] max-sm:!right-[-6rem] max-sm:!h-24 max-sm:!w-24 min-md:!right-[20%] min-md:!top-[90%]
            min-lg:!right-[0%] min-lg:!top-[90%] min-lg:!h-32 min-lg:!w-32 
            min-xl:!right-[0%] min-xl:!top-[90%] min-xl:!h-40 min-xl:!w-40"
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
                className="pixel-font hover:max-sm:!scale-[0.7] max-sm:!scale-[1.1]
                 hover:min-md:!scale-[1.3] min-md:!scale-[2.2]
                  min-md:!mt-28"
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
    </Box>
  );
};

export default Games;
