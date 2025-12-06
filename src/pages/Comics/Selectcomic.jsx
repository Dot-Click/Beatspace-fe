// import React, { useState } from "react";
// import { Box, Text, Image } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { BackButtonIcon } from "../../customIcons";

// const Selectcomic = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleBack = () => {
//     if (window.history.length > 1) {
//       navigate(-1);
//     } else {
//       navigate("/comics");
//     }
//   };

//   const handleComicClick = () => {
//     // Navigate to chapter selection page
//     navigate("/comics/select-chapter");
//   };

//   const handleComicHover = () => {
//     setIsHovered(true);
//   };

//   const handleComicLeave = () => {
//     setIsHovered(false);
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
//           max-sm:!h-96 max-sm:!top-[30%]
//           min-md:!h-[27rem] min-md:!top-[25%]
//           lg:!h-full lg:!w-full lg:!top-0
//         "
//       />

//       {/* Background */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: 'url("/assets/dark-bg.png")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       {/* Global Vision Logo */}
//       <Box
//         style={{
//           position: "absolute",
//           top: "8rem",
//           right: "12rem",
//           zIndex: 3,
//           pointerEvents: "auto",
//         }}
//         className="max-sm:!top-[35%] max-sm:!right-12 min-md:!top-[32%] min-md:!right-20
//         min-lg:!top-[7rem] min-lg:!right-28 min-xl:!top-[8.5rem] min-xl:!right-[10rem]"
//       >
//         <Image
//           src="/assets/logo.png"
//           alt="GLOBAL VISION"
//           style={{
//             width: "120px",
//             height: "auto",
//             filter: "brightness(1.2)",
//           }}
//           className="max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-32"
//         />
//       </Box>

//       {/* Header with back button and titles */}
//       <Box
//         style={{
//           position: "absolute",
//           //   top: "8rem",
//           //   left: "12rem",
//           zIndex: 5,
//           pointerEvents: "auto",
//           display: "flex",
//           flexDirection: "column",
//         }}
//         className="max-sm:!top-[34%]  max-sm:!left-12 min-md:!top-[32%] min-md:!left-20
//         min-lg:!top-[7rem] min-lg:!left-28 min-xl:!top-[8.5rem] min-xl:!left-[10rem]"
//       >
//         <Box style={{ display: "flex", alignItems: "center" }}>
//           <Box
//             role="button"
//             aria-label="Back to Comics"
//             onClick={handleBack}
//             style={{ cursor: "pointer" }}
//             className="max-sm:!scale-[0.7]"
//           >
//             <BackButtonIcon />
//           </Box>
//           <Text
//             style={{
//               color: "#F6F4D3",
//               letterSpacing: "3px",
//             }}
//             className="max-sm:!scale-[0.7]"
//           >
//             COMICS
//           </Text>
//         </Box>
//         <Text
//           style={{
//             fontSize: "1rem",
//             color: "#F6F4D3",
//             letterSpacing: "2px",
//           }}
//           className="max-sm:!scale-[0.5] max-sm:-translate-x-8 max-sm:-translate-y-6"
//         >
//           SPACERACOON
//         </Text>
//       </Box>

//       {/* Main Content Area */}
//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "2rem",
//           zIndex: 3,
//           pointerEvents: "auto",
//         }}
//       >
//         {/* Pixel-perfect comic card frame */}
//         <Box
//           style={{
//             position: "relative",
//             width: "210px",
//             height: "440px",
//             // olive-gold frame fill
//             border: "3px solid #d1c676", // golden outer border
//             boxShadow: "0 0 0 3px #000 inset", // inner black line
//             display: "flex",
//             flexDirection: "column",
//             cursor: "pointer",
//           }}
//           className="max-sm:!h-[210px] max-sm:mt-28"
//           onClick={handleComicClick}
//           onMouseEnter={handleComicHover}
//           onMouseLeave={handleComicLeave}
//         >
//           {/* vertical inner black stripes (left & right) */}

//           {/* Image area with solid black border */}
//           <Box
//             style={{
//               flex: 1,
//               overflow: "hidden",
//             }}
//           >
//             <Image
//               src="/assets/comic.png"
//               alt="Me and the Boys"
//               style={{ width: "100%", height: "100%", objectFit: "fill" }}
//             />
//           </Box>

//           {/* Bottom info panel */}
//           <Box
//             style={{
//               background: "#0b0b0b",
//               borderTop: "6px solid #d1c676",
//               height: "120px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               padding: "10px",
//               WebkitTextSizeAdjust: "none",
//               MozTextSizeAdjust: "none",
//               MsTextSizeAdjust: "none",
//               textSizeAdjust: "none",
//               userSelect: "none",
//             }}
//           >
//             <Text
//               className="vision-font-regular"
//               style={{
//                 color: "#F6F4D3",
//                 fontSize: "18px",
//                 lineHeight: 1.2,
//                 textAlign: "left",
//               }}
//             >
//               M€ and th€ Boys
//             </Text>

//             <Text
//               className="alexandria-font"
//               style={{
//                 color: "#d1a94c",
//                 fontSize: "10px",
//                 textAlign: "left",
//               }}
//             >
//               Chapter 2
//             </Text>
//             <Box />
//           </Box>
//         </Box>

//         {/* Click instruction */}
//         <Text
//           className="alexandria-font"
//           style={{
//             fontSize: "0.9rem",
//             color: "#9ca3af",
//             letterSpacing: "1px",
//             marginTop: "1.2rem",
//             textAlign: "center",
//             opacity: isHovered ? 1 : 0.85,
//             transition: "opacity 0.2s ease",
//           }}
//         >
//           Click on the comic to view chapters
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default Selectcomic;

import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon } from "../../customIcons";

const Selectcomic = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/comics");
    }
  };

  const handleComicClick = () => navigate("/comics/select-chapter");

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
          max-sm:!h-[35rem] max-sm:!top-[10%]
          min-md:!h-full min-md:!top-[0%]
          lg:!h-full lg:!w-full lg:!top-0
        "
      />

      {/* Background */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: 'black',

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* Global Vision Logo */}
      <Box
        style={{
          position: "absolute",
          top: "8rem",
          right: "12rem",
          zIndex: 4,
          pointerEvents: "auto",
        }}
        className="!top-[14%] !right-[11%] max-sm:!top-[14%] max-sm:!right-[11%] 
        min-md:!top-[14%] min-md:!right-[11%]
        min-lg:!top-[17%] min-lg:!right-[13%] min-xl:!top-[17%] min-xl:!right-[13%]"
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{
            width: "120px",
            height: "auto",
            filter: "brightness(1.2)",
          }}
          className="max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-32"
        />
      </Box>

      {/* Header */}
      <Box
        style={{
          position: "absolute",
          zIndex: 6,
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        className="!top-[14%] !left-[11%] max-sm:!top-[14%]  max-sm:!left-[11%]
         min-md:!top-[14%] min-md:!left-[11%]
        min-lg:!top-[14%] min-lg:!left-[11%] min-xl:!top-[14%] min-xl:!left-[11%]"
      >
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box
            role="button"
            aria-label="Back to Comics"
            onClick={handleBack}
            style={{ cursor: "pointer", position: "relative", zIndex: 6 }}
            className="!scale-[0.6] max-sm:!scale-[0.7]"
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{
              color: "#F6F4D3",
              letterSpacing: "3px",
            }}
            className="  !scale-[0.6] max-sm:!scale-[0.7]"
          >
            COMICS
          </Text>
        </Box>
        <Text
          style={{
            fontSize: "1rem",
            color: "#F6F4D3",
            letterSpacing: "2px",
          }}
          className=" !scale-[0.6] max-sm:!scale-[0.5] -translate-x-8 -translate-y-6"
        >
          SPACERACOON
        </Text>
      </Box>

      {/* Main Content */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          zIndex: 5, // 🔥 increased so it stays above frame
        }}
        className="!p-13"
      >
        {/* Scrollable Comic Frame */}
        <Box
          style={{
            position: "relative",
            width: "210px",
            height: "440px",
            border: "3px solid #d1c676",
            boxShadow: "0 0 15px rgba(209,198,118,0.6), inset 0 0 5px #000",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            overflow: "hidden",
          }}
          className="max-sm:!h-[210px] min-md:!h-fit !h-fit  max-sm:mt-60 hover:!shadow-[0_0_20px_#d1c676]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleComicClick}
        >
          {/* Scrollable inner area (custom golden scrollbar) */}
          <Box
            className="custom-scrollbar !overflow-y-auto !scroll-smooth"
            style={{
              flex: 1,
              height: "100%",
              scrollbarWidth: "thin",
            }}
          >
            {/* Comic Image */}
            <Image
              src="/assets/comic.png"
              alt="Me and the Boys"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />

            {/* Info Panel */}
            <Box
              style={{
                background: "#0b0b0b",
                borderTop: "6px solid #d1c676",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "10px",
                userSelect: "none",
              }}
            >
              <Text
                className="vision-font-regular"
                style={{
                  color: "#F6F4D3",
                  fontSize: "18px",
                  lineHeight: 1.2,
                  textAlign: "left",
                }}
              >
                M€ and th€ Boys
              </Text>

              <Text
                className="alexandria-font"
                style={{
                  color: "#d1a94c",
                  fontSize: "10px",
                  textAlign: "left",
                }}
              >
                Chapter 2
              </Text>
            </Box>
          </Box>
        </Box>

        {/* ✅ Fixed Hint Text — now visible below frame */}
        <Text
          className="alexandria-font"
          style={{
            fontSize: "0.9rem",
            color: "#f6f4d3",
            letterSpacing: "1px",
            marginTop: "1.5rem",
            textAlign: "center",
            opacity: isHovered ? 1 : 0.75,
            transition: "all 0.3s ease",
            textShadow: "0 0 6px rgba(209,198,118,0.8)",
            zIndex: 10,
          }}
        >
          Click on the comic to view chapters
        </Text>
      </Box>
    </Box>
  );
};

export default Selectcomic;
