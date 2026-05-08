import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button, Text, Stack, Loader, Center, Box } from '@mantine/core';
import { toast } from 'sonner';

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      toast.error(error.message);
    } else {
      toast.error("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <Stack gap="md">
        {!isReady && (
          <Center h={150}>
            <Stack align="center" gap="xs">
              <Loader size="md" color="#F6F4D3" />
              <Text size="xs" color="#F6F4D3" className="vision-font">LOADING SECURE FORM...</Text>
            </Stack>
          </Center>
        )}
        <Box style={{ display: isReady ? 'block' : 'none' }}>
          <PaymentElement 
            id="payment-element" 
            onReady={() => setIsReady(true)}
          />
        </Box>
        
        {isReady && (
          <Button 
            fullWidth 
            type="submit" 
            loading={isProcessing}
            disabled={!stripe || !elements}
            className="vision-font"
            style={{
              backgroundColor: "#F6F4D3",
              color: "#000",
              height: "50px",
              fontSize: "1.2rem",
              letterSpacing: "2px",
              fontWeight: 700,
              marginTop: "20px"
            }}
          >
            {isProcessing ? "PROCESSING..." : "PAY NOW"}
          </Button>
        )}
      </Stack>
    </form>
  );
};

export default CheckoutForm;
