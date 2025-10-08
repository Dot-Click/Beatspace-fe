import React, { useState } from 'react';
import { Box, Text, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { BackButtonIcon } from '../../customIcons';

const Selectchapter = () => {
    const [hoveredChapter, setHoveredChapter] = useState(null);
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/comics');
        }
    };

    const handleChapterClick = (chapterNumber) => {
        // Navigate to chapter reader
        // console.log(`Reading Chapter ${chapterNumber}`);
        navigate(`/comics/chapter/${chapterNumber}`);
    };

    const handleChapterHover = (chapterNumber) => {
        setHoveredChapter(chapterNumber);
    };

    const handleChapterLeave = () => {
        setHoveredChapter(null);
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
                    objectFit: 'cover',
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
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }}
            >
                {/* Content Container */}
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        maxWidth: '640px',
                        width: '100%'
                    }}
                >
                    {/* Comic Book Cover */}
                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '1rem'
                        }}
                    >
                        {/* Comic Cover Image */}
                        <Box
                            style={{
                                width: '160px',
                                height: '200px',
                                border: '2px solid #d1c676',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                order: 1
                             }}
                        >
                            <Image
                                src="/assets/comic.png"
                                alt="Me and the Boys"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>
 
                        {/* Comic Title */}
                        <Box style={{ textAlign: 'left', order: 2 }} className="vision-font-regular">
                              <Text
                                  style={{
                                      fontSize: '1rem',
                                      color: '#F6F4D3',
                                      letterSpacing: '0.5px',
                                      marginBottom: '0.2rem'
                                  }}
                              >
                                  M€ and th€ Boys
                              </Text>
                              <Text
                                  style={{
                                      fontSize: '0.5rem',
                                      color: '#d1a94c',
                                      letterSpacing: '1px'
                                  }}
                                  className="alexandria-font"
                              >
                                  by SpaceRacoon
                              </Text
                              >
                          </Box>
                    </Box>

                    {/* Chapter Selection List */}
                    <Box
                        className="alexandria-font"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem',
                            width: '100%',
                            maxWidth: '640px'
                        }}
                    >
                        {/* Chapter 1 */}
                        <Box
                            className="alexandria-font"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.75rem 1rem',
                                backgroundColor: hoveredChapter === 1 ? '#141414' : '#0e0e0e',
                                border: '2px solid #d1c676',
                                boxShadow: '0 0 0 2px #d1c676 inset',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                minHeight: '64px'
                            }}
                            onClick={() => handleChapterClick(1)}
                            onMouseEnter={() => handleChapterHover(1)}
                            onMouseLeave={handleChapterLeave}
                        >
                            <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Box
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        backgroundColor: '#d1c676',
                                        borderRadius: '2px',
                                        border: '2px solid #000',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#000',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        01
                                    </Text>
                                </Box>
                                <Box>
                                    <Text
                                        style={{
                                            fontSize: '0.9rem',
                                            color: '#F6F4D3',
                                            fontWeight: '500',
                                            marginBottom: '0.2rem'
                                        }}
                                    >
                                        Chapter 1 : The Beginning
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: '0.7rem',
                                            color: '#9ca3af'
                                        }}
                                    >
                                        3 Pages
                                    </Text>
                                </Box>
                            </Box>
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: '0.8rem',
                                        color: '#d1c676',
                                        fontWeight: '500',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    READ
                                </Text>
                                <Box
                                    style={{
                                        height: '1px',
                                        width: hoveredChapter === 1 ? '64px' : '48px',
                                        backgroundColor: '#d1c676',
                                        transition: 'width 0.2s ease'
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Chapter 2 */}
                        <Box
                            className="alexandria-font"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.75rem 1rem',
                                backgroundColor: hoveredChapter === 2 ? '#141414' : '#0e0e0e',
                                border: '2px solid #d1c676',
                                boxShadow: '0 0 0 2px #d1c676 inset',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                minHeight: '64px'
                            }}
                            onClick={() => handleChapterClick(2)}
                            onMouseEnter={() => handleChapterHover(2)}
                            onMouseLeave={handleChapterLeave}
                        >
                            <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Box
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        backgroundColor: '#d1c676',
                                        borderRadius: '2px',
                                        border: '2px solid #000',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: '1.2rem',
                                            color: '#000',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        02
                                    </Text>
                                </Box>
                                <Box>
                                    <Text
                                        style={{
                                            fontSize: '0.9rem',
                                            color: '#F6F4D3',
                                            fontWeight: '500',
                                            marginBottom: '0.2rem'
                                        }}
                                    >
                                        Chapter 2 : The Adventure continues
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: '0.7rem',
                                            color: '#9ca3af'
                                        }}
                                    >
                                        3 Pages
                                    </Text>
                                </Box>
                            </Box>
                            <Box
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: '0.8rem',
                                        color: '#d1c676',
                                        fontWeight: '500',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    READ
                                </Text>
                                <Box
                                    style={{
                                        height: '1px',
                                        width: hoveredChapter === 2 ? '64px' : '48px',
                                        backgroundColor: '#d1c676',
                                        transition: 'width 0.2s ease'
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Instruction */}
            <Box
                style={{
                    position: 'absolute',
                    bottom: '8rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }}
            >
                <Text
                     className="alexandria-font"
                     style={{
                         fontSize: '0.9rem',
                         color: '#9ca3af',
                         letterSpacing: '1px',
                         textAlign: 'center'
                     }}
                >
                    Click on a chapter to start reading
                </Text>
            </Box>
        </Box>
    );
};

export default Selectchapter;