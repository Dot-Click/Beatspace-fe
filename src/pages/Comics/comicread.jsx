import React, { useState } from "react";
import { Box, Text, Image } from "@mantine/core";
import SupportArtistModal from "../../components/modalContents/SupportArtistModal";
import { useNavigate } from "react-router-dom";
import { BackButtonIcon, BookreadIcon, SliderIcon } from "../../customIcons";

const Comicread = () => {
  const navigate = useNavigate();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const pages = Array(2).fill("/assets/comicpage.png");

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

  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Screen Frame and BG */}
      <Image
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
        style={{ position: "absolute", top: "20%", right: "13%", zIndex: 3 }}
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{ width: "120px", height: "auto", filter: "brightness(1.2)" }}
        />
      </Box>

      {/* Header */}
      <Box
        style={{
          position: "absolute",
          top: "20%",
          left: "13%",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          pointerEvents: "auto",
        }}
      >
        <Box style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Box
            role="button"
            aria-label="Back"
            onClick={handleBack}
            style={{ cursor: "pointer" }}
          >
            <BackButtonIcon />
          </Box>
          <Text
            style={{ fontSize: "2rem", color: "#F6F4D3", letterSpacing: "3px" }}
          >
            COMICS
          </Text>
        </Box>
        <Text
          className="alexandria-font"
          style={{ fontSize: "1rem", color: "#F6F4D3", letterSpacing: "2px" }}
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
            left: "13%",
            top: "35%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
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
              className="alexandria-font"
              style={{ fontSize: "0.9rem", color: "#000", fontWeight: "bold" }}
            >
              01
            </Text>
          </Box>
        </Box>

        {/* Scroll container using global custom scrollbar */}
        <Box
          className="custom-scrollbar"
          style={{
            position: "absolute",
            left: "3%",
            top: "35%",
            zIndex: 3,
            pointerEvents: "auto",
            width: "calc(100% - 13%)",
            height: "46%",
            overflowY: "scroll",
          }}
        >
          {/* Ensure scroll area does not allow children to bleed horizontally */}
          {/* Overflow hidden is handled per card; keeping vertical scroll only here */}
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
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
              >
                <Image
                  src={src}
                  alt={`Page ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
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
              {/* Double-border card */}
              <Box
                style={{
                  backgroundColor: "transparent",
                  padding: "0.3rem",
                  border: "2px solid #d1c676",
                }}
              >
                <Box
                  style={{
                    padding: "1.2rem 1.8rem",
                    border: "2px solid #d1c676",
                    backgroundColor: "#000",
                    width: "340px",
                    textAlign: "center",
                  }}
                >
                  <Text
                    className="vision-font-regular"
                    style={{
                      color: "#F6F4D3",
                      fontSize: "0.85rem",
                      letterSpacing: "2px",
                      marginBottom: "0.8rem",
                    }}
                  >
                    Next Chapter
                  </Text>
                  <Text
                    className="vision-font-regular"
                    style={{
                      color: "#F6F4D3",
                      fontSize: "1.8rem",
                      letterSpacing: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span style={{ color: "#d1c676" }}>
                      <svg
                        width="22"
                        height="33"
                        viewBox="0 0 22 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.29258 26.2341C8.29258 24.9858 7.93592 24.6292 7.22262 25.1642C6.50931 25.8775 6.50931 26.5908 7.22262 27.3041C7.57927 27.6607 7.84676 27.6607 8.02509 27.3041C8.20341 27.1258 8.29258 26.7691 8.29258 26.2341ZM13.3749 24.8967C13.7315 25.7883 13.9099 26.8583 13.9099 28.1066C13.9099 31.3164 12.2158 32.9214 8.82756 32.9214C6.68764 32.9214 4.72604 32.2972 2.94278 31.049C0.981184 29.8007 0.000389099 28.2849 0.000389099 26.5016C0.000389099 24.7184 1.78365 20.6168 5.35019 14.1971C8.73839 7.95565 11.235 4.12162 12.8399 2.69501C14.8015 1.09007 17.0306 0.287601 19.5272 0.287601C21.1321 0.287601 21.9346 0.733414 21.9346 1.62505C21.9346 2.16003 20.2405 5.6374 16.8523 12.0572C14.1774 16.872 12.8399 20.2602 12.8399 22.2218C12.8399 23.2917 13.0182 24.1834 13.3749 24.8967Z"
                          fill="#C7C048"
                        />
                      </svg>
                    </span>
                    <span>COMING SOON</span>
                    <span style={{ color: "#d1c676" }}>
                      <svg
                        width="24"
                        height="35"
                        viewBox="0 0 24 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.87809 27.1038C8.83609 26.3035 9.33846 26.3486 9.38519 27.239C9.29506 28.2437 8.74763 28.701 7.7429 28.6109C7.24053 28.5658 7.06904 28.3605 7.22843 27.995C7.25096 27.7438 7.46752 27.4468 7.87809 27.1038ZM5.64624 22.3459C4.7333 22.6438 3.79782 23.1929 2.83982 23.9932C0.376382 26.051 0.230758 28.3801 2.40295 30.9804C3.77486 32.6227 5.51145 33.728 7.61271 34.2963C9.8283 35.0015 11.6204 34.7824 12.989 33.6391C14.3575 32.4959 16.362 28.4978 19.0024 21.6449C21.6202 15.0432 22.9621 10.6692 23.028 8.5229C23.0021 5.98853 22.1889 3.76334 20.5883 1.84734C19.5594 0.615618 18.7028 0.28557 18.0185 0.8572C17.6079 1.20018 16.0253 4.72968 13.2706 11.4457C11.2904 16.5854 9.54751 19.784 8.04208 21.0416C7.22093 21.7275 6.42232 22.1623 5.64624 22.3459Z"
                          fill="#C7C048"
                        />
                      </svg>
                    </span>
                  </Text>
                </Box>
              </Box>
              {/* Support button */}
              <Box
                role="button"
                aria-label="Support the Artist"
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
              >
                <Text
                  className="vision-font-regular"
                  style={{ fontWeight: "bold", letterSpacing: "2px" }}
                >
                  Support the Artist: 0,00€ »
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Small UI icons top-right inside viewer */}
        <Box
          className="min-xl:!top-60"
          style={{
            position: "absolute",
            top: "12rem",
            right: "12rem",
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <BookreadIcon />
          <SliderIcon />
        </Box>

        {/* Removed custom vertical slider indicator and arrow buttons; using global custom-scrollbar */}
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
