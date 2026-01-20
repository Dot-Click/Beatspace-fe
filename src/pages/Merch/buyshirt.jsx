

// import React, { useState } from "react";
// import { Box, Text, Button, Image } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { BackButtonIcon, planetIcon } from "../../customIcons";
// import cartIcon from "../../assets/Vector.png";


// const BuyShirt = () => {
//   const [cartCount, setCartCount] = useState(0)
//   const [selectedSize, setSelectedSize] = useState("M");
//   const navigate = useNavigate();
//   const sizes = ["S", "M", "L", "E"];

//   const handleIncreaseCart = () => {
//     setCartCount(prev => prev + 1);
//   };

//   const handleBack = () => {
//     if (window.history.length > 1) navigate(-1);
//     else navigate("/menu");
//   };

//   return (
//     <Box
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#111827",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* TV Frame */}
//       <Image
//         src="/assets/Frame.png"
//         alt="TV Frame"
//         style={{
//           position: "absolute",
//           inset: 0,
//           width: "100%",
//           height: "100%",
//           objectFit: "fill",
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//         className="
//                !h-full
//                min-md:!h-full min-md:!top-[0%]
//                lg:!h-full lg:!w-full lg:!top-0
//              "
//       />

//       {/* Background behind TV */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: 'black',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Planet Icon */}
//       <Box
//         style={{
//           position: "absolute",
//           zIndex: 4,
//           cursor: "pointer",
//         }}
//         onClick={() => navigate("/menu")}
//         className="
//              !top-[15%] !left-[12%] !gap-0 
//                min-md:!top-[15%] min-md:!left-[12%]
//                min-lg:!top-[15%] min-lg:!left-[12%]
//                min-xl:!top-[15%] min-xl:!left-[12%] 
//                  min-2xl:!top-[15%] min-2xl:!left-[12%]
//                flex items-center max-sm:!gap-2
//              "
//       >
//         <Box
//           role="button"
//           aria-label="Back to Comics"
//           onClick={handleBack}
//           style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
//           className="!scale-[0.6] max-sm:!scale-[0.7] min-lg:!scale-[0.9]"
//         >
//           <BackButtonIcon />
//         </Box>
//         {planetIcon()}
//       </Box>
//       {/* Title MERCH */}
//       <Box
//         style={{
//           position: "absolute",
//           zIndex: 3,
//           pointerEvents: "auto",
//           transform: "translateX(-50%)",
//         }}
//         className="
//               !top-[15%] !left-[50%]
//                min-md:!top-[15%] min-md:!left-[50%]
//               min-lg:!top-[15%] min-lg:!left-[50%]
//               min-xl:!top-[15%] min-xl:!left-[50%]
//               min-2xl:!top-[15%] min-2xl:!left-[50%]
//              "
//       >
//         <Text
//           style={{
//             color: "#F6F4D3",
//             textShadow: "0 0 10px #F6F4D3",
//             letterSpacing: "6px",
//           }}
//           className="!text-2xl min-md:!text-3xl lg:!text-5xl"
//         >
//           MERCH
//         </Text>
//       </Box>

//       {/* Cart Icon */}
//       <Box
//         // onClick={() => navigate("/cart")}
//         className="
        

//            absolute z-[3] cursor-pointer !top-[17%] !right-[12%] !gap-0 
//                min-md:!top-[17%] min-md:!right-[12%]
//                min-lg:!top-[17%] min-lg:!right-[12%]
//                min-xl:!top-[17%] min-xl:!right-[12%] 
//                  min-2xl:!top-[17%] min-2xl:!right-[12%]
//                flex items-center max-sm:!gap-2
//         "
//       >
//         <div className="relative">
//           <img src={cartIcon} alt="Cart Icon" className="!h-5 md:!h-8 lg:!h-8 xl:!h-12" />
//           <h1 className="bg-red-500  absolute -top-2 -right-3 text-white text-xs md:text-base px-1.5 py-1 rounded-full md:px-3 md:py-1">{cartCount}</h1>

//         </div>
//       </Box>

//       {/* Scrollable Content */}
//       <Box
//         className="
//           custom-scrollbar md:!overflow-hidden
//           absolute z-[3]
//           max-sm:!top-[40%] max-sm:!left-[50%] transform -translate-x-1/2
//           max-sm:h-[15%] max-sm:w-[75%] min-md:!left-[50%]
//           md:!top-[38%] md:h-[34%] md:w-[80%]
//           lg:!top-[38%] lg:h-[48%] lg:w-[75%]
//         "
//         style={{
//           overflowY: "auto",
//           overflowX: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           pointerEvents: "auto",
//         }}
//       >
//         {/* Main Section */}
//         <Box
//           className="
//             flex flex-col items-center gap-8 xl:-translate-y-5 w-full 
//             md:!flex-row md:!items-center md:!justify-center md:!gap-12 xl:!gap-14
//           "
//         >
//           {/* Shirt Image */}
//           <Box
//             className="
//               flex justify-center items-center
//             "
//           >
//             <Image
//               src="/assets/shirt.png"
//               alt="Vision T-Shirt"
//               className="
//                 max-sm:!w-[130px]
//                 md:!w-[250px]
//                 lg:!w-[300px]
//                 xl:!w-[350px]
//               "
//               style={{
//                 filter: "brightness(1.1)",
//               }}
//             />
//           </Box>

//           {/* Info Section */}
//           <Box
//             className="
//               flex flex-col items-center gap-4
//               md:!items-start md:!text-left
//             "
//           >
//             <Text
//               style={{
//                 color: "#F6F4D3",
//                 letterSpacing: "3px",
//               }}
//               className="!text-xl md:!text-2xl lg:!text-3xl xl:!text-4xl "
//             >
//               VISION SHIRT
//             </Text>

//             <Text
//               style={{
//                 color: "#00CED1",
//                 letterSpacing: "2px",
//               }}
//               className="!text-lg md:!text-xl lg:!text-2xl xl:!text-3xl "
//             >
//               €25
//             </Text>

//             {/* Size Options */}
//             <Box className="flex gap-1 lg:gap-2  items-center justify-center md:!justify-start">
//               <Text
//                 style={{
//                   color: "#F6F4D3",
//                   letterSpacing: "2px",
//                 }}
//                 className="!text-sm md:!text-lg lg:!text-xl xl:!text-2xl "
//               >
//                 SIZE:
//               </Text>
//               {sizes.map((size) => (
//                 <Button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className=" pixel-font"
//                   style={{
//                     backgroundColor:
//                       selectedSize === size ? "#F6F4D3" : "#1e1e1f",
//                     color: selectedSize === size ? "#111827" : "#fff",
//                     fontFamily: "inherit",
//                     letterSpacing: "1px",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <span className="!text-xs lg:!text-base">{size}</span>
//                 </Button>
//               ))}
//             </Box>

//             {/* Add to Cart Button */}
//             <Button
//               className="pixel-font !border !border-white py-1.5 px-2"
//               style={{
//                 backgroundColor: "#000000",
//                 color: "#FFFFFF",
//                 fontFamily: "inherit",
//                 letterSpacing: "3px",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 borderRadius: "7px",
//                 boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
//                 marginTop: "0.5rem",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "scale(1.05)";
//                 e.currentTarget.style.boxShadow =
//                   "0 6px 20px rgba(246, 244, 211, 0.4)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow =
//                   "0 4px 15px rgba(0, 0, 0, 0.5)";
//               }}
//             >

//               <span className="!text-xs  lg:!text-base" onClick={handleIncreaseCart}>Add To Cart</span>


//             </Button>

//             {/* Variants */}
//             <Box className="flex gap-3 mt-3 justify-center md:!justify-start">
//               {[1, 2, 3].map((i) => (
//                 <Box
//                   key={i}
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     backgroundColor: "transparent",
//                     border: "2px solid #F6F4D3",
//                     borderRadius: "8px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     overflow: "hidden",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.backgroundColor = "#F6F4D3")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <Image
//                     src="/assets/shirt.png"
//                     alt="Shirt variant"
//                     style={{
//                       width: "35px",
//                       height: "auto",
//                     }}
//                   />
//                 </Box>
//               ))}
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default BuyShirt;


import React, { useState } from "react";
import { Box, Text, Button, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon, planetIcon } from "../../customIcons";
import cartIcon from "../../assets/Vector.png";


const BuyShirt = () => {
  const [cartCount, setCartCount] = useState(0)
  const [selectedSize, setSelectedSize] = useState("M");
  const navigate = useNavigate();
  const sizes = ["S", "M", "L", "E"];

  const handleIncreaseCart = () => {
    setCartCount(prev => prev + 1);
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
      {/* TV Frame */}
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
        className="
               !h-full
               min-md:!h-full min-md:!top-[0%]
               lg:!h-full lg:!w-full lg:!top-0
             "
      /> */}

      {/* Background behind TV */}
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

      {/* Planet Icon */}
      <Box
        style={{
          position: "absolute",
          zIndex: 4,
          cursor: "pointer",
        }}
        onClick={() => navigate("/menu")}
        className="
        !top-[13%] !left-[11%] !gap-0 
          min-md:!top-[13%] min-md:!left-[11%]
          min-lg:!top-[15%] min-lg:!left-[12%]
          min-xl:!top-[15%] min-xl:!left-[12%] 
            min-2xl:!top-[15%] min-2xl:!left-[12%]
          flex items-center max-sm:!gap-2
        "
      >
        <Box
          role="button"
          aria-label="Back to Comics"
          onClick={handleBack}
          style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
          className="!scale-[0.6] max-sm:!scale-[0.7] min-lg:!scale-[0.9]"
        >
          <BackButtonIcon />
        </Box>
        {planetIcon()}
      </Box>
      {/* Title MERCH */}
      <Box
        style={{
          position: "absolute",
          zIndex: 3,
          pointerEvents: "auto",
          transform: "translateX(-50%)",
        }}
        className="
              !top-[15%] !left-[50%]
               min-md:!top-[15%] min-md:!left-[50%]
              min-lg:!top-[15%] min-lg:!left-[50%]
              min-xl:!top-[15%] min-xl:!left-[50%]
              min-2xl:!top-[15%] min-2xl:!left-[50%]
             "
      >
        <Text
          style={{
            color: "#F6F4D3",
            textShadow: "0 0 10px #F6F4D3",
            letterSpacing: "6px",
          }}
          className="!text-2xl min-md:!text-3xl lg:!text-5xl"
        >
          MERCH
        </Text>
      </Box>

      {/* Cart Icon */}
      <Box
        // onClick={() => navigate("/cart")}
        className="
        

           absolute z-[3] cursor-pointer !top-[17%] !right-[12%] !gap-0 
               min-md:!top-[17%] min-md:!right-[12%]
               min-lg:!top-[17%] min-lg:!right-[12%]
               min-xl:!top-[17%] min-xl:!right-[12%] 
                 min-2xl:!top-[17%] min-2xl:!right-[12%]
               flex items-center max-sm:!gap-2
        "
      >
        <div className="relative">
          <img src={cartIcon} alt="Cart Icon" className="!h-5 md:!h-8 lg:!h-8 xl:!h-12" />
          <h1 className="bg-red-500  absolute -top-2 -right-3 text-white text-xs md:text-base px-1.5 py-1 rounded-full md:px-3 md:py-1">{cartCount}</h1>

        </div>
      </Box>

      {/* Scrollable Content */}
      <Box
        className="
          custom-scrollbar md:!overflow-hidden
          absolute z-[3]
          !top-[25%] !left-[50%] !w-[75%]
          transform -translate-x-1/2
          min-md:!left-[50%] min-md:!top-[24%] min-md:!h-[85%]
          min-lg:!top-[25%] min-lg:h-[85%] min-lg:w-[80%]
          min-xl:!top-[30%] min-xl:h-[85%] min-lg:w-[80%]
        "
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pointerEvents: "auto",
        }}
      >
        {/* Main Section */}
        <Box
          className="
            flex  items-center !gap-4 !w-full min-xl:-translate-y-5  
           !flex-row min-md:!items-center min-md:!justify-center min-md:!gap-12 min-xl:!gap-14
          "
        >
          {/* Shirt Image */}
          <Box
            className="
              flex justify-center !w-[50%] items-center
            "
          >
            <Image
              src="/assets/shirt.png"
              alt="Vision T-Shirt"
              className="
                !w-[200px]
                min-md:!w-[250px]
                min-lg:!w-[350px]
                min-xl:!w-[380px]
              "
              style={{
                filter: "brightness(1.1)",
              }}
            />
          </Box>

          {/* Info Section */}
          <Box
            className="
              flex flex-col items-center !gap-1
              md:!items-start md:!text-left
            "
          >
            <Text
              style={{
                color: "#F6F4D3",
                letterSpacing: "3px",
              }}
              className="!text-lg min-md:!text-lg min-lg:!text-4xl xl:!text-4xl "
            >
              VISION SHIRT
            </Text>

            <Text
              style={{
                color: "#00CED1",
                letterSpacing: "2px",
              }}
              className="!text-lg min-md:!text-xl min-lg:!text-5xl min-xl:!text-3xl "
            >
              €25
            </Text>

            {/* Size Options */}
            <Box className="flex gap-1 lg:gap-2  items-center justify-center md:!justify-start">
              <Text
                style={{
                  color: "#F6F4D3",
                  letterSpacing: "2px",
                }}
                className="!text-sm min-md:!text-sm min-lg:!text-2xl xl:!text-2xl "
              >
                SIZE:
              </Text>
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className=" pixel-font"
                  style={{
                    backgroundColor:
                      selectedSize === size ? "#F6F4D3" : "#1e1e1f",
                    color: selectedSize === size ? "#111827" : "#fff",
                    fontFamily: "inherit",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="!text-xs lg:!text-base">{size}</span>
                </Button>
              ))}
            </Box>

            {/* Add to Cart Button */}
            <Button
              className="pixel-font !border !border-white py-1.5 px-2"
              style={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                fontFamily: "inherit",
                letterSpacing: "3px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "7px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
                marginTop: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(246, 244, 211, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.5)";
              }}
            >

              <span className="!text-xs  lg:!text-base" onClick={handleIncreaseCart}>Add To Cart</span>


            </Button>

            {/* Variants */}
            <Box className="flex gap-3 mt-3 justify-center md:!justify-start">
              {[1, 2, 3].map((i) => (
                <Box
                  key={i}
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "transparent",
                    border: "2px solid #F6F4D3",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F6F4D3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                  className="min-lg:!w-[60px] min-lg:!h-auto"
                >
                  <Image
                    src="/assets/shirt.png"
                    alt="Shirt variant"
                    style={{
                      width: "35px",
                      height: "auto",
                    }}
                    className="min-lg:!w-[80px] min-lg:!h-auto"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyShirt;
