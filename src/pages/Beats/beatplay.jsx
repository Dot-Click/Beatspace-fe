// import React, { useState, useRef, useEffect, useMemo } from "react";
// import { Box, Text, Group, Image } from "@mantine/core";
// import {
//   beatsIcon,
//   playIcon,
//   pauseIcon,
//   downloadIcon,
//   streamIcon,
//   BackButtonIcon,
// } from "../../customIcons";
// import SupportArtistModal from "../../components/modalContents/SupportArtistModal";
// import { useNavigate } from "react-router-dom";
// import AudioWaveform from "../../components/AudioWaveform";

// const BeatPlay = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedBeat, setSelectedBeat] = useState(null);
//   const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
//   const [audioProgress, setAudioProgress] = useState({});
//   const [audioCurrentTime, setAudioCurrentTime] = useState({});
//   const [audioDuration, setAudioDuration] = useState({});
//   const audioRefs = useRef({});
//   const navigate = useNavigate();
//   const beatItems = useMemo(() => [
//     { 
//       id: 0,
//       name: "eFELKIT", 
//       waveform: "audio-waveform-1",
//       audioUrl: "/assets/audio.wav"
//     },
//     { 
//       id: 1,
//       name: "eFELKIT", 
//       waveform: "audio-waveform-2",
//       audioUrl: "/assets/sample-9s.mp3"
//     },
//     { 
//       id: 2,
//       name: "eFELKIT", 
//       waveform: "audio-waveform-3",
//       audioUrl: "/assets/sample-6s.mp3"
//     },
//     { 
//       id: 3,
//       name: "eFELKIT", 
//       waveform: "audio-waveform-4",
//       audioUrl: "/assets/audio.wav"
//     },
//     { 
//       id: 4,
//       name: "eFELKIT", 
//       waveform: "audio-waveform-5",
//       audioUrl: "/assets/sample-9s.mp3"
//     },
//     { 
//       id: 5,
//       name: "eFELKIT", 
//       waveform: "audio-waveform-6",
//       audioUrl: "/assets/sample-6s.mp3"
//     },
//   ], []);

//   const handleItemHover = () => {
//     setIsHovered(true);
//   };

//   const handleItemLeave = () => {
//     setIsHovered(false);
//   };


//   const formatTime = (seconds) => {
//     if (!seconds || isNaN(seconds)) return "0.00";
//     return seconds.toFixed(2);
//   };

//   // Initialize audio elements
//   useEffect(() => {
//     beatItems.forEach((beat) => {
//       // Only create audio element if audioUrl is provided and not empty
//       if (!audioRefs.current[beat.id] && beat.audioUrl && beat.audioUrl.trim() !== "") {
//         const audio = new Audio();
//         audio.preload = "metadata";
//         audio.crossOrigin = "anonymous";
        
//         // Set up error handling
//         audio.addEventListener("error", (e) => {
//           console.error(`Error loading audio for ${beat.name}:`, e);
//           console.error("Audio error details:", {
//             code: audio.error?.code,
//             message: audio.error?.message,
//             src: beat.audioUrl,
//           });
//         });

//         // Get duration when metadata is loaded
//         audio.addEventListener("loadedmetadata", () => {
//           if (audio.duration && !isNaN(audio.duration)) {
//             setAudioDuration((prev) => ({
//               ...prev,
//               [beat.id]: audio.duration,
//             }));
//           }
//         });

//         // Update progress and current time on timeupdate
//         audio.addEventListener("timeupdate", () => {
//           if (audio.duration && !isNaN(audio.duration)) {
//             const progress = audio.currentTime / audio.duration;
//             setAudioProgress((prev) => ({
//               ...prev,
//               [beat.id]: progress,
//             }));
//             setAudioCurrentTime((prev) => ({
//               ...prev,
//               [beat.id]: audio.currentTime,
//             }));
//           }
//         });

//         // Reset when audio ends
//         audio.addEventListener("ended", () => {
//           setCurrentlyPlaying(null);
//           setAudioProgress((prev) => ({
//             ...prev,
//             [beat.id]: 0,
//           }));
//           setAudioCurrentTime((prev) => ({
//             ...prev,
//             [beat.id]: 0,
//           }));
//         });

//         // Load the audio source
//         audio.addEventListener("canplaythrough", () => {
//           console.log(`Audio loaded for ${beat.name}`);
//         });

//         // Set the source after setting up listeners
//         audio.src = beat.audioUrl;
//         audioRefs.current[beat.id] = audio;
//       }
//     });

//     return () => {
//       // Cleanup audio elements
//       Object.values(audioRefs.current).forEach((audio) => {
//         if (audio) {
//           audio.pause();
//           audio.src = "";
//           audio.load(); // Reset the audio element
//         }
//       });
//     };
//   }, [beatItems]);

//   const handlePlay = async (beat) => {
//     const beatId = beat.id;
    
//     // Check if audio URL is provided
//     if (!beat.audioUrl || beat.audioUrl.trim() === "") {
//       alert(`No audio URL provided for ${beat.name}. Please add an audio URL in the beatItems array.`);
//       return;
//     }

//     const audio = audioRefs.current[beatId];

//     // If audio element doesn't exist, create it
//     if (!audio) {
//       // Create audio element on the fly
//       const newAudio = new Audio();
//       newAudio.preload = "metadata";
//       newAudio.crossOrigin = "anonymous";
//       newAudio.src = beat.audioUrl;

//       // Set up event listeners
//       newAudio.addEventListener("loadedmetadata", () => {
//         if (newAudio.duration && !isNaN(newAudio.duration)) {
//           setAudioDuration((prev) => ({
//             ...prev,
//             [beatId]: newAudio.duration,
//           }));
//         }
//       });

//       newAudio.addEventListener("timeupdate", () => {
//         if (newAudio.duration && !isNaN(newAudio.duration)) {
//           const progress = newAudio.currentTime / newAudio.duration;
//           setAudioProgress((prev) => ({
//             ...prev,
//             [beatId]: progress,
//           }));
//           setAudioCurrentTime((prev) => ({
//             ...prev,
//             [beatId]: newAudio.currentTime,
//           }));
//         }
//       });

//       newAudio.addEventListener("ended", () => {
//         setCurrentlyPlaying(null);
//         setAudioProgress((prev) => ({
//           ...prev,
//           [beatId]: 0,
//         }));
//         setAudioCurrentTime((prev) => ({
//           ...prev,
//           [beatId]: 0,
//         }));
//       });

//       newAudio.addEventListener("error", (e) => {
//         console.error(`Error loading audio for ${beat.name}:`, e);
//         alert(`Failed to load audio for ${beat.name}. Please check if the URL is valid and accessible.`);
//         setCurrentlyPlaying(null);
//       });

//       audioRefs.current[beatId] = newAudio;
      
//       // Try to play the newly created audio
//       try {
//         await newAudio.play();
//         setCurrentlyPlaying(beatId);
//       } catch (error) {
//         console.error("Error playing audio:", error);
//         alert(`Error playing ${beat.name}: ${error.message}`);
//       }
//       return;
//     }

//     // Check if audio has a valid source
//     // Note: audio.src might be the full URL, so we check if it contains the audioUrl
//     const hasValidSource = audio.src && 
//                           audio.src !== window.location.href && 
//                           audio.src.trim() !== "" &&
//                           (audio.src.includes(beat.audioUrl) || audio.readyState > 0);
    
//     if (!hasValidSource) {
//       console.error(`No valid audio source for ${beat.name}`, {
//         audioSrc: audio.src,
//         expectedUrl: beat.audioUrl,
//         readyState: audio.readyState
//       });
      
//       // Try to reload the audio source
//       audio.src = beat.audioUrl;
//       audio.load();
      
//       // Wait a bit and try again
//       setTimeout(async () => {
//         try {
//           await audio.play();
//           setCurrentlyPlaying(beatId);
//         } catch (err) {
//           alert(`Audio source not available for ${beat.name}. Please check if the file exists at ${beat.audioUrl}`);
//         }
//       }, 100);
//       return;
//     }

//     // If this beat is currently playing, pause it
//     if (currentlyPlaying === beatId && !audio.paused) {
//       audio.pause();
//       setCurrentlyPlaying(null);
//     } else {
//       // Pause all other audio
//       Object.keys(audioRefs.current).forEach((id) => {
//         if (id !== beatId.toString() && audioRefs.current[id]) {
//           audioRefs.current[id].pause();
//           audioRefs.current[id].currentTime = 0;
//         }
//       });

//       // Check if audio is ready to play
//       try {
//         // If audio hasn't loaded, wait for it
//         if (audio.readyState < 2) {
//           await new Promise((resolve, reject) => {
//             const timeout = setTimeout(() => {
//               reject(new Error("Audio loading timeout"));
//             }, 5000);

//             audio.addEventListener("canplay", () => {
//               clearTimeout(timeout);
//               resolve();
//             }, { once: true });

//             audio.addEventListener("error", (e) => {
//               clearTimeout(timeout);
//               reject(e);
//             }, { once: true });

//             audio.load();
//           });
//         }

//         // Play this audio
//         await audio.play();
//         setCurrentlyPlaying(beatId);
//       } catch (error) {
//         console.error("Error playing audio:", error);
//         if (error.name === "NotSupportedError" || error.name === "NotAllowedError") {
//           alert(`Cannot play audio for ${beat.name}. Please check if the audio format is supported and if autoplay is allowed.`);
//         } else {
//           alert(`Error playing ${beat.name}: ${error.message}`);
//         }
//         setCurrentlyPlaying(null);
//       }
//     }
//   };

//   const handleDownload = (beatName) => {
//     console.log(`Downloading: ${beatName}`);
//   };

//   const handleBeatNameClick = (beat) => {
//     console.log("Beat name clicked:", beat);
//     setSelectedBeat(beat);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedBeat(null);
//   };
  
//   const handleBack = () => {
//     if (window.history.length > 1) navigate(-1);
//      else navigate("/menu");
//    }; 
//   return (
//     <Box
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#111827",
//         position: "relative",
//         overflow: "hidden",
//       }}
//       className=""
//     >
//       <Image
//         src="/assets/Frame.png"
//         alt="TV Frame"
//         style={{
//           position: "absolute",
//           // position: "relative",
//           inset: 0,
//           width: "100%",
//           // height: "100%",
//           height: "100%",
//           objectFit: "fill",
//           zIndex: 2,
//           pointerEvents: "none",
//         }}
//         className="max-sm:!h-72 max-lg:!h-[55%] max-sm:!top-[35%] max-lg:!top-[25%] "
//       />

//       <Box
//         style={{
//           position: "absolute",
//           inset: 0,
//           backgroundColor: 'black',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: 1,
//           pointerEvents: "none",
//         }}
//       />

//       <Box
//         style={{
//           position: "absolute",
//           top: "14%",
//           right: "15%",
//           zIndex: 3,
//           pointerEvents: "auto",
//         }}
//         className="max-sm:!top-[39%]  max-sm:!right-[9%]  max-lg:!top-[33%]"
//       >
//         <Image
//           src="/assets/logo.png"
//           alt="GLOBAL VISION"
//           style={{
//             width: "120px",
//             height: "auto",
//             filter: "brightness(1.2)",
//           }}
//           className="max-sm:!w-16"
//         />
//       </Box>

//       <Box
//         style={{
//           position: "absolute",
//           top: "13%",
//           left: "15%",
//           zIndex: 4,
//           pointerEvents: "auto",
//           display: "flex",
//           alignItems: "center",
//           gap: "1rem",
//         }}
//         className="max-sm:!top-[39%] max-sm:!right-[9%] max-lg:!top-[32%]"
//       >
//         <Box
//         role="button"
//         aria-label="Back to Comics"
//         onClick={handleBack}
//         style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
//         className="max-sm:!scale-[0.7]"
//       >
//         <BackButtonIcon />
//       </Box>
//         <Box
//           style={{
//             width: "40px",
//             height: "30px",
//             backgroundColor: "#F6F4D3",
//             borderRadius: "6px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "relative",
//           }}
//           className="max-sm:!w-7 max-sm:!h-5"
//         >
//           {beatsIcon()}
//         </Box>

//         <Text
//           style={{
//             fontSize: "1.4rem",
//             color: "#F6F4D3",
//             letterSpacing: "2px",
//             textShadow: "0 0 10px #F6F4D3",
//           }}
//           className="max-sm:!text-[.99rem]"
//         >
//           BE★TS
//         </Text>
//       </Box>

//       <Box
//         className="custom-scrollbar max-sm:!top-[45%] max-sm:!h-[15%] max-lg:!top-[42%] max-lg:!h-[26%]"
//         style={{
//           position: "absolute",
//           // left: "12rem",
//           left: "12%",
//           top: "25%",
//           zIndex: 3,
//           pointerEvents: "auto",
//           // width: "calc(90% - 12rem)",
//           width: "calc(90% - 12%)",
//           // maxWidth: "1150px",
//           maxWidth: "100%",
//           // height: "500px",
//           height: "60%",
//           overflowY: "auto",
//         }}
//       >
//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "4rem",
//           }}
//           className="max-sm:!gap-4"
//         >
//           {beatItems.map((beat, index) => (
//             <Box
//               key={index}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "1rem",
//                 padding: "0.5rem",
//                 borderRadius: "4px",
//                 transition: "all 0.3s ease",
//                 cursor: "pointer",
//                 width: "60%",
//                 height: "100px",
//               }}
//               className="max-sm:!h-12"
//               onMouseEnter={handleItemHover}
//               onMouseLeave={handleItemLeave}
//             >
//               <Box
//                 style={{
//                   width: "70px",
//                   height: "70px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                 }}
//                 className="max-sm:!h-7 max-sm:!w-7 max-sm:translate-y-3 min-md:translate-y-5 "
//                 onClick={() => handlePlay(beat)}
//               >
//                 {currentlyPlaying === beat.id && 
//                  audioRefs.current[beat.id] && 
//                  !audioRefs.current[beat.id].paused
//                   ? pauseIcon()
//                   : playIcon()}
//               </Box>

//               <Box
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   gap: "0.5rem",
//                   flex: 1,
//                   minWidth: "300px",
//                   height: "70px",
//                 }}
//                 className="max-sm:!min-w-[200px]"
//               >
//                 {/* Artist name on top */}
//                 <Text
//                   style={{
//                     fontSize: "0.9rem",
//                     color: "#F6F4D3",
//                     letterSpacing: "2px",
//                     margin: 0,
//                     lineHeight: 1,
//                   }}
//                   className="max-sm:!text-[1.2rem] pixel-font max-sm:!scale-[0.9]
//                   min-md:!scale-[1] min-md:!mb-5"
//                 >
//                   {beat.name}
//                 </Text>

//                 {/* Waveform */}
//                 <Box
//                   style={{
//                     height: "43px",
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     borderRadius: "4px",
//                   }}
//                 >
//                   <AudioWaveform
//                     isPlaying={
//                       currentlyPlaying === beat.id &&
//                       audioRefs.current[beat.id] &&
//                       !audioRefs.current[beat.id].paused
//                     }
//                     progress={audioProgress[beat.id] || 0}
//                     audioRef={
//                       currentlyPlaying === beat.id ? audioRefs.current[beat.id] : null
//                     }
//                   />
//                 </Box>
                
//                 {/* Time duration at edges beneath waveform */}
//                 <Box
//                   style={{
//                     width: "100%",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                     marginTop: "-5px",
//                     height: "12px",
//                     paddingLeft: "0px",
//                     paddingRight: "0px",
//                   }}
//                 >
//                   {/* Current time at left edge */}
//                   <span
//                     style={{
//                       fontSize: "0.32rem",
//                       color: "#F6F4D3",
//                       letterSpacing: "0.1px",
//                       margin: 0,
//                       padding: 0,
//                       opacity: 0.6,
//                       lineHeight: 1,
//                       display: "inline-block",
//                       transform: "scale(0.8)",
//                       transformOrigin: "left center",
//                       fontFamily: "inherit",
//                     }}
//                   >
//                     {formatTime(audioCurrentTime[beat.id] || 0)}
//                   </span>
                  
//                   {/* Total duration at right edge */}
//                   <span
//                     style={{
//                       fontSize: "0.32rem",
//                       color: "#F6F4D3",
//                       letterSpacing: "0.1px",
//                       margin: 0,
//                       padding: 0,
//                       opacity: 0.6,
//                       lineHeight: 1,
//                       display: "inline-block",
//                       transform: "scale(0.8)",
//                       transformOrigin: "right center",
//                       fontFamily: "inherit",
//                     }}
//                   >
//                     {formatTime(audioDuration[beat.id] || 0)}
//                   </span>
//                 </Box>
//               </Box>

//               <Box
//                 style={{
//                   width: "70px",
//                   height: "70px",
//                   borderRadius: "4px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                 }}
//                 className="max-sm:!h-7 max-sm:!w-7 max-sm:translate-y-3 min-md:translate-y-5"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleBeatNameClick(beat);
//                 }}
//               >
//                 {downloadIcon()}
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>

//       <Box
//         style={{
//           position: "absolute",
//           bottom: "2rem",
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 3,
//         }}
//       ></Box>

//       {/* Support Artist Modal */}
//       <SupportArtistModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         beatName={selectedBeat?.name || "eFELKIT"}
//         artistName="SAPPHIRE"
//       />
//     </Box>
//   );
// };

// export default BeatPlay;
import React, { useState, useRef, useEffect, useMemo } from "react";
import { Box, Text, Group, Image } from "@mantine/core";
import {
  beatsIcon,
  playIcon,
  pauseIcon,
  downloadIcon,
  streamIcon,
  BackButtonIcon,
} from "../../customIcons";
import SupportArtistModal from "../../components/modalContents/SupportArtistModal";
import { useNavigate } from "react-router-dom";
import AudioWaveform from "../../components/AudioWaveform";

const BeatPlay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [audioProgress, setAudioProgress] = useState({});
  const [audioCurrentTime, setAudioCurrentTime] = useState({});
  const [audioDuration, setAudioDuration] = useState({});
  const audioRefs = useRef({});
  const navigate = useNavigate();
  const beatItems = useMemo(() => [
    { 
      id: 0,
      name: "eFELKIT", 
      waveform: "audio-waveform-1",
      audioUrl: "/assets/audio.wav"
    },
    { 
      id: 1,
      name: "eFELKIT", 
      waveform: "audio-waveform-2",
      audioUrl: "/assets/sample-9s.mp3"
    },
    { 
      id: 2,
      name: "eFELKIT", 
      waveform: "audio-waveform-3",
      audioUrl: "/assets/sample-6s.mp3"
    },
    { 
      id: 3,
      name: "eFELKIT", 
      waveform: "audio-waveform-4",
      audioUrl: "/assets/audio.wav"
    },
    { 
      id: 4,
      name: "eFELKIT", 
      waveform: "audio-waveform-5",
      audioUrl: "/assets/sample-9s.mp3"
    },
    { 
      id: 5,
      name: "eFELKIT", 
      waveform: "audio-waveform-6",
      audioUrl: "/assets/sample-6s.mp3"
    },
  ], []);

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
    setIsHovered(false);
  };


  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return "0.00";
    return seconds.toFixed(2);
  };

  // Initialize audio elements
  useEffect(() => {
    beatItems.forEach((beat) => {
      // Only create audio element if audioUrl is provided and not empty
      if (!audioRefs.current[beat.id] && beat.audioUrl && beat.audioUrl.trim() !== "") {
        const audio = new Audio();
        audio.preload = "metadata";
        audio.crossOrigin = "anonymous";
        
        // Set up error handling
        audio.addEventListener("error", (e) => {
          console.error(`Error loading audio for ${beat.name}:`, e);
          console.error("Audio error details:", {
            code: audio.error?.code,
            message: audio.error?.message,
            src: beat.audioUrl,
          });
        });

        // Get duration when metadata is loaded
        audio.addEventListener("loadedmetadata", () => {
          if (audio.duration && !isNaN(audio.duration)) {
            setAudioDuration((prev) => ({
              ...prev,
              [beat.id]: audio.duration,
            }));
          }
        });

        // Update progress and current time on timeupdate
        audio.addEventListener("timeupdate", () => {
          if (audio.duration && !isNaN(audio.duration)) {
            const progress = audio.currentTime / audio.duration;
            setAudioProgress((prev) => ({
              ...prev,
              [beat.id]: progress,
            }));
            setAudioCurrentTime((prev) => ({
              ...prev,
              [beat.id]: audio.currentTime,
            }));
          }
        });

        // Reset when audio ends
        audio.addEventListener("ended", () => {
          setCurrentlyPlaying(null);
          setAudioProgress((prev) => ({
            ...prev,
            [beat.id]: 0,
          }));
          setAudioCurrentTime((prev) => ({
            ...prev,
            [beat.id]: 0,
          }));
        });

        // Load the audio source
        audio.addEventListener("canplaythrough", () => {
          console.log(`Audio loaded for ${beat.name}`);
        });

        // Set the source after setting up listeners
        audio.src = beat.audioUrl;
        audioRefs.current[beat.id] = audio;
      }
    });

    return () => {
      // Cleanup audio elements
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
          audio.load(); // Reset the audio element
        }
      });
    };
  }, [beatItems]);

  const handlePlay = async (beat) => {
    const beatId = beat.id;
    
    // Check if audio URL is provided
    if (!beat.audioUrl || beat.audioUrl.trim() === "") {
      alert(`No audio URL provided for ${beat.name}. Please add an audio URL in the beatItems array.`);
      return;
    }

    const audio = audioRefs.current[beatId];

    // If audio element doesn't exist, create it
    if (!audio) {
      // Create audio element on the fly
      const newAudio = new Audio();
      newAudio.preload = "metadata";
      newAudio.crossOrigin = "anonymous";
      newAudio.src = beat.audioUrl;

      // Set up event listeners
      newAudio.addEventListener("loadedmetadata", () => {
        if (newAudio.duration && !isNaN(newAudio.duration)) {
          setAudioDuration((prev) => ({
            ...prev,
            [beatId]: newAudio.duration,
          }));
        }
      });

      newAudio.addEventListener("timeupdate", () => {
        if (newAudio.duration && !isNaN(newAudio.duration)) {
          const progress = newAudio.currentTime / newAudio.duration;
          setAudioProgress((prev) => ({
            ...prev,
            [beatId]: progress,
          }));
          setAudioCurrentTime((prev) => ({
            ...prev,
            [beatId]: newAudio.currentTime,
          }));
        }
      });

      newAudio.addEventListener("ended", () => {
        setCurrentlyPlaying(null);
        setAudioProgress((prev) => ({
          ...prev,
          [beatId]: 0,
        }));
        setAudioCurrentTime((prev) => ({
          ...prev,
          [beatId]: 0,
        }));
      });

      newAudio.addEventListener("error", (e) => {
        console.error(`Error loading audio for ${beat.name}:`, e);
        alert(`Failed to load audio for ${beat.name}. Please check if the URL is valid and accessible.`);
        setCurrentlyPlaying(null);
      });

      audioRefs.current[beatId] = newAudio;
      
      // Try to play the newly created audio
      try {
        await newAudio.play();
        setCurrentlyPlaying(beatId);
      } catch (error) {
        console.error("Error playing audio:", error);
        alert(`Error playing ${beat.name}: ${error.message}`);
      }
      return;
    }

    // Check if audio has a valid source
    // Note: audio.src might be the full URL, so we check if it contains the audioUrl
    const hasValidSource = audio.src && 
                          audio.src !== window.location.href && 
                          audio.src.trim() !== "" &&
                          (audio.src.includes(beat.audioUrl) || audio.readyState > 0);
    
    if (!hasValidSource) {
      console.error(`No valid audio source for ${beat.name}`, {
        audioSrc: audio.src,
        expectedUrl: beat.audioUrl,
        readyState: audio.readyState
      });
      
      // Try to reload the audio source
      audio.src = beat.audioUrl;
      audio.load();
      
      // Wait a bit and try again
      setTimeout(async () => {
        try {
          await audio.play();
          setCurrentlyPlaying(beatId);
        } catch (err) {
          alert(`Audio source not available for ${beat.name}. Please check if the file exists at ${beat.audioUrl}`);
        }
      }, 100);
      return;
    }

    // If this beat is currently playing, pause it
    if (currentlyPlaying === beatId && !audio.paused) {
      audio.pause();
      setCurrentlyPlaying(null);
    } else {
      // Pause all other audio
      Object.keys(audioRefs.current).forEach((id) => {
        if (id !== beatId.toString() && audioRefs.current[id]) {
          audioRefs.current[id].pause();
          audioRefs.current[id].currentTime = 0;
        }
      });

      // Check if audio is ready to play
      try {
        // If audio hasn't loaded, wait for it
        if (audio.readyState < 2) {
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              reject(new Error("Audio loading timeout"));
            }, 5000);

            audio.addEventListener("canplay", () => {
              clearTimeout(timeout);
              resolve();
            }, { once: true });

            audio.addEventListener("error", (e) => {
              clearTimeout(timeout);
              reject(e);
            }, { once: true });

            audio.load();
          });
        }

        // Play this audio
        await audio.play();
        setCurrentlyPlaying(beatId);
      } catch (error) {
        console.error("Error playing audio:", error);
        if (error.name === "NotSupportedError" || error.name === "NotAllowedError") {
          alert(`Cannot play audio for ${beat.name}. Please check if the audio format is supported and if autoplay is allowed.`);
        } else {
          alert(`Error playing ${beat.name}: ${error.message}`);
        }
        setCurrentlyPlaying(null);
      }
    }
  };

  const handleDownload = (beatName) => {
    console.log(`Downloading: ${beatName}`);
  };

  const handleBeatNameClick = (beat) => {
    console.log("Beat name clicked:", beat);
    setSelectedBeat(beat);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBeat(null);
  };
  
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
     else navigate("/menu");
   }; 
  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
      }}
      className=""
    >
      <Image
        src="/assets/Frame.png"
        alt="TV Frame"
        style={{
          position: "absolute",
          // position: "relative",
          inset: 0,
          width: "100%",
          // height: "100%",
          height: "100%",
          objectFit: "fill",
          zIndex: 2,
          pointerEvents: "none",
        }}
        className="min-sm:!h-full min-md:!h-full min-lg:!h-full  "
      />

     <Box
            style={{
              position: "absolute",
              top: "8rem",
              right: "12rem",
              zIndex: 4,
              pointerEvents: "auto",
            }}
            className="!top-[16%] !right-[12%] min-md:!top-[16%] min-md:!right-[12%]
            min-lg:!top-[16%] min-lg:!right-[12%] min-xl:!top-[16%] min-xl:!right-[12%]"
          >
            <Image
              src="/assets/logo.png"
              alt="GLOBAL VISION"
              style={{
                width: "120px",
                height: "auto",
                filter: "brightness(1.2)",
              }}
              className="!w-16 min-md:!w-20 min-lg:!w-28 min-xl:!w-36"
            />
          </Box>
    
          <Box
            style={{
              position: "absolute",
              top: "8rem",
              left: "12rem",
              zIndex: 4,
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
            className="!top-[15%] !gap-[0.4rem] min-lg:!gap-[1rem]  !left-[12%] min-md:!top-[15%] min-md:!left-[12%]
            min-lg:!top-[15%] min-lg:!left-[12%] min-xl:!top-[15%] min-xl:!left-[12%]"
          >
          <Box
            role="button"
            aria-label="Back to Comics"
            onClick={handleBack}
            style={{ cursor: "pointer", position: "relative", zIndex: 5 }}
            className="!scale-[0.5] min-lg:!scale-[0.7]"
          >
            <BackButtonIcon />
          </Box>
            <Box
              style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#F6F4D3",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              className="!w-7 !h-5 min-lg:!w-9 min-lg:!h-7"
            >
              {beatsIcon()}
            </Box>
    
            <Text
              style={{
                fontSize: "1.4rem",
                color: "#F6F4D3",
                letterSpacing: "2px",
                textShadow: "0 0 10px #F6F4D3",
              }}
              className="!text-base min-lg:!text-2xl"
            >
              BE★TS
            </Text>
          </Box>

      <Box
        className="custom-scrollbar !top-[30%]    !h-[55%]  min-lg:!top-[26%] min-lg:!h-[60%]"
        style={{
          position: "absolute",
          // left: "12rem",
          left: "12%",
          top: "25%",
          zIndex: 3,
          pointerEvents: "auto",
          // width: "calc(90% - 12rem)",
          width: "calc(90% - 12%)",
          // maxWidth: "1150px",
          maxWidth: "100%",
          // height: "500px",
          height: "60%",
          overflowY: "auto",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
          className="!gap-6"
        >
          {beatItems.map((beat, index) => (
            <Box
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.5rem",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                cursor: "pointer",
                width: "60%",
                height: "100px",
              }}
              className="!h-24 flex items-center justify-center min-lg:justify-start min-lg:!w-[75%] !w-[90%]"
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <Box
                style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                className="!h-8 !w-8 min-lg:!h-12 min-lg:!w-12 -translate-y-2   "
                onClick={() => handlePlay(beat)}
              >
                {currentlyPlaying === beat.id && 
                 audioRefs.current[beat.id] && 
                 !audioRefs.current[beat.id].paused
                  ? pauseIcon()
                  : playIcon()}
              </Box>

              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.5rem",
                  flex: 1,
                  height: "70px",
                }}
                className="!w-[70%] relative min-lg:!w-fit "
              >
                {/* Artist name on top */}
                <Text
                  style={{
                    fontSize: "0.9rem",
                    color: "#F6F4D3",
                    letterSpacing: "2px",
                    margin: 0,
                  }}
                  className="!text-[0.6rem] absolute -top-3 left-0 w-full pixel-font !scale-[0.9]
                  min-md:!scale-[1] min-md:!mb-5"
                >
                  {beat.name}
                </Text>

                {/* Waveform */}
                <Box
                  style={{
                    height: "43px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                  }}
                >
                  <AudioWaveform
                    isPlaying={
                      currentlyPlaying === beat.id &&
                      audioRefs.current[beat.id] &&
                      !audioRefs.current[beat.id].paused
                    }
                    progress={audioProgress[beat.id] || 0}
                    audioRef={
                      currentlyPlaying === beat.id ? audioRefs.current[beat.id] : null
                    }
                  />
                </Box>
                
                {/* Time duration at edges beneath waveform */}
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "-5px",
                    height: "12px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                  }}
                >
                  {/* Current time at left edge */}
                  <span
                    style={{
                      fontSize: "0.32rem",
                      color: "#F6F4D3",
                      letterSpacing: "0.1px",
                      margin: 0,
                      padding: 0,
                      opacity: 0.6,
                      lineHeight: 1,
                      display: "inline-block",
                      transform: "scale(0.8)",
                      transformOrigin: "left center",
                      fontFamily: "inherit",
                    }}
                  >
                    {formatTime(audioCurrentTime[beat.id] || 0)}
                  </span>
                  
                  {/* Total duration at right edge */}
                  <span
                    style={{
                      fontSize: "0.32rem",
                      color: "#F6F4D3",
                      letterSpacing: "0.1px",
                      margin: 0,
                      padding: 0,
                      opacity: 0.6,
                      lineHeight: 1,
                      display: "inline-block",
                      transform: "scale(0.8)",
                      transformOrigin: "right center",
                      fontFamily: "inherit",
                    }}
                  >
                    {formatTime(audioDuration[beat.id] || 0)}
                  </span>
                </Box>
              </Box>

              <Box
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                className="!h-8 !w-8 min-lg:!h-12 min-lg:!w-12 -translate-y-2 "
                onClick={(e) => {
                  e.stopPropagation();
                  handleBeatNameClick(beat);
                }}
              >
                {downloadIcon()}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      ></Box>

      {/* Support Artist Modal */}
      <SupportArtistModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        beatName={selectedBeat?.name || "eFELKIT"}
        artistName="SAPPHIRE"
      />
    </Box>
  );
};

export default BeatPlay;
