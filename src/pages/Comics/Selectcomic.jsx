import React, { useState, useEffect } from "react";
import { Box, Text, Image } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../store/actions/adminActions";
import UserHeader from "../../components/common/UserHeader";

const Selectcomic = () => {
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { comics, isLoadingComics } = useSelector((state) => state.admin);
  
  const selectedAuthor = location.state?.author || "";

  useEffect(() => {
    if (comics.length === 0) {
      dispatch(getComics());
    }
  }, [dispatch, comics.length]);

  const filteredComics = selectedAuthor 
    ? comics.filter(comic => comic.author_name === selectedAuthor)
    : comics;

  const handleComicClick = (comic) => {
    navigate("/comics/select-chapter", { state: { comic } });
  };

  return (
    <>
      <UserHeader title="COMICS" subtitle={selectedAuthor.toUpperCase()} />

      {/* Main Content */}
      <Box
        style={{
          height: "100%",
          marginTop: "3rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          gap: "2rem",
          zIndex: 5,
        }}
        className="!p-13"
      >
        {isLoadingComics ? (
          <Text className="vision-font" style={{ color: "#F6F4D3" }}>LOADING...</Text>
        ) : filteredComics.length > 0 ? (
          filteredComics.map((comic) => (
            <Box key={comic._id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                style={{
                  position: "relative",
                  width: "210px",
                  height: "440px",
                  border: "3px solid #d1c676",
                  boxShadow: isHovered === comic._id ? "0 0 20px #d1c676" : "0 0 15px rgba(209,198,118,0.6), inset 0 0 5px #000",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                className="max-sm:!h-[210px] min-md:!h-fit !h-fit"
                onMouseEnter={() => setIsHovered(comic._id)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => handleComicClick(comic)}
              >
                <Box
                  className="custom-scrollbar !overflow-y-auto !scroll-smooth"
                  style={{
                    flex: 1,
                    height: "100%",
                    scrollbarWidth: "thin",
                  }}
                >
                  <Image
                    src={comic.thumbnailUrl || comic.image}
                    alt={comic.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      minHeight: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    style={{
                      background: "#0b0b0b",
                      borderTop: "6px solid #d1c676",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "10px",
                      userSelect: "none",
                    }}
                  >
                    <Text
                      className="vision-font"
                      style={{
                        color: "#F6F4D3",
                        fontSize: "5px",
                        lineHeight: 1.2,
                        textAlign: "left",
                        wordBreak: "break-word",
                        textTransform: "uppercase"
                      }}
                    >
                      {comic.title}
                    </Text>

                    <Text
                      className="vision-font"
                      style={{
                        color: "#d1a94c",
                        fontSize: "10px",
                        textAlign: "left",
                      }}
                    >
                      {comic.chapter_info?.length || 0} Chapters
                    </Text>
                  </Box>
                </Box>
              </Box>
              {isHovered === comic._id && (
                <Text
                  className="vision-font"
                  style={{
                    fontSize: "1.2rem",
                    color: "#f6f4d3",
                    letterSpacing: "1.5px",
                    marginTop: "1.5rem",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    textShadow: "0 0 6px rgba(209,198,118,0.8)",
                    zIndex: 10,
                    fontWeight: "bold",
                  }}
                >
                  Click to view chapters
                </Text>
              )}
            </Box>
          ))
        ) : (
          <Text className="vision-font" style={{ color: "#9ca3af" }}>NO COMICS FOUND FOR THIS ARTIST</Text>
        )}
      </Box>
    </>
  );
};

export default Selectcomic;
