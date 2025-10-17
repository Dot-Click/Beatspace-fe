import React, { useState } from 'react';
import { Box, Text, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BackButtonIcon } from '../../customIcons';

const Selectcomic = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/comics');
        }
    };

    const handleComicClick = () => {
        // Navigate to chapter selection page
        navigate('/comics/select-chapter');
    };

    const handleComicHover = () => {
        setIsHovered(true);
    };

    const handleComicLeave = () => {
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
            {/* TV Frame */}
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

            {/* Background */}
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

            {/* Global Vision Logo */}
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

            {/* Header with back button and titles */}
            <Box
                style={{
                    position: 'absolute',
                    top: '8rem',
                    left: '12rem',
                    zIndex: 5,
                    pointerEvents: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Box
                        role="button"
                        aria-label="Back to Comics"
                        onClick={handleBack}
                        style={{ cursor: 'pointer' }}
                    >
                        <BackButtonIcon />
                    </Box>
                    <Text
                        style={{
                            fontSize: '2rem',
                            color: '#F6F4D3',
                            letterSpacing: '3px'
                        }}
                    >
                        COMICS
                    </Text>
                </Box>
                <Text
                    style={{
                        fontSize: '1rem',
                        color: '#F6F4D3',
                        letterSpacing: '2px',
                    }}
                >
                    SPACERACOON
                </Text>
            </Box>

            {/* Main Content Area */}
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
                {/* Pixel-perfect comic card frame */}
                <Box
                    style={{
                        position: 'relative',
                        width: '210px',
                        height: '440px',
                        // olive-gold frame fill
                        border: '3px solid #d1c676', // golden outer border
                        boxShadow: '0 0 0 3px #000 inset', // inner black line
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                    }}
                    onClick={handleComicClick}
                    onMouseEnter={handleComicHover}
                    onMouseLeave={handleComicLeave}
                >
                    {/* vertical inner black stripes (left & right) */}


                    {/* Image area with solid black border */}
                    <Box
                        style={{
                            flex: 1,
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src="/assets/comic.png"
                            alt="Me and the Boys"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>

                    {/* Bottom info panel */}
                    <Box
                        style={
                            {
                            
                            background: '#0b0b0b',
                            borderTop: '6px solid #d1c676',
                            height: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '10px',
                            WebkitTextSizeAdjust: 'none',
                            MozTextSizeAdjust: 'none',
                            MsTextSizeAdjust: 'none',
                            textSizeAdjust: 'none',
                            userSelect: 'none',
                            }
                        }
                    >
                        <Text
                            className="vision-font-regular"
                            style={{
                                color: '#F6F4D3',
                                fontSize: '18px',
                                lineHeight: 1.2,
                                textAlign: 'left',
                            }}
                        >
                            M€ and th€ Boys
                        </Text>
                        
                        <Text
                            className="alexandria-font"
                            style={{
                                color: '#d1a94c',
                                fontSize: '10px',
                                textAlign: 'left',
                            }}
                        >
                            Chapter 2
                        </Text>
                        <Box />
                    </Box>
                </Box>

                {/* Click instruction */}
                <Text
                    className="alexandria-font"
                    style={{
                        fontSize: '0.9rem',
                        color: '#9ca3af',
                        letterSpacing: '1px',
                        marginTop: '1.2rem',
                        textAlign: 'center',
                        opacity: isHovered ? 1 : 0.85,
                        transition: 'opacity 0.2s ease',
                    }}
                >
                    Click on the comic to view chapters
                </Text>
            </Box>
        </Box>
    );
};

export default Selectcomic;