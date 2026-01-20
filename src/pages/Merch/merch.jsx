// import React from "react";
// import { Box, Text, Button, Image } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { planetIcon, cartIcon, BackButtonIcon } from "../../customIcons";

// const Merch = () => {
//   const navigate = useNavigate();

//   const handleBack = () => {
//    if (window.history.length > 1) navigate(-1);
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
//            max-sm:!h-72 max-sm:!top-[30%]
//           min-md:!h-[27rem] min-md:!top-[25%]
//           lg:!h-full lg:!w-full lg:!top-0
//         "
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
//           max-sm:!top-[35%] max-sm:!left-12
//           min-md:!top-[32%] min-md:!left-20
//           lg:!top-[7rem] lg:!left-[9%]
//           xl:!top-[8rem] xl:!left-[10%] flex items-center gap-2
//         "
//       >
//       <Box
//             role="button"
//             aria-label="Back to Comics"
//             onClick={handleBack}
//             style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
//             className="max-sm:!scale-[0.7]"
//           >
//             <BackButtonIcon />
//           </Box>
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
//           max-sm:!top-[35%] max-sm:!left-[54%]
//           min-md:!top-[32%] min-md:!left-[54%]
//           lg:!top-[7.5rem] lg:!left-[50%]
//           xl:!top-[8.5rem] xl:!left-[50%]
//         "
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
//         style={{
//           position: "absolute",
//           zIndex: 3,
//           cursor: "pointer",
//         }}
//         onClick={() => navigate("/cart")}
//         className="
//           max-sm:!top-[35%] max-sm:!right-12
//           min-md:!top-[32%] min-md:!right-20
//           lg:!top-[7rem] lg:!right-[9%]
//           xl:!top-[8rem] xl:!right-[10%]
//         "
//       >
//         {cartIcon()}
//       </Box>

//       {/* Scroll Content */}
//       <Box
//         className="
//           custom-scrollbar
//           max-sm:!top-[38%] max-sm:!left-[50%] max-sm:!h-[18%] max-sm:!w-[80%]
//           min-md:!left-[50%] min-md:!top-[38%] min-md:w-[75%] min-md:h-[18%]
//           lg:!top-[33%] lg:!left-[50%] lg:!w-[58%] lg:!h-[45%]
//           xl:!top-[35%] xl:!w-[52%]
//         "
//         style={{
//           position: "absolute",
//           transform: "translateX(-50%)",
//           zIndex: 3,
//           pointerEvents: "auto",
//           overflowY: "auto",
//           overflowX: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "flex-start",
//         }}
//       >
//         {/* Inner Content */}
//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "2em",
//             width: "100%",
//             paddingBottom: "2rem",
//           }}
//           className="lg:!gap-4 min-lg:!-mt-10 lg:!pb-0"
//         >
//           {/* First Shirt */}
//           <Box
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "3rem",
//             }}
//           >
//             <Image
//               src="/assets/shirts.png"
//               alt="Vision T-Shirt"
//               style={{
//                 width: "380px",
//                 filter: "brightness(1.1)",
//               }}
//               className="lg:!w-[240px] xl:!w-[300px]"
//             />
//           </Box>

//           <Text
//             style={{
//               color: "#F6F4D3",
//               letterSpacing: "4px",
//             }}
//             className="min-lg:-mt-16"
//           >
//             VISION SHIRT
//           </Text>

//           <Button
//             className="min-lg:-mt-4"
//             onClick={() => navigate("/buyshirt")}
//             style={{
//               backgroundColor: "#000",
//               border: "none",
//               color: "#FFF",
//               fontFamily: "inherit",
//               letterSpacing: "3px",
//               transition: "all 0.3s ease",
//               borderRadius: "10px",
//               boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.05)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 20px rgba(246, 244, 211, 0.4)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
//             }}
//           >
//             BUY | € 250
//           </Button>

//           {/* Second Shirt */}
//           <Box
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "3rem",
//               marginTop: "2rem",
//             }}
//           >
//             <Image
//               src="/assets/shirts.png"
//               alt="Vision T-Shirt"
//               style={{
//                 width: "380px",
//                 height: "auto",
//                 filter: "brightness(1.1)",
//               }}
//               className="lg:!w-[240px] xl:!w-[300px]"
//             />
//           </Box>

//           <Text
//             style={{
//               color: "#F6F4D3",
//               letterSpacing: "4px",
//             }}
//           >
//             VISION SHIRT
//           </Text>

//           <Button
//             onClick={() => navigate("/buyshirt")}
//             style={{
//               backgroundColor: "#000",
//               border: "none",
//               color: "#FFF",
//               fontFamily: "inherit",
//               letterSpacing: "3px",
//               transition: "all 0.3s ease",
//               borderRadius: "10px",
//               boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.05)";
//               e.currentTarget.style.boxShadow =
//                 "0 6px 20px rgba(246, 244, 211, 0.4)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)";
//               e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
//             }}
//           >
//             BUY | € 250
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Merch;
import React from "react";
import { Box, Text, Button, Image } from "@mantine/core";
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
        style={{
          position: "absolute",
          zIndex: 3,
          cursor: "pointer",
        }}
        onClick={() => navigate("/cart")}
        className="
        !top-[14%] !right-[11%] 
          min-md:!top-[14%] min-md:!right-[11%]
          min-lg:!top-[15%] min-lg:!right-[13%]
          min-xl:!top-[15%] min-xl:!right-[13%]
          min-2xl:!top-[15%] min-2xl:!right-[13%]
        "
      >
        {cartIcon()}
      </Box>

      {/* Scroll Content */}
      <Box
        className="
          custom-scrollbar
         !top-[25%] !left-[50%] !px-20  !h-[60%] !w-[75%]
          min-md:!left-[50%] min-md:!top-[25%] min-md:w-[75%] min-md:h-[18%]
          min-lg:!top-[33%] min-lg:!left-[50%] min-lg:!w-[75%] min-lg:!h-[45%]
          min-xl:!top-[35%] min-xl:!w-[75%]
        "
        style={{
          position: "absolute",
          transform: "translateX(-50%)",
          zIndex: 3,
          pointerEvents: "auto",
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Inner Content */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2em",
            width: "100%",
            paddingBottom: "2rem",
          }}
          className="lg:!gap-4 min-sm:!mt-0 !gap-0 min-lg:!-mt-10 lg:!pb-0"
        >
          {/* First Shirt */}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            <Image
              src="/assets/shirts.png"
              alt="Vision T-Shirt"
              style={{
                width: "380px",
                filter: "brightness(1.1)",
              }}
              className="min-sm:!w-[200px]  min-lg:!w-[380px] min-xl:!w-[440px]"

            />
          </Box>

          <Text
            style={{
              color: "#F6F4D3",
              letterSpacing: "4px",
            }}
            className="min-sm:!text-xl min-lg:-mt-16 min-lg:!text-4xl"
          >
            VISION SHIRT
          </Text>

          <Button
            className="min-lg:-mt-4 !text-base"
            onClick={() => navigate("/buyshirt")}
            style={{
              backgroundColor: "#000",
              border: "none",
              color: "#FFF",
              fontFamily: "inherit",
              letterSpacing: "3px",
              transition: "all 0.3s ease",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(246, 244, 211, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
            }}
          >
            BUY | € 250
          </Button>

          {/* Second Shirt */}
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            <Image
              src="/assets/shirts.png"
              alt="Vision T-Shirt"
              style={{
                width: "380px",
                filter: "brightness(1.1)",
              }}
              className="min-sm:!w-[200px]  min-lg:!w-[380px] min-xl:!w-[440px]"
            />
          </Box>

          <Text
            style={{
              color: "#F6F4D3",
              letterSpacing: "4px",
            }}
            className="min-sm:!text-xl min-lg:-mt-16 min-lg:!text-4xl"
          >
            VISION SHIRT
          </Text>

          <Button
            className="min-lg:-mt-4 !text-base"
            onClick={() => navigate("/buyshirt")}
            style={{
              backgroundColor: "#000",
              border: "none",
              color: "#FFF",
              fontFamily: "inherit",
              letterSpacing: "3px",
              transition: "all 0.3s ease",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(246, 244, 211, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.5)";
            }}
          >
            BUY | € 250
          </Button>


        </Box>
      </Box>
    </Box>
  );
};

export default Merch;
