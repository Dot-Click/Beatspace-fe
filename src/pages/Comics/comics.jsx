import React, { useState } from 'react';
import { Box, Text, Group, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Comics = () => {
  const [selectedItem, setSelectedItem] = useState('SPACE RACCOON');
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const menuItems = ['SPACE RACCOON'];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

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
        <Text
          className="pixel-font"
          style={{
            fontSize: '2rem',
            color: '#F6F4D3',
            textShadow: '0 0 10px #F6F4D3',
            letterSpacing: '3px'
          }}
        >
          COMICS
        </Text>
      </Box>

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
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }}
              onClick={() => handleItemClick(item)}
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              {selectedItem === item && (
                <Box
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid #F6F4D3',
                    marginRight: '1rem',
                    transform: 'rotate(-90deg)'
                  }}
                />
              )}
              
              <Text
                className="pixel-font"
                style={{
                  fontSize: '1.4rem',
                  color: selectedItem === item ? '#F6F4D3' : '#9ca3af',
                  textShadow: selectedItem === item ? '0 0 10px #F6F4D3' : 'none',
                  letterSpacing: '2px',
                  transition: 'all 0.3s ease'
                }}
              >
                {item}
              </Text>

              {selectedItem === item && (
                <Box
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid #F6F4D3',
                    marginLeft: '1rem',
                    transform: 'rotate(90deg)'
                  }}
                />
              )}
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Comics;
