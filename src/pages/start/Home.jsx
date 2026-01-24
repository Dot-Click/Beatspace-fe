// import React, { useState } from "react";
// import { Box, Text, Group, Image } from "@mantine/core";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const navigate = useNavigate();

//   const handleClick = (e) => {
//     e.stopPropagation();
//     setIsHovered(true);
//     navigate("/menu");
//   };

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleLeave = () => {
//     setIsHovered(false);
//   };

//   const handleBackgroundClick = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Box
//     className=" max-sm:h-screen max-sm:!w-screen "
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
//           // position: "relative",
//           inset: 0,
//           width: "100%",
//           // height: "100%",
//           height: "100%",
//           objectFit: "fill",
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//         className="max-sm:!h-screen max-sm:!w-screen max-lg:!h-[55%] max-lg:!top-[25%] "
//       />

//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundImage: 'url("/assets/Hero-bg.webp")',
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

//           inset: 0,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "2rem",
//           zIndex: 3,
//           pointerEvents: "auto",
//         }}
//         onClick={handleBackgroundClick}
//       >
//         <Box
//           style={{
//             position: "absolute",
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           className="!w-[8rem] max-sm:!top-[38%] min-md:!w-full min-md:!top-[33%] min-lg:!top-[18%] 
//           min-xl:!top-[22%]"
//         >
//           <Image
//             src="/assets/Hero.webp"
//             alt="GLOBAL VISION"
//             style={{
//               width: "100%",

//               height: "auto",
//               filter:
//                 "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
//               marginBottom: "1rem",
//               position: "relative",
//               zIndex: 10,
//             }}
//             className="max-sm:!mb-0 min-md:!h-28 min-lg:!h-40  "
//           />

//           <Image
//             src="/assets/Cloud.webp"
//             alt="Cloud"
//             style={{
//               position: "absolute",
//               left: "-2rem",
//               top: "40%",
//               width: "7rem",
//               height: "4.5rem",
//               opacity: 0.9,
//               filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
//               animation: "floatCloud1 8s ease-in-out infinite",
//               zIndex: 1,
//             }}
//             className="max-sm:!left-[-6.5rem] max-sm:!h-24 max-sm:!w-24 min-md:!left-20 min-md:!h-32 min-md:!w-32
//             min-lg:!left-32 min-lg:!h-32 min-lg:!w-36 min-xl:!left-44 min-xl:!h-40 min-xl:!w-40 min-xl:top-[20%] "
//           />

//           <Image
//             src="/assets/Cloud.webp"
//             alt="Cloud"
//             style={{
//               position: "absolute",
//               right: "1rem",
//               top: "25%",
//               width: "3.5rem",
//               height: "2rem",
//               opacity: 0.9,
//               filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
//               animation: "floatCloud2 6s ease-in-out infinite",
//               zIndex: 1,
//             }}
//             className="max-sm:!right-[-4rem] min-md:!right-32 min-md:!h-16 min-md:!w-16
//             min-lg:!right-48 min-lg:!h-20 min-lg:!w-20
//             min-xl:!right-64 min-xl:!h-28 min-xl:!w-28 "
//           />

//           <Image
//             src="/assets/Cloud.webp"
//             alt="Cloud"
//             style={{
//               position: "absolute",
//               right: "-8rem",
//               top: "-20%",
//               width: "8rem",
//               height: "5rem",
//               opacity: 0.9,
//               filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))",
//               transform: "scaleX(-1)",
//               animation: "floatCloud3 10s ease-in-out infinite",
//               zIndex: 1,
//             }}
//             className="max-sm:!top-5 max-sm:!right-[-6rem] max-sm:!h-24 max-sm:!w-24 min-md:!right-16 min-md:!top-20
//             min-lg:!right-32 min-lg:!top-24 min-lg:!h-32 min-lg:!w-32 
//             min-xl:!right-48 min-xl:!top-40 min-xl:!h-40 min-xl:!w-40"
//           />
//         </Box>

//         <Box
//           style={{
//             textAlign: "center",
//             marginTop: "1.5rem",
//             width: "100%",
//             maxWidth: "24rem",
//           }}
//         >
//           <Group justify="center" mt={20}>
//             <div
//               style={{
//                 display: "inline-block",
//                 padding: "10px",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={handleHover}
//               onMouseLeave={handleLeave}
//               onClick={handleClick}
//               className="md:p-3"
//             >
//               <Text
//                 className="pixel-font hover:max-sm:!scale-[0.7] max-sm:!scale-[1.1]
//                  hover:min-md:!scale-[1.3] min-md:!scale-[2.2]
//                   min-md:!mt-28"
//                 style={{
//                   color: isHovered ? "#F6F4D3" : "#1f2937",
//                   textShadow: isHovered
//                     ? "0 0 10px #F6F4D3, 0 0 20px #F6F4D3, 0 0 30px #F6F4D3"
//                     : "none",
//                   transition: "all 0.3s ease",
//                   margin: 0,
//                 }}
//               >
//                 {">"} PRESS START
//               </Text>
//             </div>
//           </Group>

//           <Group
//             justify="center"
//             mt={60}
//             className="!mt-0 min-md:!gap-[4.3rem] min-md:!translate-y-16  xl:mt-60"
//           >
//             <Text
//               className="pixel-font min-md:scale-[1.6]"
//               style={{
//                 color: "#1f2937",
//               }}
//             >
//               ©
//             </Text>
//             <Text
//               className="pixel-font min-md:scale-[1.4]"
//               style={{
//                 color: "#1f2937",
//               }}
//             >
//               2025 GLOBAL VISION
//             </Text>
//           </Group>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    setIsHovered(true);
    navigate("/menu");
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
    <Box
      className=" max-sm:h-screen max-sm:!w-screen "
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* frame image  */}
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
        className="max-sm:!h-full max-sm:!w-full  "
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
          className="!w-full !top-[13%] min-md:!w-full min-md:!top-[15%] min-lg:!top-[18%] 
          min-xl:!top-[22%]"
        >
          <Image
            src="/assets/Hero.webp"
            alt="GLOBAL VISION"
            style={{
              width: "100%",
              height: "auto",
              filter:
                "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
              marginBottom: "1rem",
              position: "relative",
              zIndex: 10,
            }}
            className="max-sm:!mb-0 !h-20 min-md:!h-20 min-lg:!h-40"
          />

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
            className="!left-20 !h-24 !w-24 min-md:!left-20 min-md:!h-32 min-md:!w-32
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
            className="!right-32 min-md:!right-32 min-md:!h-16 min-md:!w-16
            min-lg:!right-48 min-lg:!h-20 min-lg:!w-20
            min-xl:!right-64 min-xl:!h-28 min-xl:!w-28 "
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
            className="!top-5 !right-16 !h-24 !w-24 max-sm:!h-24 max-sm:!w-24 min-md:!right-16 min-md:!top-20
            min-lg:!right-32 min-lg:!top-24 min-lg:!h-32 min-lg:!w-32 
            min-xl:!right-48 min-xl:!top-40 min-xl:!h-40 min-xl:!w-40"
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
          <Group justify="center" mt={17}>
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
                className="pixel-font hover:!scale-[0.7]   !scale-[1]
                 hover:min-md:!scale-[1.2] min-md:!scale-[1.8]
                  min-md:!mt-20"
                style={{
                  color: isHovered ? "#F6F4D3" : "#1f2937",
                  textShadow: isHovered
                    ? "0 0 10px #F6F4D3, 0 0 20px #F6F4D3, 0 0 30px #F6F4D3"
                    : "none",
                  transition: "all 0.3s ease",
                  margin: 0,
                }}
              >
                {">"} PRESS START
              </Text>
            </div>
          </Group>

          <Group
            justify="center"
            mt={60}
            className="!mt-0 min-md:!gap-[4.3rem] min-md:!translate-y-16  xl:mt-60"
          >
            <Text
              className="pixel-font min-md:scale-[1.6]"
              style={{
                color: "#1f2937",
              }}
            >
              ©
            </Text>
            <Text
              className="pixel-font  min-md:scale-[1.1]"
              style={{
                color: "#1f2937",
              }}
            >
              2025 GLOBAL VISION
            </Text>
          </Group>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
