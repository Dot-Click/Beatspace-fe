import React, { useState } from 'react';
import { Box, Text, Group, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    setIsHovered(true);
    navigate('/menu');
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleBackgroundClick = () => {
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
          backgroundImage: 'url("/assets/Hero-bg.webp")',
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
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          zIndex: 3,
          pointerEvents: 'auto'
        }}
        onClick={handleBackgroundClick}
      >
        <Box
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '32rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            src="/assets/Hero.webp"
            alt="GLOBAL VISION"
            style={{
              width: '100%',
              maxWidth: '24rem',
              height: 'auto',
              filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 10
            }}
          />
          
          <Image
            src="/assets/Cloud.webp"
            alt="Cloud"
            style={{
              position: 'absolute',
              left: '-2rem',
              top: '40%',
              width: '7rem',
              height: '4.5rem',
              opacity: 0.9,
              filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))',
              animation: 'floatCloud1 8s ease-in-out infinite',
              zIndex: 1
            }}
          />
          
          <Image
            src="/assets/Cloud.webp"
            alt="Cloud"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '25%',
              width: '3.5rem',
              height: '2rem',
              opacity: 0.9,
              filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))',
              animation: 'floatCloud2 6s ease-in-out infinite',
              zIndex: 1
            }}
          />
          
          <Image
            src="/assets/Cloud.webp"
            alt="Cloud"
            style={{
              position: 'absolute',
              right: '-8rem',
              top: '-20%',
              width: '8rem',
              height: '5rem',
              opacity: 0.9,
              filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))',
              transform: 'scaleX(-1)',
              animation: 'floatCloud3 10s ease-in-out infinite',
              zIndex: 1
            }}
          />
        </Box>
        
        <Box
          style={{
            textAlign: 'center',
            marginTop: '1.5rem',
            width: '100%',
            maxWidth: '24rem'
          }}
        >
          <Group justify="center" mt={20}>
            <div
              style={{
                display: 'inline-block',
                padding: '10px',
                cursor: 'pointer'
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              onClick={handleClick}
            >
              <Text
                className="pixel-font"
                style={{
                  fontSize: '1.2rem',
                  color: isHovered ? '#F6F4D3' : '#1f2937',
                  textShadow: isHovered ? '0 0 10px #F6F4D3, 0 0 20px #F6F4D3, 0 0 30px #F6F4D3' : 'none',
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  margin: 0
                }}
              >
                {'>'} PRESS START
              </Text>
            </div>
          </Group>
          
          <Group justify="center" mt={60}>
            <Text
              className="pixel-font"
              style={{
                color: '#1f2937',
                fontSize: '1.1rem'
              }}
            >
              ©
            </Text>
            <Text
              className="pixel-font"
              style={{
                color: '#1f2937',
                fontSize: '1.1rem'
              }}
            >
              2025 GLOBAL VISION
            </Text>
          </Group>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
