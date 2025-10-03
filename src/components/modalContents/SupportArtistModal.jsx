import React, { useState } from 'react';
import { Box, Text, Image, TextInput, Button } from '@mantine/core';
import { heartIcon } from '../../customIcons';

const SupportArtistModal = ({ isOpen, onClose, beatName, artistName }) => {
  const [donationAmount, setDonationAmount] = useState('');

  console.log('Modal props:', { isOpen, beatName, artistName });

  if (!isOpen) return null;

  const handleCheckout = () => {
    console.log('Checkout:', donationAmount);
    onClose();
  };

  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <Box
        style={{
          backgroundColor: '#242730',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '400px',
          width: '90%',
          position: 'relative',
          border: '2px solid #F6F4D3'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Box
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#F6F4D3',
            fontWeight: 'bold'
          }}
          onClick={onClose}
        >
          ✕
        </Box>

        {/* Album Art */}
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <Box
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/assets/artist.png"
              alt="Artist"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <Text
              className="pixel-font"
              style={{
                fontSize: '1.2rem',
                color: '#FFFFFF',
                fontWeight: 'bold',
                letterSpacing: '2px',
                position: 'absolute',
                bottom: '0.5rem',
                textShadow: '2px 2px 0px #000000'
              }}
            >
              EFEKT
            </Text>
          </Box>
        </Box>

        {/* Title */}
        <Text
          className="pixel-font"
          style={{
            fontSize: '1.5rem',
            color: '#F6F4D3',
            textAlign: 'center',
            marginBottom: '1rem',
            letterSpacing: '2px'
          }}
        >
          SUPPORT ARTIST
        </Text>

        {/* Beat Details */}
        <Box
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <Text
            className="pixel-font"
            style={{
              fontSize: '0.9rem',
              color: '#F6F4D3',
              marginBottom: '0.5rem',
              letterSpacing: '1px'
            }}
          >
            BEAT: {beatName}
          </Text>
          <Text
            className="pixel-font"
            style={{
              fontSize: '0.9rem',
              color: '#F6F4D3',
              letterSpacing: '1px'
            }}
          >
            BY: {artistName}
          </Text>
        </Box>

        {/* Separator */}
        <Box
          style={{
            height: '1px',
            backgroundColor: '#F6F4D3',
            marginBottom: '1.5rem'
          }}
        />

        {/* Support Icon */}
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}
        >
          {heartIcon()}
        </Box>

        {/* Message */}
        <Box
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem'
          }}
        >
          <Text
            className="pixel-font"
            style={{
              fontSize: '0.8rem',
              color: '#F6F4D3',
              marginBottom: '0.5rem',
              letterSpacing: '1px',
              lineHeight: 1.4
            }}
          >
            THIS BEAT IS FREE TO DOWNLOAD.
          </Text>
          <Text
            className="pixel-font"
            style={{
              fontSize: '0.8rem',
              color: '#F6F4D3',
              letterSpacing: '1px',
              lineHeight: 1.4
            }}
          >
            SUPPORT THE ARTIST IF YOU CAN.
          </Text>
        </Box>

        {/* Donation Input */}
        <Box
          style={{
            marginBottom: '1.5rem'
          }}
        >
          <Text
            className="pixel-font"
            style={{
              fontSize: '1rem',
              color: '#F6F4D3',
              marginBottom: '0.5rem',
              letterSpacing: '1px'
            }}
          >
            DONATION AMOUNT EUR:
          </Text>
          <TextInput
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="€ 00.0"
            style={{
              backgroundColor: '#2D2D2D',
              border: '1px solid #F6F4D3',
              borderRadius: '4px'
            }}
            styles={{
              input: {
                backgroundColor: '#2D2D2D',
                color: '#F6F4D3',
                fontFamily: 'Press Start 2P',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                border: 'none'
              }
            }}
          />
        </Box>

        {/* Checkout Button */}
        <Button
          onClick={handleCheckout}
          style={{
            width: '100%',
            backgroundColor: '#F6F4D3',
            color: '#2D2D2D',
            border: 'none',
            borderRadius: '6px',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            fontFamily: 'Press Start 2P',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#FFD700';
            e.target.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#F6F4D3';
            e.target.style.transform = 'scale(1)';
          }}
        >
          CHECKOUT
        </Button>
      </Box>
    </Box>
  );
};

export default SupportArtistModal;
