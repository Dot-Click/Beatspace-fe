import React, { useState } from 'react';
import { Box, Text, Group, Image } from '@mantine/core';
import { planetIcon } from '../../customIcons';

const Games = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleItemHover = () => {
    setIsHovered(true);
  };

  const handleItemLeave = () => {
    setIsHovered(false);
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
          pointerEvents: 'auto'
        }}
      >
        {planetIcon()}
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
    </Box>
  );
};

export default Games;
