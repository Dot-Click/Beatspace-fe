import React, { useState } from 'react';
import { Box, Text, Group, Image } from '@mantine/core';
import { beatsIcon, playIcon, downloadIcon, streamIcon } from '../../customIcons';
import SupportArtistModal from '../../components/modalContents/SupportArtistModal';

const BeatPlay = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBeat, setSelectedBeat] = useState(null);

  const beatItems = [
    { name: 'eFELKIT', waveform: 'audio-waveform-1' },
    { name: 'eFELKIT', waveform: 'audio-waveform-2' },
    { name: 'eFELKIT', waveform: 'audio-waveform-3' },
    { name: 'eFELKIT', waveform: 'audio-waveform-4' },
    { name: 'eFELKIT', waveform: 'audio-waveform-5' },
    { name: 'eFELKIT', waveform: 'audio-waveform-6' }
  ];

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
    setIsHovered(false);
  };

  const handlePlay = (beatName) => {
    console.log(`Playing: ${beatName}`);
  };

  const handleDownload = (beatName) => {
    console.log(`Downloading: ${beatName}`);
  };

  const handleBeatNameClick = (beat) => {
    console.log('Beat name clicked:', beat);
    setSelectedBeat(beat);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBeat(null);
  };

  return (
    <Box 
      style={{ 
        minHeight: '100vh', 
        backgroundColor: '#111827', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <Image
        src="/assets/Frame.png"
        alt="TV Frame"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/assets/dark-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      <Box
        style={{
          position: 'absolute',
          top: '8rem',
          right: '12rem',
          zIndex: 3,
          pointerEvents: 'auto'
        }}
      >
        <Image
          src="/assets/logo.png"
          alt="GLOBAL VISION"
          style={{
            width: '120px',
            height: 'auto',
            filter: 'brightness(1.2)'
          }}
        />
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '8rem',
          left: '12rem',
          zIndex: 3,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <Box
          style={{
            width: '40px',
            height: '30px',
            backgroundColor: '#F6F4D3',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {beatsIcon()}
        </Box>
        
        <Text
          className="pixel-font"
          style={{
            fontSize: '1.4rem',
            color: '#F6F4D3',
            letterSpacing: '2px',
            textShadow: '0 0 10px #F6F4D3'
          }}
        >
          BE★TS
        </Text>
      </Box>

         <Box
           className="custom-scrollbar"
           style={{
             position: 'absolute',
             left: '12rem',
             top: '25%',
             zIndex: 3,
             pointerEvents: 'auto',
             width: 'calc(100% - 12rem)',
             maxWidth: '1150px',
             height: '500px',
             overflowY: 'auto'
           }}
         >
         <Box
           style={{
             display: 'flex',
             flexDirection: 'column',
             gap: '4rem'
           }}
         >
           {beatItems.map((beat, index) => (
             <Box
               key={index}
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: '1rem',
                 padding: '0.5rem',
                 borderRadius: '4px',
                 transition: 'all 0.3s ease',
                 cursor: 'pointer',
                 height: '70px'
               }}
               onMouseEnter={handleItemHover}
               onMouseLeave={handleItemLeave}
             >
               <Box
                 style={{
                   width: '70px',
                   height: '70px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease'
                 }}
                 onClick={() => handlePlay(beat.name)}
               >
                 {playIcon()}
               </Box>

               <Box
                 style={{
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   gap: '0.8rem',
                   minWidth: '120px',
                   height: '70px'
                 }}
               >
                 <Text
                   className="pixel-font"
                   style={{
                     fontSize: '0.9rem',
                     color: '#F6F4D3',
                     letterSpacing: '2px',
                     margin: 0,
                     lineHeight: 1
                   }}
                 >
                   {beat.name}
                 </Text>
                 
                 <Box
                   style={{
                     height: '20px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     borderRadius: '4px'
                   }}
                 >
                   {streamIcon()}
                 </Box>
               </Box>

                 <Box
                   style={{
                     width: '70px',
                     height: '70px',
                     borderRadius: '4px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     cursor: 'pointer',
                     transition: 'all 0.3s ease'
                   }}
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
           position: 'absolute',
           bottom: '2rem',
           left: '50%',
           transform: 'translateX(-50%)',
           zIndex: 3
         }}
       >
       </Box>

       {/* Support Artist Modal */}
       <SupportArtistModal
         isOpen={isModalOpen}
         onClose={handleCloseModal}
         beatName={selectedBeat?.name || 'eFELKIT'}
         artistName="SAPPHIRE"
       />
     </Box>
  );
};

export default BeatPlay;
