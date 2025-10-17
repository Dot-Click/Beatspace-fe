import React, { useState } from 'react';
import { Box, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { planetIcon, cartIcon } from '../../customIcons';

const BuyShirt = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const navigate = useNavigate();

  const sizes = ['S', 'M', 'L'];

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
          objectFit: 'fill',
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
          left: '10rem',
          zIndex: 3,
          pointerEvents: 'auto',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/menu')}
      >
        {planetIcon()}
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '7.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          pointerEvents: 'auto'
        }}
      >
        <Text
          className="font-xxl"
          style={{
            color: '#F6F4D3',
            textShadow: '0 0 10px #F6F4D3',
            letterSpacing: '6px'
          }}
        >
          MERCH
        </Text>
      </Box>

      <Box
        style={{
          position: 'absolute',
          top: '7rem',
          right: '10rem',
          zIndex: 3,
          pointerEvents: 'auto',
          cursor: 'pointer'
        }}
      >
        {cartIcon()}
      </Box>

      <Box
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          pointerEvents: 'auto'
        }}
      >
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4rem',
            marginTop: '2rem'
          }}
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              src="/assets/shirt.png"
              alt="Vision T-Shirt"
              style={{
                width: '280px',
                height: 'auto',
                filter: 'brightness(1.1)'
              }}
            />
          </Box>

          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            <Text
              className="font-lg"
              style={{
                color: '#F6F4D3',
                letterSpacing: '3px'
              }}
            >
              VISION SHIRT
            </Text>

            <Text
              className="font-md"
              style={{
                color: '#00CED1',
                letterSpacing: '2px'
              }}
            >
              € 25
            </Text>

            <Box
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                marginTop: '0.5rem'
              }}
            >
              <Text
                className="font-xs"
                style={{
                  color: '#F6F4D3',
                  letterSpacing: '2px'
                }}
              >
                SIZE:
              </Text>
              {sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    backgroundColor: selectedSize === size ? '#F6F4D3' : 'transparent',
                    border: '2px solid #F6F4D3',
                    color: selectedSize === size ? '#111827' : '#F6F4D3',
                    fontFamily: 'inherit',
                    fontSize: '12px',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    minWidth: '40px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>

            <Button
              className="font-md"
              style={{
                backgroundColor: '#000000',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'inherit',
                letterSpacing: '3px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(246, 244, 211, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
              }}
            >
              Add To Cart
            </Button>

             <Box
               style={{
                 display: 'flex',
                 gap: '1rem',
                 marginTop: '1rem'
               }}
             >
               <Box
                 style={{
                   width: '45px',
                   height: '45px',
                   backgroundColor: 'transparent',
                   border: '2px solid #F6F4D3',
                   borderRadius: '8px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   overflow: 'hidden'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#F6F4D3';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent';
                 }}
               >
                 <Image
                   src="/assets/shirt.png"
                   alt="Shirt variant"
                   style={{
                     width: '35px',
                     height: 'auto'
                   }}
                 />
               </Box>

               <Box
                 style={{
                   width: '45px',
                   height: '45px',
                   backgroundColor: 'transparent',
                   border: '2px solid #F6F4D3',
                   borderRadius: '8px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   overflow: 'hidden'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#F6F4D3';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent';
                 }}
               >
                 <Image
                   src="/assets/shirt.png"
                   alt="Shirt variant"
                   style={{
                     width: '35px',
                     height: 'auto'
                   }}
                 />
               </Box>

               <Box
                 style={{
                   width: '45px',
                   height: '45px',
                   backgroundColor: 'transparent',
                   border: '2px solid #F6F4D3',
                   borderRadius: '8px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                   transition: 'all 0.3s ease',
                   overflow: 'hidden'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#F6F4D3';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent';
                 }}
               >
                 <Image
                   src="/assets/shirt.png"
                   alt="Shirt variant"
                   style={{
                     width: '35px',
                     height: 'auto'
                   }}
                 />
               </Box>
             </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyShirt;

