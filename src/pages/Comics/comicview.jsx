import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { BookreadIcon, SliderIcon } from "../../customIcons";
import UserHeader from "../../components/common/UserHeader";

const Comicview = () => {
  const { chapterNumber } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [hoverL, setHoverL] = useState(false);
  const [hoverR, setHoverR] = useState(false);
  
  const comic = location.state?.comic;
  const chapterIndex = location.state?.chapterIndex ?? 0;
  
  const chapter = comic?.chapter_info?.[chapterIndex];
  const pages = chapter?.images?.length > 0 ? chapter.images : [comic?.image]; // Fallback to cover if no pages
  
  const [idx, setIdx] = useState(0);
  
  const prev = (e) => {
    e.stopPropagation();
    setIdx((n) => (n > 0 ? n - 1 : n));
  };
  const next = (e) => {
    e.stopPropagation();
    setIdx((n) => (n < pages.length - 1 ? n + 1 : n));
  };

  const openReader = () => {
    navigate("/comics/read", { state: { comic, chapterIndex, initialPage: idx } });
  };

  if (!comic || !chapter) {
    return (
      <Box style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text className="vision-font" style={{ color: "#F6F4D3" }}>COMIC OR CHAPTER NOT FOUND</Text>
      </Box>
    );
  }

  return (
    <>
      <UserHeader title="COMICS" subtitle={`${comic.title} - ${chapter.chapter_title}`} />

      {/* Viewer Area */}
      <Box
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        {/* Chapter badge left */}
        <Box
          style={{
            position: "absolute",
            left: "12%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            zIndex: 10,
          }}
        >
          <Box
            style={{
              width: "48px",
              height: "28px",
              backgroundColor: "#d1c676",
              borderRadius: "2px",
              border: "2px solid #000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              className="vision-font"
              style={{ fontSize: "1.2rem", color: "#000", fontWeight: "900" }}
            >
              {String(chapterIndex + 1).padStart(2, "0")}
            </Text>
          </Box>
        </Box>

        {/* Left arrow */}
        <Box
          role="button"
          aria-label="Prev"
          onMouseEnter={() => setHoverL(true)}
          onMouseLeave={() => setHoverL(false)}
          onClick={prev}
          style={{
            position: "absolute",
            left: "35%",
            transform: "translateX(-160px)",
            cursor: "pointer",
            visibility: idx > 0 ? 'visible' : 'hidden'
          }}
        >
          <Box
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: `10px solid ${hoverL ? "#F6F4D3" : "#d1c676"}`,
              transform: "rotate(-270deg)",
            }}
          />
        </Box>

        {/* Comic image with frame */}
        <Box
          role="button"
          aria-label="Open Reader" 
          onClick={openReader}
          style={{
            border: "3px solid #d1c676",
            boxShadow: "0 0 0 3px #000 inset",
            backgroundColor: "#0b0b0b",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            overflow: "hidden",
          }}
          className="mt-12 min-sm:!w-[110px] min-sm:!h-[160px] min-md:!w-[140px] min-md:!h-[200px] min-xl:!w-[180px] min-xl:!h-[260px]"
        >
          <Image
            src={pages[idx]}
            alt={`Chapter ${chapterIndex + 1} page ${idx + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right arrow */}
        <Box
          role="button"
          aria-label="Next"
          onMouseEnter={() => setHoverR(true)}
          onMouseLeave={() => setHoverR(false)}
          onClick={next}
          style={{
            position: "absolute",
            right: "35%",
            transform: "translateX(160px)",
            cursor: "pointer",
            visibility: idx < pages.length - 1 ? 'visible' : 'hidden'
          }}
        >
          <Box
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: `10px solid ${hoverR ? "#F6F4D3" : "#d1c676"}`,
              transform: "rotate(270deg)",
            }}
          />
        </Box>

        {/* Small UI icons right */}
        <Box
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "12%",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
            zIndex: 10,
          }}
        >
          <BookreadIcon />
          <SliderIcon />
        </Box>
      </Box>
    </>
  );
};

export default Comicview;
