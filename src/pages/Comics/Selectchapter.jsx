import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon } from "../../customIcons";

// Constants
const CHAPTERS = [
  {
    id: 1,
    number: "01",
    title: "The Beginning",
    pages: 3,
    fullTitle: "Chapter 1 : The Beginning",
  },
  {
    id: 2,
    number: "02",
    title: "The Adventure continues",
    pages: 3,
    fullTitle: "Chapter 2 : The Adventure continues",
  },
];

const COLORS = {
  background: "#111827",
  primary: "#F6F4D3",
  accent: "#d1c676",
  accentDark: "#d1a94c",
  textSecondary: "#9ca3af",
  dark: "#0e0e0e",
  darkHover: "#141414",
};

// Chapter Item Component
const ChapterItem = ({ chapter, isHovered, onHover, onClick }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1rem",
        backgroundColor: isHovered ? COLORS.darkHover : COLORS.dark,
        border: `2px solid ${COLORS.accent}`,
        boxShadow: `0 0 0 2px ${COLORS.accent} inset`,
        cursor: "pointer",
        transition: "all 0.2s ease",
        minHeight: "64px",
      }}
      onClick={() => onClick(chapter.id)}
      onMouseEnter={() => onHover(chapter.id)}
      onMouseLeave={() => onHover(null)}
      className="alexandria-font"
    >
      <Box style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Box
          style={{
            width: "44px",
            height: "44px",
            backgroundColor: COLORS.accent,
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
            {chapter.number}
          </Text>
        </Box>
        <Box>
          <Text
            style={{
              fontSize: "0.9rem",
              color: COLORS.primary,
              fontWeight: "500",
              marginBottom: "0.2rem",
            }}
            className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
          >
            {chapter.fullTitle}
          </Text>
          <Text
            style={{
              fontSize: "0.7rem",
              color: COLORS.textSecondary,
            }}
            className="max-sm:!text-[0.5rem] min-sm:!text-[0.5rem] min-md:!text-[0.7rem] min-lg:!text-[1rem]"
          >
            {chapter.pages} Pages
          </Text>
        </Box>
      </Box>
      <Box style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Text
          style={{
            fontSize: "0.8rem",
            color: COLORS.accent,
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
            width: isHovered ? "64px" : "48px",
            backgroundColor: COLORS.accent,
            transition: "width 0.2s ease",
          }}
        />
      </Box>
    </Box>
  );
};

// Main Component
const SelectChapter = () => {
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
    navigate(`/comics/chapter/${chapterNumber}`);
  };

  const handleChapterHover = (chapterNumber) => {
    setHoveredChapter(chapterNumber);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.background,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
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

      {/* Global Vision Logo */}
      <Box
        style={{
          position: "absolute",
          top: "8rem",
          right: "12rem",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="min-sm:!top-[14%] min-sm:!right-[11%] max-sm:!top-[14%] max-sm:!right-[11%] min-md:!top-[14%] min-md:!right-[11%] min-lg:!top-[14%] min-lg:!right-[11%] min-xl:!top-[14%] min-xl:!right-[11%]"
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

      {/* Header Section */}
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
        className="!top-[12%] !left-[11%] min-lg:!left-[11%] max-sm:!top-[12%] max-sm:!left-[11%] min-md:!top-[12%] min-md:!left-[11%]"
      >
        <Box style={{ display: "flex", alignItems: "center", gap: "0.5rem" }} className="!w-fit !gap-0">
          <Box
            role="button"
            aria-label="Back to Comics"
            onClick={handleBack}
            style={{ cursor: "pointer" }}
            className="!scale-[0.4] min-md:!scale-[0.5] max-sm:!scale-[0.35] min-lg:!scale-[0.6]"
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{
              fontSize: "1.25rem",
              color: COLORS.primary,
              letterSpacing: "2px",
            }}
            className="vision-font max-sm:!text-[0.9rem] min-md:!text-[1.1rem]"
          >
            COMICS
          </Text>
        </Box>
        <Text
          style={{
            fontSize: "0.75rem",
            color: COLORS.primary,
            letterSpacing: "2px",
            marginTop: "-0.5rem",
          }}
          className="vision-font max-sm:!scale-[0.6] min-md:!scale-[0.8] max-sm:!ml-[-1rem] min-md:!ml-[-0.5rem]"
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
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          pointerEvents: "auto",
        }}
        className="!w-full"
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            padding: "0 2rem",
          }}
          className="!absolute top-1/2 -translate-y-1/2 max-sm:!h-[65%] max-sm:!overflow-y-auto min-md:!h-fit"
        >
          {/* Comic Title Section */}
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}
            className="h-full"
          >
            <Box style={{ textAlign: "center", order: 2 }} className="vision-font">
              <Text
                style={{
                  fontSize: "1.25rem",
                  color: COLORS.primary,
                  letterSpacing: "0.5px",
                  marginBottom: "0.2rem",
                }}
                className="max-sm:!text-[1.2rem] min-md:!text-[2rem] min-lg:!text-[3rem]"
              >
                M€ and th€ Boys
              </Text>
              <Text
                style={{
                  fontSize: "0.6rem",
                  color: COLORS.accentDark,
                  letterSpacing: "1px",
                }}
                className="alexandria-font max-sm:!text-[0.6rem] min-md:!text-[0.7rem] min-lg:!text-[1.5rem]"
              >
                by SpaceRacoon
              </Text>
            </Box>
          </Box>

          {/* Chapter List */}
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              width: "100%",
              maxWidth: "550px",
            }}
            className="alexandria-font lg:mt-0 mt-12"
          >
            {CHAPTERS.map((chapter) => (
              <ChapterItem
                key={chapter.id}
                chapter={chapter}
                isHovered={hoveredChapter === chapter.id}
                onHover={handleChapterHover}
                onClick={handleChapterClick}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom Instruction */}
      <Box
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          pointerEvents: "auto",
        }}
      >
        <Text
          className="alexandria-font max-sm:!text-[0.5rem] min-md:!text-[0.75rem] min-lg:!text-[1rem]"
          style={{
            color: COLORS.textSecondary,
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

export default SelectChapter;