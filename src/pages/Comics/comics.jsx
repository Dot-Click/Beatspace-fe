// import React, { useState } from "react";
// import { Box, Text, Group, Image } from "@mantine/core";
// import { useNavigate } from "react-router-dom";
// import { BackButtonIcon } from "../../customIcons";

// const Comics = () => {
//   const [selectedItem, setSelectedItem] = useState("SPACE RACCOON");
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   const menuItems = ["SPACE RACCOON"];

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     if (item === "SPACE RACCOON") {
//       navigate("/comics/select");
//     }
//   };

//   const handleItemHover = () => {
//     setIsHovered(true);
//   };

//   const handleItemLeave = () => {
//     setIsHovered(false);
//   };

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
//           lg:!h-full lg:!w-full lg:!top-0
//         "
//       />

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

//       <Box
//         style={{
//           position: "absolute",
//           top: "8rem",
//           left: "12rem",
//           zIndex: 4,
//           pointerEvents: "auto",
//         }}
//         className="max-sm:!top-[34%]  max-sm:!left-12 min-md:!top-[32%] min-md:!left-20
//         min-lg:!top-[7rem] min-lg:!left-28 min-xl:!top-[8.5rem] min-xl:!left-[10rem] flex items-center gap-2"
//       >
//         <Box
//             role="button"
//             aria-label="Back to Comics"
//             onClick={handleBack}
//             style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
//             className="max-sm:!scale-[0.7]"
//           >
//             <BackButtonIcon />
//           </Box>
//         <Text
//           style={{
//             fontSize: "2rem",
//             color: "#F6F4D3",
//             textShadow: "0 0 10px #F6F4D3",
//             letterSpacing: "3px",
//           }}
//           className="max-sm:!scale-[0.7]"
//         >
//           COMICS
//         </Text>
//       </Box>

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
//         className="max-sm:!-mt-10 min-md:!-mt-16"
//       >
//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "1.5rem",
//           }}
//         >
//           {menuItems.map((item, index) => (
//             <div
//               key={item}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 cursor: "pointer",
//                 padding: "0.5rem 1rem",
//                 borderRadius: "4px",
//                 transition: "all 0.3s ease",
//               }}
//               onClick={() => handleItemClick(item)}
//               onMouseEnter={handleItemHover}
//               onMouseLeave={handleItemLeave}
//             >
//               {selectedItem === item && (
//                 <svg
//                   viewBox="0 0 16 16"
//                   style={{
//                     width: "16px",
//                     height: "16px",
//                     marginRight: "1rem",
//                     imageRendering: "pixelated",
//                     flexShrink: 0,
//                   }}
//                   className="max-sm:!w-3 max-sm:!h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-5 min-lg:!h-5"
//                 >
//                   {/* Left chevron (<) */}
//                   <rect x="2" y="2" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="4" y="4" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="6" y="6" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="4" y="8" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="2" y="10" width="2" height="2" fill="#F6F4D3" />
//                 </svg>
//               )}

//               <Text
//                 style={{
//                   fontSize: "0.5rem",
//                   color: selectedItem === item ? "#F6F4D3" : "#9ca3af",
//                   textShadow:
//                     selectedItem === item ? "0 0 10px #F6F4D3" : "none",
//                   transition: "all 0.3s ease",
//                 }}
//                 className="max-sm:!scale-[0.7] min-lg:!scale-[1] min-lg:!text-[1.5rem] min-xl:!text-[2rem]"
//               >
//                 {item}
//               </Text>

//               {selectedItem === item && (
//                 <svg
//                   viewBox="0 0 16 16"
//                   style={{
//                     width: "16px",
//                     height: "16px",
//                     marginLeft: "1rem",
//                     imageRendering: "pixelated",
//                     flexShrink: 0,
//                   }}
//                   className="max-sm:!w-3 max-sm:!h-3 min-md:!w-4 min-md:!h-4 min-lg:!w-5 min-lg:!h-5"
//                 >
//                   {/* Right chevron (>) */}
//                   <rect x="12" y="4" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="10" y="6" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="8" y="8" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="12" y="10" width="2" height="2" fill="#F6F4D3" />
//                   <rect x="10" y="8" width="2" height="2" fill="#F6F4D3" />
//                 </svg>
//               )}
//             </div>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Comics;
import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon } from "../../customIcons";

const Comics = () => {
  const [selectedItem, setSelectedItem] = useState("SPACE RACCOON");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = ["SPACE RACCOON"];
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "SPACE RACCOON") {
      navigate("/comics/select");
    }
  };

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
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


      {/* image frame  */}
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
          max-sm:!h-full max-sm:!top-[0%]
          min-md:!h-full min-md:!top-[0%]
          lg:!h-full lg:!w-full lg:!top-0
        "
      /> */}
 
      {/* <Box
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
      /> */}



      <Box
        style={{
          position: "absolute",
          top: "8rem",
          right: "12rem",         
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="!top-[14%] !right-[11%] max-sm:!top-[14%] max-sm:!right-[11%] min-md:!top-[14%] min-md:!right-[13%]
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
          className="!w-13 max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-32"
        />
      </Box>

      <Box
        style={{
          position: "absolute",
          top: "8rem",
          left: "12rem",
          zIndex: 4,
          pointerEvents: "auto",
        }}
        className="!top-[14%] !left-[11%] max-sm:!top-[14%]  max-sm:!left-[11%]
         min-md:!top-[14%] min-md:!left-[11%]
        min-lg:!top-[17%] min-lg:!left-[13%] min-xl:!top-[17%] min-xl:!left-[13%] flex items-center gap-0"
      >
        <Box
            role="button"
            aria-label="Back to Comics"
            onClick={handleBack}
            style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
            className="!scale-[0.6] max-sm:!scale-[0.7] min-md:!scale-[0.7]"
          >
            <BackButtonIcon />
          </Box>
        <Text
          style={{
            fontSize: "2rem",
            color: "#F6F4D3",
            textShadow: "0 0 10px #F6F4D3",
            letterSpacing: "3px",
          }} 
          className="!scale-[0.6] max-sm:!scale-[0.7] min-md:!scale-[0.7]"
        >
          COMICS
        </Text>
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
          {menuItems.map((item, index) => (
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
              onMouseEnter={handleItemHover}
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
                  {/* Left chevron (<) */}
                  <rect x="2" y="2" width="2" height="2" fill="#F6F4D3" />
                  <rect x="4" y="4" width="2" height="2" fill="#F6F4D3" />
                  <rect x="6" y="6" width="2" height="2" fill="#F6F4D3" />
                  <rect x="4" y="8" width="2" height="2" fill="#F6F4D3" />
                  <rect x="2" y="10" width="2" height="2" fill="#F6F4D3" />
                </svg>
              )}

              <Text
                style={{
                  fontSize: "0.5rem",
                  color: selectedItem === item ? "#F6F4D3" : "#9ca3af",
                  textShadow:
                    selectedItem === item ? "0 0 10px #F6F4D3" : "none",
                  transition: "all 0.3s ease",
                }}
                className="!scale-[0.6] max-sm:!scale-[0.7] min-md:!scale-[0.8] min-lg:!scale-[1.5] min-lg:!text-[1.5rem] min-xl:!text-[2rem]"
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
                  {/* Right chevron (>) */}
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
    </Box>
  );
};

export default Comics;
