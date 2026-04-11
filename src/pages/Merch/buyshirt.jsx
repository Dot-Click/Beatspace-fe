import React, { useState } from "react";
import { Box, Text, Button, Image, Flex } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";
import cartImg from "../../assets/Vector.png";

const BuyShirt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item || {
    name: "VISION SHIRT",
    price: 250,
    sizes: ["S", "M", "L", "XL"],
    image: "/assets/shirt-old.png",
    description: "",
  };

  const [cartCount, setCartCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState(item.sizes?.[0] || "M");

  const handleIncreaseCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <UserHeader
        title="MERCH"
        suffix={
          <Box className="cursor-pointer flex items-center">
            <div className="relative">
              <img
                src={cartImg}
                alt="Cart Icon"
                className="!h-6 md:!h-8 lg:!h-10 xl:!h-12"
                style={{ filter: "brightness(1.5)" }}
              />
              {cartCount > 0 && (
                <h1 className="bg-red-600 absolute -top-2 -right-3 text-white text-xs md:text-sm px-1.5 py-0.5 rounded-full border border-white font-bold">
                  {cartCount}
                </h1>
              )}
            </div>
          </Box>
        }
      />

      <Box
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          position: "relative",
          padding: "2rem",
          paddingTop: "15vh", // Push down below header
        }}
      >
        <Flex
          direction="column"
          align="center"
          gap={40}
          style={{ width: "100%", maxWidth: "1100px" }}
        >
          <Flex
            className="flex-col md:flex-row items-center gap-12 lg:gap-24 w-full justify-center"
          >
            {/* Image Section */}
            <Box className="flex justify-center w-full md:w-[45%]">
              <Box
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Image
                  src={item.prod_image || item.image}
                  alt={item.name}
                  className="w-[220px] md:w-[280px] lg:w-[350px] xl:w-[450px]"
                  style={{
                    filter: "brightness(1.1) drop-shadow(0 0 40px rgba(0,0,0,0.6))",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>

            {/* Details Section */}
            <Box
              className="flex flex-col items-center md:items-start text-center md:text-left gap-8"
              style={{ flex: 1 }}
            >
              <Text
                style={{
                  color: "#F6F4D3",
                  letterSpacing: "5px",
                  fontSize: "2.8rem",
                  fontWeight: 900,
                  textShadow: "0 0 20px rgba(246, 244, 211, 0.4)",
                  lineHeight: 1.1,
                }}
                className="vision-font lg:!text-5xl"
              >
                {item.name.toUpperCase()}
              </Text>

              <Text
                style={{
                  color: "#5EEAD4", // Cyan from Figma
                  letterSpacing: "3px",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
                className="vision-font lg:!text-4xl"
              >
                €{item.price}
              </Text>

              {/* Sizes */}
              <Box className="flex gap-5 items-center">
                <Text
                  style={{
                    color: "#F6F4D3",
                    letterSpacing: "2px",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                  className="vision-font"
                >
                  Size:
                </Text>
                <Flex gap="sm">
                  {["S", "L", "M", "E"].map((size) => (
                    <Box
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        backgroundColor:
                          selectedSize === size ? "#F6F4D3" : "#1e1e1f",
                        color: selectedSize === size ? "#111827" : "#fff",
                        width: "42px",
                        height: "42px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        border: "1px solid #F6F4D3",
                        transition: "all 0.2s ease",
                      }}
                      className="vision-font hover:scale-110"
                    >
                      {size}
                    </Box>
                  ))}
                </Flex>
              </Box>

              {/* Add to Cart Button */}
              <Button
                onClick={handleIncreaseCart}
                style={{
                  backgroundColor: "#000",
                  color: "#FFF",
                  border: "2px solid #F6F4D3",
                  borderRadius: "12px",
                  fontSize: "1.5rem",
                  padding: "1rem 3.5rem",
                  height: "auto",
                  letterSpacing: "2px",
                  fontWeight: 900,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
                className="vision-font hover:scale-105 transition-all duration-300 active:scale-95"
              >
                Add To Cart
              </Button>

              {/* Thumbnails Placeholder (Matching Figma) */}
              <Flex gap="lg" mt={20}>
                {[1, 2, 3].map((i) => (
                  <Box
                    key={i}
                    style={{
                      width: "70px",
                      height: "70px",
                      border: "2px solid #333",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      overflow: "hidden",
                      transition: "border-color 0.2s ease",
                    }}
                    className="hover:!border-[#F6F4D3]"
                  >
                    <Image
                      src={item.prod_image || item.image}
                      style={{
                        width: "80%",
                        height: "80%",
                        objectFit: "contain",
                        opacity: 0.5,
                      }}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default BuyShirt;
