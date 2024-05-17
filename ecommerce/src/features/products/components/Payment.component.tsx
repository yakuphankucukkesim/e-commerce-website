import { FormEvent, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { resetCart } from '../productSlice';
import { Button } from '@mui/material';

const PaymentComponent = () => {
  const { cart } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  // Assume item has a price field

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (totalQty === 0) return;
    if (paymentStatus !== 'succeeded') return;
    dispatch(resetCart());
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (totalQty === 0) return;
    if (!stripe || !elements) return;

    const cardEl = elements.getElement(CardElement);
    setIsProcessing(true);

    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_API}/stripe`, { cart });
      const { client_secret: clientSecret } = res.data;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardEl! },
      });

      if (!paymentIntent) {
        setPaymentStatus('Payment failed!');
      } else {
        setPaymentStatus(paymentIntent.status);
        if (paymentIntent.status === 'succeeded') {
          await axios.post('/order', {
            productName: cart[0]?.name,
            quantity: totalQty,
            totalPrice: totalAmount,
            date: new Date()
          });
        }
      }
    } catch (error) {
      console.error(error);
      setPaymentStatus('Payment failed!');
    }

    setIsProcessing(false);
  };

  return (
    <div style={{ fontSize: '20px' }}>
      <form onSubmit={handleSubmit} id='payment-form'>
        <CardElement id='card-element' />
        {!isProcessing && (
          <div style={{ paddingTop: '20px' }}>
            <button
              style={{
                height: '31px',
                backgroundColor: '#2a2728',
                color: 'white',
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '24px',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                width: '450px',
              }}
            >
              Pay now
            </button>
          </div>
        )}
        {isProcessing && <div>Processing...</div>}
        {!isProcessing && paymentStatus && <div>Status: {paymentStatus}</div>}
      </form>
    </div>
  );
};

const PaymentGateway = () => {
  const stripePromise = loadStripe('pk_test_51OrcjcA4zrD113WkpwSp2zZ0AcvpRAS3V3aVFEKZevngEHYhVyuHv8dw4U5Jns07nrboQvv6ObMWDyt15sI2UKv2001fsrtg6r');
  return (
    <Elements stripe={stripePromise}>
      <PaymentComponent />
    </Elements>
  );
};

export default PaymentGateway;
