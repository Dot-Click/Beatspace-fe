import React from 'react';
import { Box, Text, Button, Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { planetIcon, cartIcon } from '../../customIcons';

const Merch = () => {
    const navigate = useNavigate();
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
                className="custom-scrollbar"
                style={{
                    position: 'absolute',
                    left: '12rem',
                    top: '25%',
                    zIndex: 3,
                    pointerEvents: 'auto',
                    width: 'calc(100% - 24rem)',
                    maxWidth: '1150px',
                    height: '400px',
                    overflowY: 'scroll',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingRight: '2rem'
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '3rem',
                        width: '100%',
                        paddingBottom: '2rem'
                    }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '3rem'
                        }}
                    >
                        <Image
                            src="/assets/shirts.png"
                            alt="Vision T-Shirt"
                            style={{
                                width: '400px',
                                height: 'auto',
                                filter: 'brightness(1.1)'
                            }}
                        />
                    </Box>

                    <Text
                        className="font-lg"
                        style={{
                            color: '#F6F4D3',
                            letterSpacing: '4px'
                        }}
                    >
                        VISION SHIRT
                    </Text>

                    <Button
                        onClick={() => navigate('/buyshirt')}
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
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
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
                        BUY | € 250
                    </Button>

                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '3rem',
                            marginTop: '2rem'
                        }}
                    >
                        <Image
                            src="/assets/shirts.png"
                            alt="Vision T-Shirt"
                            style={{
                                width: '400px',
                                height: 'auto',
                                filter: 'brightness(1.1)'
                            }}
                        />
                    </Box>

                    <Text
                        className="font-lg"
                        style={{
                            color: '#F6F4D3',
                            letterSpacing: '4px'
                        }}
                    >
                        VISION SHIRT
                    </Text>

                    <Button
                        onClick={() => navigate('/buyshirt')}
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
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
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
                        BUY | € 250
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Merch;

