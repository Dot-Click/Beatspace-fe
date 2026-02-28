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



      {/* <Image
        src="/assets/Frame.png"
        alt="TV Frame"
        className="
        !h-full !top-0
          max-sm:!h-[30rem] max-sm:!top-[10%]
          min-md:!h-full min-md:!top-[0%]
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

      {/* Top-right GLOBAL VISION logo */}
      <Box
        style={{ position: "absolute", top: "8rem", right: "12rem", zIndex: 3 }}
        className="min-sm:!top-[14%] min-sm:!right-[11%] min-md:!top-[14%] min-md:!right-[11%]
        min-lg:!top-[14%] min-lg:!right-[11%] min-xl:!top-[14%] min-xl:!right-[11%]"
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{ width: "120px", height: "auto", filter: "brightness(1.2)" }}
          className="!w-14 max-sm:!w-12 min-md:!w-20 min-lg:!w-28 min-xl:!w-32"
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
        className="min-sm:!top-[14%]  min-sm:!left-[11%] min-md:!top-[14%] min-md:!left-[11%]
        min-lg:!top-[14%] min-lg:!left-[11%] min-xl:!top-[14%] min-xl:!left-[11%]"
      >
        <Box style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="min-md:!gap-0">
          <Box
            role="button"
            aria-label="Back"
            onClick={handleBack}
            style={{ cursor: "pointer" }}
            className="min-sm:!scale-[0.5] min-md:!scale-[0.5] min-lg:!scale-[0.6] min-xl:!scale-[0.7]"
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{ fontSize: "2rem", color: "#F6F4D3", letterSpacing: "3px" }}
            className="vision-font"
          >
            COMICS
          </Text>
        </Box>
        <Text
          style={{ fontSize: "1rem", color: "#F6F4D3", letterSpacing: "2px" }}
          className="alexandria-font min-sm:!scale-[0.5] min-md:!scale-[0.5] min-lg:!scale-[0.6] min-xl:!scale-[0.7] min-sm:-translate-x-8 min-sm:-translate-y-4"
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
          className="min-sm:!left-[13%] min-sm:!top-[35%] min-md:!left-[13%] min-md:!top-[35%] 
           min-lg:!top-[35%] min-lg:!left-[13%] min-xl:!top-[35%] min-xl:!left-[13%]"
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
            left: "35%",
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
          className="min-sm:!w-[130px] min-sm:!mt-10 min-sm:!h-[160px]
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
            right: "35%",
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
          className="min-sm:!right-[13%] min-sm:!top-[35%]  min-md:!top-[35%]  min-md:!right-[13%] min-lg:!top-[35%]
           min-lg:!right-[13%] min-xl:!right-[13%]   min-xl:!top-[35%]"
        >
          <BookreadIcon />
          <SliderIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Comicview;
