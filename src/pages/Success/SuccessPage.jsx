import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Stack, Center, Loader } from '@mantine/core';
import { useNavigate, useSearchParams } from 'react-router-dom';
import custAxios from '../../configs/axios.config';
import { toast } from 'sonner';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [verifying, setVerifying] = useState(!!sessionId);

  useEffect(() => {
    const verify = async () => {
      try {
        if (sessionId) {
          await custAxios.post('/donations/verify-checkout-session', { sessionId });
          localStorage.removeItem('cartItems');
          toast.success("Payment verified successfully!");
        }
      } catch (err) {
        console.error("Verification error:", err);
        toast.error("There was an issue verifying your payment, but it was likely successful. Please contact support if you don't receive an email.");
      } finally {
        setVerifying(false);
      }
    };

    if (sessionId) {
      verify();
    }
  }, [sessionId]);

  return (
    <Box
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      <Box
        style={{
          width: '100%',
          maxWidth: 480,
          background: 'rgba(9, 11, 22, 0.95)',
          border: '2px solid #2b2f55',
          borderRadius: 18,
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        {verifying ? (
          <Stack align="center" gap="md">
            <Loader size="xl" color="#F6F4D3" />
            <Text className="vision-font" color="#F6F4D3">VERIFYING PAYMENT...</Text>
          </Stack>
        ) : (
          <>
            <Center mb={24}>
              <Box
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'rgba(94, 234, 212, 0.1)',
                  border: '2px solid #5EEAD4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 36,
                }}
              >
                ✓
              </Box>
            </Center>

            <Text
              className="vision-font"
              style={{ fontSize: 28, color: '#5EEAD4', letterSpacing: '4px', marginBottom: 16 }}
            >
              PAYMENT COMPLETE
            </Text>

            <Text
              className="vision-font"
              style={{ fontSize: 14, color: '#F6F4D3', opacity: 0.8, marginBottom: 8, lineHeight: 1.8 }}
            >
              Thank you! Your transaction has been processed successfully.
            </Text>

            {sessionId && (
              <Text
                className="vision-font"
                style={{ fontSize: 10, color: '#8b8fa8', marginBottom: 32, letterSpacing: '1px' }}
              >
                Session: {sessionId.slice(-12)}
              </Text>
            )}

            <Stack gap="md">
              <Button
                fullWidth
                onClick={() => navigate('/')}
                className="vision-font"
                style={{
                  backgroundColor: '#F6F4D3',
                  color: '#000',
                  height: 48,
                  fontSize: 14,
                  letterSpacing: '2px',
                  fontWeight: 700,
                  borderRadius: 10,
                }}
              >
                BACK TO HOME
              </Button>
              <Button
                fullWidth
                variant="subtle"
                onClick={() => navigate('/merch')}
                className="vision-font"
                style={{ color: '#8b8fa8', fontSize: 12, letterSpacing: '1px' }}
              >
                CONTINUE SHOPPING
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SuccessPage;
