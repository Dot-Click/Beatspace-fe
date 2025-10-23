import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useParams, useNavigate } from "react-router-dom";
import { BackButtonIcon, BookreadIcon, SliderIcon } from "../../customIcons";

const Comicview = () => {
  const { chapterNumber } = useParams();
  const navigate = useNavigate();
  const [hoverL, setHoverL] = useState(false);
  const [hoverR, setHoverR] = useState(false);
  const pages = ["/assets/Me-and-the-boys.png"];
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((n) => (n > 0 ? n - 1 : n));
  const next = () => setIdx((n) => (n < pages.length - 1 ? n + 1 : n));

  const handleBack = () => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/comics/select-chapter");
      }
    } catch {
      navigate("/comics/select-chapter");
    }
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
      <Image
        src="/assets/Frame.png"
        alt="TV Frame"
        className="
          max-sm:!h-[30rem] max-sm:!top-[10%]
          min-md:!h-[34rem] min-md:!top-[25%]
          lg:!h-full lg:!w-full lg:!top-0
        "
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/assets/dark-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Top-right GLOBAL VISION logo */}
      <Box
        style={{ position: "absolute", top: "8rem", right: "12rem", zIndex: 3 }}
        className="max-sm:!top-[20%] max-sm:!right-12 min-md:!top-[34%] min-md:!right-20
        min-lg:!top-[7rem] min-lg:!right-28 min-xl:!top-[8.5rem] min-xl:!right-[10rem]"
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{ width: "120px", height: "auto", filter: "brightness(1.2)" }}
          className="max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-32"
        />
      </Box>

      {/* Header */}
      <Box
        style={{
          position: "absolute",
          top: "8rem",
          left: "12rem",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          pointerEvents: "auto",
        }}
        className="max-sm:!top-[18%]  max-sm:!left-12 min-md:!top-[32%] min-md:!left-20
        min-lg:!top-[7rem] min-lg:!left-28 min-xl:!top-[8.5rem] min-xl:!left-[10rem]"
      >
        <Box style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Box
            role="button"
            aria-label="Back"
            onClick={handleBack}
            style={{ cursor: "pointer" }}
            className="max-sm:!scale-[0.7]"
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{ fontSize: "2rem", color: "#F6F4D3", letterSpacing: "3px" }}
            className="max-sm:!scale-[0.7]"
          >
            COMICS
          </Text>
        </Box>
        <Text
          style={{ fontSize: "1rem", color: "#F6F4D3", letterSpacing: "2px" }}
          className="alexandria-font max-sm:!scale-[0.5] max-sm:-translate-x-8 max-sm:-translate-y-4"
        >
          Me and the Boys - The Beginning
        </Text>
      </Box>

      {/* Viewer */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
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
            left: "12rem",
            top: "16rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="max-sm:!left-12 max-sm:!top-60 min-md:!left-20 min-md:!top-[29rem] 
           min-lg:!top-52 min-lg:!left-28 min-xl:!top-64 min-xl:!left-40"
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
              className="alexandria-font"
              style={{ fontSize: "0.9rem", color: "#000", fontWeight: "bold" }}
            >
              {String(chapterNumber || 1).padStart(2, "0")}
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
            left: "30%",
            transform: "translateX(-160px)",
            cursor: "pointer",
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
          onClick={() => navigate("/comics/read")}
          style={{
            width: "320px",
            height: "480px",
            border: "3px solid #d1c676",
            boxShadow: "0 0 0 3px #000 inset",
            backgroundColor: "#0b0b0b",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            overflow: "hidden",
          }}
          className="max-sm:!w-[130px] max-sm:!-mt-4 max-sm:!h-[160px]
           min-md:!w-[160px] min-md:!mt-14 min-md:!h-[230px] min-xl:!w-[200px] min-xl:!mt-0 min-xl:!h-[300px]"
        >
          <Image
            src={pages[idx]}
            alt={`Chapter ${chapterNumber} page ${idx + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
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
            right: "30%",
            transform: "translateX(160px)",
            cursor: "pointer",
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

        {/* Small UI icons top-right inside viewer */}
        <Box
          style={{
            position: "absolute",
            top: "12rem",
            right: "12rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
          className="max-sm:!right-10 max-sm:!top-60 min-md:!top-[28rem]  min-md:!right-20 min-lg:!top-48
           min-lg:!right-28 min-xl:!right-[10rem] min-xl:!top-64"
        >
          <BookreadIcon />
          <SliderIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Comicview;
