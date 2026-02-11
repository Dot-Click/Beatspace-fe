import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon } from "../../customIcons";

const Selectchapter = () => {
  const [hoveredChapter, setHoveredChapter] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/comics");
    }
  };

  const handleChapterClick = (chapterNumber) => {
    // Navigate to chapter reader
    // console.log(`Reading Chapter ${chapterNumber}`);
    navigate(`/comics/chapter/${chapterNumber}`);
  };

  const handleChapterHover = (chapterNumber) => {
    setHoveredChapter(chapterNumber);
  };

  const handleChapterLeave = () => {
    setHoveredChapter(null);
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
          max-sm:!h-[30rem] max-sm:!top-[10%]
          !h-full !top-[0%]
          min-md:!h-full min-md:!top-[0%]
          lg:!h-full lg:!w-full lg:!top-0
        "
      /> */}

      {/* Background */}
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

      {/* Global Vision Logo */}
      <Box
        style={{
          position: "absolute",
          top: "8rem",
          right: "12rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="min-sm:!top-[14%] min-sm:!right-[11%]
          max-sm:!top-[14%] max-sm:!right-[11%] min-md:!top-[14%] min-md:!right-[11%]
        min-lg:!top-[14%] min-lg:!right-[11%] min-xl:!top-[14%] min-xl:!right-[11%]"
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{
            width: "120px",
            height: "auto",
            filter: "brightness(1.2)",
          }}
          className="max-sm:!w-9 min-md:!w-20 min-lg:!w-28 min-xl:!w-32"
        />
      </Box>

      {/* Header with back button and titles */}
      <Box
        style={{
          position: "absolute",
          top: "8rem",
          left: "12rem",
          zIndex: 5,
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        className=" !top-[12%]  !left-[11%] min-lg:!left-[11%] max-sm:!top-[17%]  max-sm:!left-[11%]
         min-md:!top-[17%] min-md:!left-[11%]
        min-lg:!top-[17%] min-lg:!left-[11%] min-xl:!top-[17%] min-xl:!left-[11%]"
      >
        <Box style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className=" !w-fit !gap-0">
          <Box
            role="button"
            aria-label="Back to Comics"
            onClick={handleBack}
            style={{ cursor: "pointer" }}
            className="!scale-[0.4]  min-md:!scale-[0.6] max-sm:!scale-[0.3] min-lg:!scale-[0.9]"
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{
              fontSize: "2rem",
              color: "#F6F4D3",
              letterSpacing: "3px",
            }}
            className="vision-font max-sm:!text-[0.8rem] min-md:!text-[1rem] min-lg:!text-[1.15rem]"
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
          className="!scale-[0.5] vision-font max-sm:!scale-[0.3] min-md:!scale-[0.45]  min-lg:!scale-[0.78]
          !-translate-y-8 max-sm:-translate-x-10 max-sm:-translate-y-6 min-md:-translate-y-5 min-lg:!-translate-y-3"
        >
          SPACERACOON
        </Text>
      </Box>


      {/* Main Content Area */}

      <Box
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="!w-full "
      >
        {/* Content Container */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
          className="
     !absolute top-[30%] min-md:!top-[15%] min-lg:!top-[25%]
    min-sm:!custom-scrollbar min-sm:!overflow-y-auto min-sm:!h-[50%]

     max-sm:!h-[50%] max-sm:!mt-6 max-sm:!w-fit max-sm:!overflow-auto
     min-sm:!overflow-auto custom-scrollbar px-6 overflow-y-auto

    min-md:!mt-0 max-md:!mt-2 
    min-md:!ml-10 min-md:!h-fit
  "
        >

          {/* Comic Book Cover */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
            className=" h-full "
          >
            {/* Comic Cover Image */}
            <Box
              style={{
                width: "160px",
                height: "200px",
                border: "2px solid #d1c676",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                order: 1,
              }}
              className="!h-[60px] !w-[60px] max-sm:!h-[45px] min-sm:!h-[45px] min-sm:!w-[45px] max-sm:!w-[45px] min-md:!h-[80px] min-lg:!h-[120px]  min-md:!w-[80px] min-lg:!w-[120px]"
            >
              <Image
                src="/assets/comic.png"
                alt="Me and the Boys"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                }}
              />
            </Box>

            {/* Comic Title */}
            <Box
              style={{ textAlign: "left", order: 2 }}
              className="vision-font"
            >
              <Text
                style={{
                  fontSize: "1rem",
                  color: "#F6F4D3",
                  letterSpacing: "0.5px",
                  marginBottom: "0.2rem",
                }}
                className="min-md:!mb-0 max-sm:!text-[1rem] min-sm:!text-[1rem] min-md:!text-[1.9rem] min-lg:!text-[3rem]"
              >
                M€ and th€ Boys
              </Text>
              <Text
                style={{
                  fontSize: "0.5rem",
                  color: "#d1a94c",
                  letterSpacing: "1px",
                }}
                className="alexandria-font max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[1rem] min-lg:!text-[1.5rem]"
              >
                by SpaceRacoon
              </Text>
            </Box>
          </Box>

          {/* Chapter Selection List */}
          <Box
            className="alexandria-font "
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              width: "100%",
              maxWidth: "640px",
            }}
          >
            {/* Chapter 1 */}
            <Box
              className="alexandria-font "  
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                backgroundColor: hoveredChapter === 1 ? "#141414" : "#0e0e0e",
                border: "2px solid #d1c676",
                boxShadow: "0 0 0 2px #d1c676 inset",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minHeight: "64px",
              }}
              onClick={() => handleChapterClick(1)}
              onMouseEnter={() => handleChapterHover(1)}
              onMouseLeave={handleChapterLeave}
            >
              <Box
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Box
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#d1c676",
                    borderRadius: "2px",
                    border: "2px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="max-sm:!h-[25px] max-sm:!w-[25px] min-sm:!h-[25px] min-sm:!w-[25px] min-md:!h-[35px] min-md:!w-[35px] min-lg:!h-[45px] min-lg:!w-[45px]"
                >
                  <Text
                    style={{
                      fontSize: "1.2rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                    className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                  >
                    01
                  </Text>
                </Box>
                <Box>
                  <Text
                    style={{
                      fontSize: "0.9rem",
                      color: "#F6F4D3",
                      fontWeight: "500",
                      marginBottom: "0.2rem",
                    }}
                    className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                  >
                    Chapter 1 : The Beginning
                  </Text>
                  <Text
                    style={{
                      fontSize: "0.7rem",
                      color: "#9ca3af",
                    }}
                    className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                  >
                    3 Pages
                  </Text>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Text
                  style={{
                    fontSize: "0.8rem",
                    color: "#d1c676",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  }}
                  className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                >
                  READ
                </Text>
                <Box
                  style={{
                    height: "1px",
                    width: hoveredChapter === 1 ? "64px" : "48px",
                    backgroundColor: "#d1c676",
                    transition: "width 0.2s ease",
                  }}
                />
              </Box>
            </Box>

            {/* Chapter 2 */}
            <Box
              className="alexandria-font"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                backgroundColor: hoveredChapter === 2 ? "#141414" : "#0e0e0e",
                border: "2px solid #d1c676",
                boxShadow: "0 0 0 2px #d1c676 inset",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minHeight: "64px",
              }}
              onClick={() => handleChapterClick(2)}
              onMouseEnter={() => handleChapterHover(2)}
              onMouseLeave={handleChapterLeave}
            >
              <Box
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Box
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "#d1c676",
                    borderRadius: "2px",
                    border: "2px solid #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="max-sm:!h-[25px] max-sm:!w-[25px] min-sm:!h-[25px] min-sm:!w-[25px] min-md:!h-[35px] min-md:!w-[35px] min-lg:!h-[45px] min-lg:!w-[45px]"
                >
                  <Text
                    style={{
                      fontSize: "1.2rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}  
                    className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                  >
                    02
                  </Text>
                </Box>
                <Box>
                  <Text
                    style={{
                      fontSize: "0.9rem",
                      color: "#F6F4D3",
                      fontWeight: "500",
                      marginBottom: "0.2rem",
                    }}
                    className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                  >
                    Chapter 2 : The Adventure continues
                  </Text>
                  <Text
                    style={{
                      fontSize: "0.7rem",
                      color: "#9ca3af",
                    }}
                    className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                  >
                    3 Pages
                  </Text>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Text
                  style={{
                    fontSize: "0.8rem",
                    color: "#d1c676",
                    fontWeight: "500",
                    letterSpacing: "0.5px",
                  }}
                  className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
                >
                  READ
                </Text>
                <Box
                  style={{
                    height: "1px",
                    width: hoveredChapter === 2 ? "64px" : "48px",
                    backgroundColor: "#d1c676",
                    transition: "width 0.2s ease",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Instruction */}
      <Box
        style={{
          position: "absolute",
          bottom: "8rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="min-md:!bottom-12 !bottom-5 min-lg:!bottom-24 "
      >
        <Text
          className="alexandria-font max-sm:!text-[0.5rem] min-md:!text-[0.75rem] min-lg:!text-[1rem]"
          style={{
            color: "#9ca3af",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          Click on a chapter to start reading
        </Text>
      </Box>
    </Box>
  );
};

export default Selectchapter;
