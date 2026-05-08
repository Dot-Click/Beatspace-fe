import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import custAxios from '../../configs/axios.config';
import { Loader, Center, Container, Box, Text } from '@mantine/core';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const StripeWrapper = ({ amount }) => {
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await custAxios.post('/donations/create-payment-intent', {
          amount: amount,
        });
        if (response.data.success && response.data.data.clientSecret) {
          setClientSecret(response.data.data.clientSecret);
        } else {
          setError("Failed to get client secret from response");
        }
      } catch (err) {
        console.error("Error fetching client secret:", err);
        setError(err.response?.data?.message || err.message || "Failed to fetch payment details");
      } finally {
        setLoading(false);
      }
    };

    if (amount > 0) {
      fetchClientSecret();
    }
  }, [amount]);

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#F6F4D3',
      colorBackground: '#0f1220',
      colorText: '#ffffff',
      colorDanger: '#df1b41',
      fontFamily: 'Vision Font, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  if (loading) {
    return (
      <Center h={300}>
        <Loader size="xl" color="#F6F4D3" variant="dots" />
      </Center>
    );
  }

  return (
    <Container size="xs" py="xl">
      <Box 
        p={40} 
        style={{ 
          backgroundColor: 'rgba(15, 18, 32, 0.8)', 
          border: '2px solid #2b2f55', 
          borderRadius: '18px',
          textAlign: 'center'
        }}
      >
        <Text 
          className="vision-font" 
          style={{ fontSize: '42px', color: 'white', marginBottom: '20px', letterSpacing: '4px' }}
        >
          {'{ Checkout }'}
        </Text>
        
        <Text 
          className="vision-font" 
          style={{ fontSize: '24px', color: '#F6F4D3', marginBottom: '30px', opacity: 0.9 }}
        >
          * amount to pay: €{amount}
        </Text>

        {error && (
          <Text color="red" ta="center" mb="md" className="vision-font" size="sm">
            ERROR: {error}
          </Text>
        )}

        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        ) : !loading && !error && (
          <Text color="dimmed" ta="center" className="vision-font">WAITING FOR PAYMENT DETAILS...</Text>
        )}
      </Box>
    </Container>
  );
};

export default StripeWrapper;
