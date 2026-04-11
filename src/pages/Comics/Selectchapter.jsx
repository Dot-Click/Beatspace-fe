import React, { useState } from "react";
import { Box, Text } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import UserHeader from "../../components/common/UserHeader";

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
const ChapterItem = ({ chapter, index, isHovered, onHover, onClick }) => {
  const chapterNumber = String(index + 1).padStart(2, '0');
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
      onClick={() => onClick(index + 1)}
      onMouseEnter={() => onHover(index + 1)}
      onMouseLeave={() => onHover(null)}
      className="vision-font"
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
                color: "#000",
                fontWeight: "900",
              }}
              className="!vision-font max-sm:!text-[0.9rem] min-sm:!text-[1rem] min-md:!text-[1.2rem] min-lg:!text-[1.8rem]"
            >
              {chapterNumber}
            </Text>
        </Box>
        <Box>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "900",
              marginBottom: "0.2rem",
              textTransform: "uppercase"
            }}
            className="!vision-font max-sm:!text-[1rem] min-sm:!text-[1.1rem] min-md:!text-[1.3rem] min-lg:!text-[2rem]"
          >
            Chapter {index + 1} : {chapter.chapter_title}
          </Text>
          <Text
            style={{
              color: COLORS.textSecondary,
              fontWeight: "700",
            }}
            className="!vision-font max-sm:!text-[0.8rem] min-sm:!text-[0.9rem] min-md:!text-[1.1rem] min-lg:!text-[1.5rem]"
          >
            {chapter.images?.length || 0} Pages
          </Text>
        </Box>
      </Box>
      <Box style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Text
          style={{
            color: COLORS.accent,
            fontWeight: "900",
            letterSpacing: "1px",
          }}
          className="!vision-font max-sm:!text-[0.8rem] min-sm:!text-[0.9rem] min-md:!text-[1.1rem] min-lg:!text-[1.5rem]"
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
  const location = useLocation();
  const comic = location.state?.comic;

  if (!comic) {
    return (
      <Box style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text className="vision-font" style={{ color: COLORS.primary }}>NO COMIC SELECTED</Text>
      </Box>
    );
  }

  const handleChapterClick = (chapterIndex) => {
    navigate(`/comics/chapter/${chapterIndex}`, { state: { comic, chapterIndex: chapterIndex - 1 } });
  };

  const handleChapterHover = (chapterIndex) => {
    setHoveredChapter(chapterIndex);
  };

  return (
    <>
      <UserHeader title="COMICS" subtitle={comic.author_name.toUpperCase()} />

      {/* Main Content */}
      <Box
        style={{
          height: "100%",
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
          className="max-sm:!h-[65%] max-sm:!overflow-y-auto min-md:!h-fit"
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
            <Box
              style={{ textAlign: "center", order: 2 }}
              className="vision-font"
            >
              <Text
                style={{
                  fontSize: "1.25rem",
                  color: COLORS.primary,
                  letterSpacing: "0.5px",
                  marginBottom: "0.2rem",
                  textTransform: "uppercase"
                }}
                className="max-sm:!text-[1.2rem] min-md:!text-[2rem] min-lg:!text-[3rem]"
              >
                {comic.title}
              </Text>
              <Text
                style={{
                  fontSize: "0.6rem",
                  color: COLORS.accentDark,
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}
                className="vision-font max-sm:!text-[0.6rem] min-md:!text-[0.7rem] min-lg:!text-[1.5rem]"
              >
                by {comic.author_name}
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
            className="vision-font lg:mt-0 mt-12 overflow-y-auto pr-2"
            sx={{ maxHeight: '400px' }}
          >
            {comic.chapter_info && comic.chapter_info.length > 0 ? (
              comic.chapter_info.map((chapter, index) => (
                <ChapterItem
                  key={index}
                  chapter={chapter}
                  index={index}
                  isHovered={hoveredChapter === index + 1}
                  onHover={handleChapterHover}
                  onClick={handleChapterClick}
                />
              ))
            ) : (
              <Text style={{ color: COLORS.textSecondary, textAlign: 'center' }}>NO CHAPTERS AVAILABLE</Text>
            )}
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
          className="vision-font max-sm:!text-[1.1rem] min-md:!text-[1.3rem] min-lg:!text-[1.8rem] font-bold"
          style={{
            color: COLORS.textSecondary,
            letterSpacing: "1.5px",
            textAlign: "center",
          }}
        >
          Click on a chapter to start reading
        </Text>
      </Box>
    </>
  );
};

export default SelectChapter;
