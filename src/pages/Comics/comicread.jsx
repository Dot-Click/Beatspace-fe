import React, { useState, useEffect } from "react";
import { Box, Text, Image, Button } from "@mantine/core";
import SupportArtistModal from "../../components/modalContents/SupportArtistModal";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { BackButtonIcon, BookreadIcon, SliderIcon } from "../../customIcons";

const Comicread = () => {
  const navigate = useNavigate();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Array(3).fill("/assets/comicpage.png"); // Mocking more pages for testing navigation

  // Mobile detection
  const isMobileMediaQuery = useMediaQuery("(max-width: 1024px)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileMediaQuery);
  }, [isMobileMediaQuery]);

  // Automatically open support modal when last page is reached
  useEffect(() => {
    if (currentPage === pages.length - 1 && !isSupportOpen) {
      setIsSupportOpen(true);
    }
  }, [currentPage, pages.length]);

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

  const nextPage = (e) => {    
    if (e) e.stopPropagation();
    if (currentPage < pages.length - 1) {
      console.log("Navigating to next page:", currentPage + 1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = (e) => {
    if (e) e.stopPropagation();
    if (currentPage > 0) {
      console.log("Navigating to previous page:", currentPage - 1);
      setCurrentPage(prev => prev - 1);
    }
  };

  if (isMobile) {
    return (
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#000",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          display: "flex",
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
          `}
        </style>

        {/* Minimal Back Button Overlay */}
        <Box
          onClick={handleBack}
          style={{
            position: "fixed",
            top: "1.5rem",
            left: "1.5rem",
            zIndex: 100,
            cursor: "pointer",
            background: "rgba(0,0,0,0.4)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box style={{ transform: "scale(0.8)" }}>
            <BackButtonIcon />
          </Box>
        </Box>

        {pages.map((page, index) => (
          <Box
            key={index}
            style={{
              height: "100vh",
              width: "100vw",
              minWidth: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              scrollSnapAlign: "start",
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
              }}
            />
          </Box>
        ))}

        {/* End of chapter panel for mobile */}
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
            gap: "2.5rem",
            backgroundColor: "#000"
          }}
        >
          <Box style={{ border: "2px solid #d1c676", padding: "1.5rem", textAlign: "center", width: "80%" }}>
            <Text className="vision-font" style={{ color: "#F6F4D3", fontSize: "1.5rem", letterSpacing: "3px" }}>
              COMING SOON
            </Text>
          </Box>
          <Button
            onClick={() => setIsSupportOpen(true)}
            style={{ backgroundColor: "#d1c676", color: "#000", fontWeight: "bold" }}
          >
            Support Artist
          </Button>
        </Box>

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

  // Laptop View: Full Screen Image Viewer
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        overflow: "hidden"
      }}
    >
      {/* Back Button */}
      <Box
        onClick={handleBack}
        style={{
          position: "absolute",
          top: "2.5rem",
          left: "2.5rem",
          zIndex: 20,
          cursor: "pointer",
          opacity: 0.6,
          transition: "all 0.3s ease",
          background: "rgba(0,0,0,0.5)",
          padding: "10px",
          borderRadius: "50%"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.6";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Box style={{ transform: "scale(1.2)" }}>
          <BackButtonIcon />
        </Box>
      </Box>

      {/* Main Comic Image container */}
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <Image
          key={currentPage} // Force re-render for animation if needed
          src={pages[currentPage]}
          alt={`Page ${currentPage + 1}`}
          style={{
            height: "98vh",
            width: "auto",
            maxWidth: "98vw",
            objectFit: "contain",
          }}
        />

        {/* Left Arrow Button */}
        {currentPage > 0 && (
          <Box
            onClick={prevPage}
            style={{
              position: "absolute",
              left: "2rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 15,
              cursor: "pointer",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgba(246, 244, 211, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              border: "1px solid rgba(246, 244, 211, 0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(246, 244, 211, 0.3)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(246, 244, 211, 0.1)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <Text style={{ color: "#F6F4D3", fontSize: "2rem", fontWeight: "bold", userSelect: "none" }}>
              «
            </Text>
          </Box>
        )}

        {/* Right Arrow Button */}
        {currentPage < pages.length - 1 && (
          <Box
            onClick={nextPage}
            style={{
              position: "absolute",
              right: "2rem",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 15,
              cursor: "pointer",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "rgba(246, 244, 211, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              border: "1px solid rgba(246, 244, 211, 0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(246, 244, 211, 0.3)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(246, 244, 211, 0.1)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <Text style={{ color: "#F6F4D3", fontSize: "2rem", fontWeight: "bold", userSelect: "none" }}>
              »
            </Text>
          </Box>
        )}

        {/* Click-to-Next Global Overlay (Invisible side zones for easy clicking) */}
        <Box
          onClick={prevPage}
          style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "15%", zIndex: 5, cursor: "pointer" }}
        />
        {currentPage < pages.length - 1 && (
          <Box
            onClick={nextPage}
            style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "15%", zIndex: 5, cursor: "pointer" }}
          />
        )}

        {/* End Interaction (on last page) */}
        {currentPage === pages.length - 1 && (
          <Box
            style={{
              position: "absolute",
              bottom: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              zIndex: 20
            }}
          >
            <Box style={{ backgroundColor: "rgba(0,0,0,0.85)", border: "2px solid #d1c676", borderRadius: "12px", padding: "1.5rem 3rem", textAlign: "center" }}>
              <Text className="vision-font" style={{ color: "#F6F4D3", fontSize: "1.2rem", marginBottom: "1rem", letterSpacing: "2px" }}>
                END OF CHAPTER
              </Text>
              <Button
                onClick={() => setIsSupportOpen(true)}
                style={{
                  backgroundColor: "#BEB97A",
                  color: "#000",
                  fontWeight: "900",
                  height: "45px",
                  borderRadius: "8px",
                  letterSpacing: "1px"
                }}
                className="vision-font"
              >
                SUPPORT THE ARTIST
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      {/* Support Modal */}
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
