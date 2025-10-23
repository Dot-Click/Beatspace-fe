// // import React, { useState } from "react";
// // import { Box, Text, Button, Image } from "@mantine/core";
// // import { useNavigate } from "react-router-dom";
// // import { planetIcon, cartIcon } from "../../customIcons";

// // const BuyShirt = () => {
// //   const [selectedSize, setSelectedSize] = useState("M");
// //   const navigate = useNavigate();

// //   const sizes = ["S", "M", "L"];

// //   return (
// //     <Box
// //       style={{
// //         minHeight: "100vh",
// //         backgroundColor: "#111827",
// //         position: "relative",
// //         overflow: "hidden",
// //       }}
// //     >
// //       <Image
// //         src="/assets/Frame.png"
// //         alt="TV Frame"
// //         style={{
// //           position: "absolute",
// //           inset: 0,
// //           width: "100%",
// //           height: "100%",
// //           objectFit: "fill",
// //           zIndex: 2,
// //           pointerEvents: "none",
// //         }}
// //         className="
// //           max-sm:!h-80 max-sm:!top-[30%]
// //           min-md:!h-[27rem] min-md:!top-[25%]
// //           lg:!h-full lg:!w-full lg:!top-0
// //         "
// //       />

// //       <Box
// //         style={{
// //           position: "absolute",
// //           inset: 0,
// //           backgroundImage: 'url("/assets/dark-bg.png")',
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //           backgroundRepeat: "no-repeat",
// //           zIndex: 1,
// //           pointerEvents: "none",
// //         }}
// //       />

// //       <Box
// //         style={{
// //           position: "absolute",
// //           top: "8rem",
// //           left: "10rem",
// //           zIndex: 3,
// //           pointerEvents: "auto",
// //           cursor: "pointer",
// //         }}
// //         onClick={() => navigate("/menu")}
// //         className="
// //           max-sm:!top-[35%] max-sm:!left-12
// //           min-md:!top-[32%] min-md:!left-20
// //           lg:!top-[7rem] lg:!left-[9%]
// //           xl:!top-[8rem] xl:!left-[10%]
// //         "
// //       >
// //         {planetIcon()}
// //       </Box>

// //       <Box
// //         style={{
// //           position: "absolute",
// //           top: "7.5rem",
// //           left: "50%",
// //           transform: "translateX(-50%)",
// //           zIndex: 3,
// //           pointerEvents: "auto",
// //         }}
// //         className="
// //           max-sm:!top-[35%] max-sm:!left-[54%]
// //           min-md:!top-[32%] min-md:!left-[54%]
// //           lg:!top-[7.5rem] lg:!left-[50%]
// //           xl:!top-[8.5rem] xl:!left-[50%]
// //         "
// //       >
// //         <Text
// //           style={{
// //             color: "#F6F4D3",
// //             textShadow: "0 0 10px #F6F4D3",
// //             letterSpacing: "6px",
// //           }}
// //           className="max-sm:!text-2xl min-md:!text-3xl lg:!text-5xl"
// //         >
// //           MERCH
// //         </Text>
// //       </Box>

// //       <Box
// //         style={{
// //           position: "absolute",
// //           top: "7rem",
// //           right: "10rem",
// //           zIndex: 3,
// //           pointerEvents: "auto",
// //           cursor: "pointer",
// //         }}
// //         className="
// //           max-sm:!top-[35%] max-sm:!right-12
// //           min-md:!top-[32%] min-md:!right-20
// //           lg:!top-[7rem] lg:!right-[9%]
// //           xl:!top-[8rem] xl:!right-[10%]
// //         "
// //       >
// //         {cartIcon()}
// //       </Box>

// //       <Box
// //         style={{
// //           position: "absolute",
// //           inset: 0,
// //           display: "flex",
// //           justifyContent: "center",
// //           zIndex: 3,
// //           pointerEvents: "auto",
// //         }}
// //         className="

// //           max-sm:!top-[12%]
// //         "
// //       >
// //         <Box
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             // gap: "4rem",
// //             // marginTop: "2rem",
// //           }}
// //         >
// //           <Box
// //             style={{
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //             className=""
// //           >
// //             <Image
// //               src="/assets/shirt.png"
// //               alt="Vision T-Shirt"
// //               style={{
// //                 width: "280px",
// //                 filter: "brightness(1.1)",
// //               }}
// //               className="max-sm:!w-[100px] max-sm:!-mt-44 "
// //             />
// //           </Box>

// //           <Box
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //               gap: "1.5rem",
// //               alignItems: "flex-start",
// //             }}
// //             className="max-sm:!gap-0 min-lg:gap-[1.5rem] max-sm:!-mt-32"
// //           >
// //             <Text
// //               className="max-sm:!scale-[0.7]"
// //               style={{
// //                 color: "#F6F4D3",
// //                 letterSpacing: "3px",
// //               }}
// //             >
// //               VISION SHIRT
// //             </Text>

// //             <Text
// //               className="max-sm:!scale-[0.6] max-sm:-translate-y-6"
// //               style={{
// //                 color: "#00CED1",
// //                 letterSpacing: "2px",
// //               }}
// //             >
// //               € 25
// //             </Text>

// //             <Box
// //               style={{
// //                 display: "flex",
// //                 gap: "1rem",
// //                 alignItems: "center",
// //               }}
// //               className="max-sm:!-mt-9 min-lg:!mt-[0.5rem]"
// //             >
// //               <Text
// //                 className="font-xs"
// //                 style={{
// //                   color: "#F6F4D3",
// //                   letterSpacing: "2px",
// //                 }}
// //               >
// //                 SIZE:
// //               </Text>
// //               {sizes.map((size) => (
// //                 <Button
// //                   key={size}
// //                   onClick={() => setSelectedSize(size)}
// //                   style={{
// //                     backgroundColor:
// //                       selectedSize === size ? "#F6F4D3" : "transparent",
// //                     border: "2px solid #F6F4D3",
// //                     color: selectedSize === size ? "#111827" : "#F6F4D3",
// //                     fontFamily: "inherit",
// //                     letterSpacing: "1px",
// //                     cursor: "pointer",
// //                     transition: "all 0.3s ease",
// //                     minWidth: "40px",
// //                     height: "36px",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   className="max-sm:scale-[0.8] min-lg:!text-[40px]"
// //                 >
// //                   {size}
// //                 </Button>
// //               ))}
// //             </Box>

// //             <Button
// //               className="max-sm:!scale-[0.6] min-lg:mt-[1rem]"
// //               style={{
// //                 backgroundColor: "#000000",
// //                 border: "none",
// //                 color: "#FFFFFF",
// //                 fontFamily: "inherit",
// //                 letterSpacing: "3px",
// //                 cursor: "pointer",
// //                 transition: "all 0.3s ease",
// //                 borderRadius: "10px",
// //                 boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
// //               }}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.transform = "scale(1.05)";
// //                 e.currentTarget.style.boxShadow =
// //                   "0 6px 20px rgba(246, 244, 211, 0.4)";
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.transform = "scale(1)";
// //                 e.currentTarget.style.boxShadow =
// //                   "0 4px 15px rgba(0, 0, 0, 0.5)";
// //               }}
// //             >
// //               Add To Cart
// //             </Button>

// //             <Box
// //               style={{
// //                 display: "flex",
// //                 gap: "1rem",
// //                 marginTop: "1rem",
// //               }}
// //             >
// //               <Box
// //                 style={{
// //                   width: "45px",
// //                   height: "45px",
// //                   backgroundColor: "transparent",
// //                   border: "2px solid #F6F4D3",
// //                   borderRadius: "8px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   cursor: "pointer",
// //                   transition: "all 0.3s ease",
// //                   overflow: "hidden",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.backgroundColor = "#F6F4D3";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.backgroundColor = "transparent";
// //                 }}
// //               >
// //                 <Image
// //                   src="/assets/shirt.png"
// //                   alt="Shirt variant"
// //                   style={{
// //                     width: "35px",
// //                     height: "auto",
// //                   }}
// //                 />
// //               </Box>

// //               <Box
// //                 style={{
// //                   width: "45px",
// //                   height: "45px",
// //                   backgroundColor: "transparent",
// //                   border: "2px solid #F6F4D3",
// //                   borderRadius: "8px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   cursor: "pointer",
// //                   transition: "all 0.3s ease",
// //                   overflow: "hidden",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.backgroundColor = "#F6F4D3";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.backgroundColor = "transparent";
// //                 }}
// //               >
// //                 <Image
// //                   src="/assets/shirt.png"
// //                   alt="Shirt variant"
// //                   style={{
// //                     width: "35px",
// //                     height: "auto",
// //                   }}
// //                 />
// //               </Box>

// //               <Box
// //                 style={{
// //                   width: "45px",
// //                   height: "45px",
// //                   backgroundColor: "transparent",
// //                   border: "2px solid #F6F4D3",
// //                   borderRadius: "8px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   cursor: "pointer",
// //                   transition: "all 0.3s ease",
// //                   overflow: "hidden",
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.backgroundColor = "#F6F4D3";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.backgroundColor = "transparent";
// //                 }}
// //               >
// //                 <Image
// //                   src="/assets/shirt.png"
// //                   alt="Shirt variant"
// //                   style={{
// //                     width: "35px",
// //                     height: "auto",
// //                   }}
// //                 />
// //               </Box>
// //             </Box>
// //           </Box>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default BuyShirt;

// import React, { useState } from "react";
// import { Box, Text, Button, Image } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { planetIcon, cartIcon } from "../../customIcons";

// const BuyShirt = () => {
//   const [selectedSize, setSelectedSize] = useState("M");
//   const navigate = useNavigate();
//   const sizes = ["S", "M", "L"];

//   return (
//     <Box
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#111827",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Frame */}
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
//           max-sm:!h-72 max-sm:!top-[30%]
//           min-md:!h-[27rem] min-md:!top-[25%]
//           min-lg:!h-full min-lg:!top-0
//         "
//       />

//       {/* Dark Background */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: 'url("/assets/dark-bg.png")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Planet Icon */}
//       <Box
//         onClick={() => navigate("/menu")}
//         className="
//           absolute z-[3] cursor-pointer
//           max-sm:!top-[35%] max-sm:!left-10
//           min-md:!top-[32%] min-md:!left-20
//           lg:!top-[7rem] lg:!left-[9%]
//           xl:!top-[8rem] xl:!left-[10%]
//         "
//       >
//         {planetIcon()}
//       </Box>

//       {/* Title */}
//       <Box
//         className="
//           absolute z-[3]
//           max-sm:!top-[35%] max-sm:!left-[54%]
//           min-md:!top-[32%] min-md:!left-[50%]
//           lg:!top-[7.5rem] lg:!left-[50%]
//           xl:!top-[8.5rem] xl:!left-[50%]
//         "
//         style={{ transform: "translateX(-50%)" }}
//       >
//         <Text
//           style={{
//             color: "#F6F4D3",
//             textShadow: "0 0 10px #F6F4D3",
//             letterSpacing: "6px",
//           }}
//           className="max-sm:!text-2xl min-md:!text-3xl lg:!text-5xl"
//         >
//           MERCH
//         </Text>
//       </Box>

//       {/* Cart Icon */}
//       <Box
//         onClick={() => navigate("/cart")}
//         className="
//           absolute z-[3] cursor-pointer
//           max-sm:!top-[35%] max-sm:!right-10
//           min-md:!top-[32%] min-md:!right-20
//           lg:!top-[7rem] lg:!right-[9%]
//           xl:!top-[8rem] xl:!right-[10%]
//         "
//       >
//         {cartIcon()}
//       </Box>

//       {/* Scrollable Content (like Merch page) */}
//       <Box
//         className="
//           custom-scrollbar
//           absolute z-[3]
//           max-sm:!top-[40%] max-sm:!left-[50%] transform -translate-x-1/2
//           max-sm:h-[15%] max-sm:w-[75%]
//           min-md:!top-[38%] min-md:h-[18%] min-md:w-[80%]
//           min-lg:!top-[38%] min-lg:h-[38%] min-lg:w-[75%]
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
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "2rem",
//             width: "100%",
//             paddingBottom: "2rem",
//           }}
//           className="min-lg:flex-row min-lg:gap-[6rem]"
//         >
//           {/* Shirt Image */}
//           <Box
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               src="/assets/shirt.png"
//               alt="Vision T-Shirt"
//               style={{
//                 width: "280px",
//                 filter: "brightness(1.1)",
//               }}
//               className="max-sm:!w-[140px] max-sm:-mt-2"
//             />
//           </Box>

//           {/* Info Section */}
//           <Box
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: "1rem",
//             }}
//             className="min-lg:items-start text-center min-lg:text-left"
//           >
//             <Text
//               style={{
//                 color: "#F6F4D3",
//                 letterSpacing: "3px",
//               }}
//               className="text-xl md:text-2xl"
//             >
//               VISION SHIRT
//             </Text>

//             <Text
//               style={{
//                 color: "#00CED1",
//                 letterSpacing: "2px",
//               }}
//               className="text-lg md:text-xl"
//             >
//               €25
//             </Text>

//             {/* Size Options */}
//             <Box className="flex gap-2 items-center justify-center">
//               <Text
//                 style={{
//                   color: "#F6F4D3",
//                   letterSpacing: "2px",
//                 }}
//                 className="text-sm"
//               >
//                 SIZE:
//               </Text>
//               {sizes.map((size) => (
//                 <Button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   style={{
//                     backgroundColor:
//                       selectedSize === size ? "#F6F4D3" : "transparent",
//                     border: "2px solid #F6F4D3",
//                     color: selectedSize === size ? "#111827" : "#F6F4D3",
//                     fontFamily: "inherit",
//                     letterSpacing: "1px",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     minWidth: "40px",
//                     height: "36px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {size}
//                 </Button>
//               ))}
//             </Box>

//             {/* Add to Cart Button */}
//             <Button
//               style={{
//                 backgroundColor: "#000000",
//                 border: "none",
//                 color: "#FFFFFF",
//                 fontFamily: "inherit",
//                 letterSpacing: "3px",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 borderRadius: "10px",
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
//               Add To Cart
//             </Button>

//             {/* Variants */}
//             <Box className="flex gap-3 mt-3 justify-center min-lg:justify-start">
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
import { planetIcon, cartIcon } from "../../customIcons";

const BuyShirt = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const navigate = useNavigate();
  const sizes = ["S", "M", "L"];

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Frame */}
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
        className="
          max-sm:!h-72 max-sm:!top-[30%]
          md:!h-[30rem] md:!top-[25%]
          lg:!h-full lg:!top-0
        "
      />

      {/* Dark Background */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/assets/dark-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Planet Icon */}
      <Box
        onClick={() => navigate("/menu")}
        className="
          absolute z-[3] cursor-pointer
          max-sm:!top-[35%] max-sm:!left-10
          md:!top-[32%] md:!left-20
          lg:!top-[7rem] lg:!left-[9%]
          xl:!top-[8rem] xl:!left-[10%]
        "
      >
        {planetIcon()}
      </Box>

      {/* Title */}
      <Box
        className="
          absolute z-[3]
          max-sm:!top-[35%] max-sm:!left-[54%]
          md:!top-[32%] md:!left-[50%]
          lg:!top-[7.5rem] lg:!left-[50%]
          xl:!top-[8.5rem] xl:!left-[50%] 
        "
        style={{ transform: "translateX(-50%)" }}
      >
        <Text
          style={{
            color: "#F6F4D3",
            textShadow: "0 0 10px #F6F4D3",
            letterSpacing: "6px",
          }}
          className="max-sm:!text-2xl md:!text-3xl lg:!text-5xl"
        >
          MERCH
        </Text>
      </Box>

      {/* Cart Icon */}
      <Box
        onClick={() => navigate("/cart")}
        className="
          absolute z-[3] cursor-pointer
          max-sm:!top-[35%] max-sm:!right-10
          md:!top-[32%] md:!right-20
          lg:!top-[7rem] lg:!right-[9%]
          xl:!top-[8rem] xl:!right-[10%]
        "
      >
        {cartIcon()}
      </Box>

      {/* Scrollable Content */}
      <Box
        className="
          custom-scrollbar md:!overflow-hidden
          absolute z-[3]
          max-sm:!top-[40%] max-sm:!left-[50%] transform -translate-x-1/2
          max-sm:h-[15%] max-sm:w-[75%] min-md:!left-[50%]
          md:!top-[38%] md:h-[34%] md:w-[80%]
          lg:!top-[38%] lg:h-[48%] lg:w-[75%]
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
            flex flex-col items-center gap-8 w-full pb-8
            md:!flex-row md:!items-center md:!justify-center md:!gap-20
          "
        >
          {/* Shirt Image */}
          <Box
            className="
              flex justify-center items-center
            "
          >
            <Image
              src="/assets/shirt.png"
              alt="Vision T-Shirt"
              className="
                max-sm:!w-[130px]
                md:!w-[250px]
                lg:!w-[300px]
                xl:!w-[350px]
              "
              style={{
                filter: "brightness(1.1)",
              }}
            />
          </Box>

          {/* Info Section */}
          <Box
            className="
              flex flex-col items-center gap-4
              md:!items-start md:!text-left
            "
          >
            <Text
              style={{
                color: "#F6F4D3",
                letterSpacing: "3px",
              }}
              className="!text-xl md:!text-2xl"
            >
              VISION SHIRT
            </Text>

            <Text
              style={{
                color: "#00CED1",
                letterSpacing: "2px",
              }}
              className="!text-lg md:!text-xl"
            >
              €25
            </Text>

            {/* Size Options */}
            <Box className="flex gap-2 items-center justify-center md:!justify-start">
              <Text
                style={{
                  color: "#F6F4D3",
                  letterSpacing: "2px",
                }}
                className="!text-sm"
              >
                SIZE:
              </Text>
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    backgroundColor:
                      selectedSize === size ? "#F6F4D3" : "transparent",
                    border: "2px solid #F6F4D3",
                    color: selectedSize === size ? "#111827" : "#F6F4D3",
                    fontFamily: "inherit",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    minWidth: "40px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>

            {/* Add to Cart Button */}
            <Button
              style={{
                backgroundColor: "#000000",
                border: "none",
                color: "#FFFFFF",
                fontFamily: "inherit",
                letterSpacing: "3px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "10px",
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
              Add To Cart
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
                >
                  <Image
                    src="/assets/shirt.png"
                    alt="Shirt variant"
                    style={{
                      width: "35px",
                      height: "auto",
                    }}
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
