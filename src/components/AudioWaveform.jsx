import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mantine/core";

const AudioWaveform = ({ isPlaying, progress, audioRef }) => {
  const animationFrameRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const [bars, setBars] = useState([]);

  // Generate random bar heights for the waveform
  useEffect(() => {
    const generateBars = () => {
      const numBars = 60; // Number of bars in the waveform
      const newBars = Array.from({ length: numBars }, () => ({
        height: Math.random() * 0.6 + 0.2, // Random height between 0.2 and 0.8
        baseHeight: Math.random() * 0.6 + 0.2,
      }));
      setBars(newBars);
    };

    generateBars();
  }, []);

  // Setup Web Audio API
  useEffect(() => {
    if (audioRef && !audioContextRef.current) {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;

        const source = audioContext.createMediaElementSource(audioRef);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
      } catch (error) {
        console.log("Web Audio API setup failed, using fallback animation:", error);
      }
    }
  }, [audioRef]);

  // // Animate bars when playing
  // useEffect(() => {
  //   if (isPlaying && analyserRef.current) {
  //     const animate = () => {
  //       try {
  //         const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
  //         analyserRef.current.getByteFrequencyData(dataArray);

  //         // Update bars based on frequency data
  //         setBars((prevBars) => {
  //           return prevBars.map((bar, index) => {
  //             const dataIndex = Math.floor((index / prevBars.length) * dataArray.length);
  //             const normalizedValue = dataArray[dataIndex] / 255;
  //             return {
  //               ...bar,
  //               height: Math.max(0.15, normalizedValue * 0.7 + 0.15),
  //             };
  //           });
  //         });
  //       } catch (error) {
  //         // Fallback to animated bars if Web Audio API fails
  //         setBars((prevBars) =>
  //           prevBars.map((bar) => ({
  //             ...bar,
  //             height: Math.max(0.1, bar.baseHeight + (Math.random() - 0.5) * 0.2),
  //           }))
  //         );
  //       }
  //       animationFrameRef.current = requestAnimationFrame(animate);
  //     };
  //     animate();
  //   } else {
  //     if (animationFrameRef.current) {
  //       cancelAnimationFrame(animationFrameRef.current);
  //     }
  //   }

  //   return () => {
  //     if (animationFrameRef.current) {
  //       cancelAnimationFrame(animationFrameRef.current);
  //     }
  //   };
  // }, [isPlaying]);

  const barWidth = 6;
  const barGap = 4;
  const maxBarHeight = 43;

  return (
    <Box
      style={{
        width: "100%",
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: `${barGap}px`,
        position: "relative",
      }}
    >
      {bars.map((bar, index) => {
        const currentProgress = progress || 0;
        const barPosition = index / bars.length;
        const isFilled = barPosition <= currentProgress;
        const barHeight = isPlaying ? bar.height * maxBarHeight : bar.baseHeight * maxBarHeight;

        return (
          <Box
            key={index}
            style={{
              width: `${barWidth}px`,
              height: `${barHeight}px`,
              backgroundColor: isFilled ? "#F6F4D3" : "rgba(246, 244, 211, 0.3)",
              borderRadius: "2px",
              transition: isPlaying ? "height 0.1s ease-out" : "height 0.3s ease-out",
              minHeight: "4px",
            }}
          />
        );
      })}
    </Box>
  );
};

export default AudioWaveform;

