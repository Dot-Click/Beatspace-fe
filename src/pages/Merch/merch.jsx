import React from "react";
import { Box, Text, Button, Image, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { planetIcon, cartIcon, BackButtonIcon } from "../../customIcons";

const Merch = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/menu");
  };
  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
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

      <Flex
        justify={"space-between"}
        className="max-w-6xl relative mt-20 mx-auto"
      >
        <button onClick={handleBack}>
          <BackButtonIcon />
        </button>
        <Text
          style={{
            color: "#F6F4D3",
            textShadow: "0 0 10px #F6F4D3",
            letterSpacing: "6px",
          }}
          className="!text-2xl vision-font min-md:!text-3xl lg:!text-5xl"
        >
          SHOP
        </Text>

        {cartIcon()}
      </Flex>

      <Box className="max-w-6xl my-10 custom-scrollbar max-h-[450px] overflow-y-auto  relative mx-auto">
        {[1, 2, 3].map((index) => (
          <Flex key={index} direction="column" align="center" justify="center">
            <Image
              src="/assets/shirt.png"
              alt="Vision T-Shirt"
              style={{
                filter: "brightness(1.1)",
              }}
              className="min-sm:!w-[200px] min-lg:!w-[380px] min-xl:!w-[400px]"
            />
            <Text
              style={{
                color: "#F6F4D3",
                letterSpacing: "4px",
              }}
              className="text-xl vision-font min-lg:text-4xl"
            >
              VISION SHIRT
            </Text>
            <Button
              className="mt-1 p-2 hover:scale-105 transition-all duration-300 vision-font !text-base"
              onClick={() => navigate("/buyshirt")}
              bg={"#000"}
              c={"#FFF"}
              style={{
                border: "none",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(255,255,255,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(246, 244, 211, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.5)";
              }}
            >
              BUY | € 250
            </Button>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Merch;
