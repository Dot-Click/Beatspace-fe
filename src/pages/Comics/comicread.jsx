import React, { useState, useEffect } from "react";
import { Box, Text, Image } from "@mantine/core";
import SupportArtistModal from "../../components/modalContents/SupportArtistModal";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { BackButtonIcon, BookreadIcon, SliderIcon } from "../../customIcons";

const Comicread = () => {
  const navigate = useNavigate();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const pages = Array(2).fill("/assets/comicpage.png");

  // Mobile detection
  const isMobileMediaQuery = useMediaQuery("(max-width: 1024px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  const handleBack = () => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/comics/chapter/1");
      }
    } catch {
      navigate("/comics/chapter/1");
    }
  };

  if (isMobile) {
    return (
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#000",
          overflowX: "auto", // Changed to horizontal scroll
          overflowY: "hidden",
          scrollSnapType: "x mandatory", // Changed to x
          display: "flex", // Ensure horizontal layout
          flexDirection: "row",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none !important;
            }
            .rotate-overlay { display: none !important; }
            .app-content { display: block !important; }
            body { overflow: hidden !important; }
          `}
        </style>

        {/* Blurred background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "blur(30px) brightness(0.3)",
          }}
        >
          <source src="/assets/bgvideo.mp4" type="video/mp4" />
        </video>

        {/* Minimal Back Button Overlay */}
        <Box
          onClick={handleBack}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            zIndex: 100,
            padding: "10px",
            cursor: "pointer",
            opacity: 0.5,
          }}
        >
          <Box style={{ transform: "scale(0.7)" }}>
            <BackButtonIcon />
          </Box>
        </Box>

        {/* Comic Pages in a Row */}
        {pages.map((page, index) => (
          <Box
            key={index}
            style={{
              height: "100vh",
              width: "100vw",
              minWidth: "100vw", // Ensure each page takes full width
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              overflow: "hidden",
            }}
          >
            <Image
              src={page}
              alt={`Page ${index + 1}`}
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                boxShadow: "0 0 50px rgba(0,0,0,0.5)",
              }}
            />
          </Box>
        ))}

        {/* End of chapter interaction on mobile */}
        <Box
          style={{
            height: "100vh",
            width: "100vw",
            minWidth: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            scrollSnapAlign: "start",
            gap: "2rem",
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.8)"
          }}
        >
          <Box
            style={{
              padding: "1.2rem 1.8rem",
              border: "2px solid #d1c676",
              backgroundColor: "#000",
              width: "280px",
            }}
          >
            <Text style={{ color: "#F6F4D3", fontSize: "0.8rem", letterSpacing: "2px", marginBottom: "0.5rem" }}>
              Next Chapter
            </Text>
            <Text style={{ color: "#F6F4D3", fontSize: "1.2rem", letterSpacing: "3px", fontWeight: "bold" }}>
              COMING SOON
            </Text>
          </Box>

          <Box
            role="button"
            onClick={() => setIsSupportOpen(true)}
            style={{
              backgroundColor: "#d1c676",
              color: "#000",
              border: "2px solid #000",
              borderRadius: "8px",
              padding: "1rem 1.5rem",
              boxShadow: "0 6px 0 #585411",
              cursor: "pointer",
            }}
          >
            <Text className="pixel-font" style={{ fontSize: "0.6rem", fontWeight: "bold" }}>
              Support the Artist »
            </Text>
          </Box>
        </Box>

        {/* Modal */}
        {isSupportOpen && (
          <SupportArtistModal
            isOpen={isSupportOpen}
            onClose={() => setIsSupportOpen(false)}
            beatName={"Me and the Boys"}
            artistName={"Space Racoon"}
            imageSrc={"/assets/comic.png"}
          />
        )}
      </Box>
    );
  }

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
            className="min-sm:!scale-[0.5]   min-md:!scale-[0.5] min-lg:!scale-[0.6] min-xl:!scale-[0.7]"
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{ fontSize: "2rem", color: "#F6F4D3", letterSpacing: "3px" }}
            className=" vision-font min-sm:!scale-[0.5] min-md:!scale-[0.5] min-lg:!scale-[0.6] min-xl:!scale-[0.7] min-sm:-translate-x-5"
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

      {/* Viewer Area */}
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
              01
            </Text>
          </Box>
        </Box>

        {/* Scroll container using global custom scrollbar */}
        <Box
          className="custom-scrollbar  max-sm:!h-44 min-md:!h-[60%] min-lg:!h-[60%]  max-sm:!w-[85%] min-md:!top-[20%] min-sm:!top-[35%] min-sm:!left-[30%] min-md:!left-[31%] min-md:!px-5 min-xl:!top-[20%]  min-xl:!h-[65%]    overflow-x-hidden 
          max-sm:!translate-x-1"
          style={{
            position: "absolute",
            left: "3%",
            top: "35%",
            zIndex: 3,
            pointerEvents: "auto",
            width: "calc(100% - 60%)",
            height: "46%",
            overflowY: "scroll",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
            className="!min-md:!gap-0"
          >
            {pages.map((src, i) => (
              <Box
                key={i}
                style={{
                  width: "360px",
                  height: "480px",
                  border: "3px solid #d1c676",
                  boxShadow: "0 0 0 3px #000 inset",
                  backgroundColor: "#0b0b0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
                className="min-sm:!h-[140px] min-sm:!w-[120px] min-md:!h-[190px] min-md:!w-[190px]
                min-lg:!h-[350px] min-lg:!w-[250px] min-xl:!h-[450px] min-xl:!w-[350px] "
              >
                <Image src={src} alt={`Page ${i + 1}`} style={{ width: "100%", height: "100%" }} />
              </Box>
            ))}

            {/* End-of-chapter panel */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.2rem",
                paddingBottom: "2rem",
              }}
            >
              <Box style={{ backgroundColor: "transparent", padding: "0.3rem", border: "2px solid #d1c676" }}>
                <Box
                  style={{
                    padding: "1.2rem 1.8rem",
                    border: "2px solid #d1c676",
                    backgroundColor: "#000",
                    width: "340px",
                    textAlign: "center",
                  }}
                  className="max-sm:!w-[250px] min-md:!w-[250px] min-md:!px-3 min-md:!py-2 max-sm:!px-[0.6rem] max-sm:!py-[1rem]"
                >
                  <Text className="vision-font max-sm:!text-xs min-md:!text-3xl" style={{ color: "#F6F4D3", fontSize: "0.85rem", letterSpacing: "2px", marginBottom: "0.8rem" }}>
                    Next Chapter
                  </Text>
                  <Text className="vision-font max-sm:!text-sm" style={{ color: "#F6F4D3", fontSize: "1.8rem", letterSpacing: "3px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem" }}>
                    COMING SOON
                  </Text>
                </Box>
              </Box>
              <Box
                role="button"
                onClick={() => setIsSupportOpen(true)}
                style={{
                  backgroundColor: "#d1c676",
                  color: "#000",
                  border: "2px solid #000",
                  borderRadius: "8px",
                  padding: "0rem 1rem",
                  boxShadow: "0 6px 0 #585411",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                className="max-sm:!w-fit !w-full max-sm:!translate-x-4 max-sm:!py-3 !py-4 pixel-font"
              >
                <Text className=" max-sm:!text-[0.4rem] !font-bold !text-[0.67rem]" style={{ fontWeight: "bold", letterSpacing: "2px" }}>
                  Support the Artist: 0,00€ »
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            position: "absolute",
            top: "12rem",
            right: "12rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
          className="min-sm:!right-[13%] min-sm:!top-[35%] min-md:!top-[35%]  min-md:!right-[13%] min-lg:!top-[35%]
                  min-lg:!right-[13%] min-xl:!right-[13%] min-xl:!top-[35%]"
        >
          <BookreadIcon />
          <SliderIcon />
        </Box>
      </Box>

      {/* Modal */}
      {isSupportOpen && (
        <SupportArtistModal
          isOpen={isSupportOpen}
          onClose={() => setIsSupportOpen(false)}
          beatName={"Me and the Boys"}
          artistName={"Space Racoon"}
          imageSrc={"/assets/comic.png"}
        />
      )}
    </Box>
  );
};

export default Comicread;
