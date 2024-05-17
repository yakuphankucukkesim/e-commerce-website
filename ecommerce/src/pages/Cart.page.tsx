import React, { useEffect, useState } from 'react';
import HeaderComponent from '../features/products/components/Header.component';
import PaymentGateway from '../features/products/components/Payment.component';
import ProductCartComponent from '../features/products/components/ProductCart.component';
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks';
import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import { Box, Button, Divider, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FooterComponent from '../features/products/components/Footer.component';
import { getProducts } from '../features/products/productSlice';
import BestsellerComponent from '../features/products/components/Bestseller.component';

const CartPage = () => {
  const { cart, products } = useAppSelector((state) => state.product);
  const filteredCart = cart.filter(item => item.quantity > 0);
  const totalPrice = filteredCart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const subtotal = totalPrice.toFixed(2);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getRandomProducts = () => {
    const shuffledProducts = currentProducts.sort(() => 0.5 - Math.random());
    const randomProducts = shuffledProducts.slice(0, 4);
    return randomProducts;
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (filteredCart.length === 0) {
    return (
      <div>
        <HeaderComponent />
        <div style={{
          paddingBottom: '100px'
        }}>
          <div style={{
            textAlign: 'center',
            paddingTop: '150px'
          }}>
            <div style={{
              fontSize: '70px',
              color: '#2a2728',
              fontWeight: 'bold'
            }}>
              Your cart is empty
            </div>
            <div style={{
              paddingTop: '30px'
            }}>
              <Button
                sx={{
                  bgcolor: '#2a2728',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#c0c0c0',
                  },
                  fontSize: '14px',
                  fontWeight: 'bold',
                  width: '700px'
                }}
                size='large'
                onClick={() => navigate('/collections')}
              >
                Continue shopping
              </Button>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '250px', paddingBottom: '50px' }}>
              <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#2a2728'
              }}>
                Bestsellers
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '30px' }}>
                {getRandomProducts().map((product) => (
                  <BestsellerComponent key={product._id} product={product} />
                ))}
              </div>
              <div style={{
                paddingTop: '30px'
              }}>
                <Button
                  sx={{
                    bgcolor: '#2a2728',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#c0c0c0',
                    },
                    fontSize: '14px',
                    fontWeight: 'bold',
                    width: '100px'
                  }}
                  size='large'
                  onClick={() => navigate('/collections')}
                >
                  View all
                </Button>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }

  return (
    <div>
      <HeaderComponent />
      <div style={{
        paddingBottom: '100px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '350px',
        }}>
          <div style={{
            fontSize: '70px',
            fontWeight: 'bold',
            color: '#2a2728',
            marginTop: '100px',
          }}>
            Your cart
          </div>
          <div style={{
            display: 'flex'
          }}>
            <div style={{
              marginTop: '150px',
              color: '#2a2728',
              fontFamily: 'sans-serif',
              cursor: 'pointer'
            }}
              onClick={() => navigate('/collections')}>
              Continue shopping
            </div>
            <div style={{
              marginTop: '140px',
              marginLeft: '50px',
              marginRight: '350px'
            }}>
              <Button
                sx={{
                  bgcolor: '#2a2728',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#c0c0c0',
                  },
                  fontSize: '14px',
                  width: '300px'
                }}
                onClick={() => navigate('/checkout')}
                size='large'
              >
                Check out
              </Button>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingLeft: '70px',
          paddingTop: '30px'
        }}>
          <div style={{
            fontFamily: 'sans-serif',
            color: 'rgba(42, 39, 40, 0.6)',
            fontSize: '13px'
          }}>
            Product
          </div>
          <div style={{
            fontFamily: 'sans-serif',
            color: 'rgba(42, 39, 40, 0.6)',
            fontSize: '13px'
          }}>
            Quantity
          </div>
          <div style={{
            fontFamily: 'sans-serif',
            color: 'rgba(42, 39, 40, 0.6)',
            fontSize: '13px'
          }}>
            Total
          </div>
        </div>
        <div style={{
          width: '1270px',
          paddingLeft: '355px',
          paddingTop: '10px'
        }}>
          <Divider>
          </Divider>
        </div>
        <div>
          <div style={styles.cartContainer}>
            <div style={styles.productList}>
              {filteredCart.map((cartItem, index) => {
                const product = products.find((prod) => prod._id === cartItem._id);
                if (product) {
                  return (
                    <div key={product._id} style={{ marginBottom: '16px', paddingTop: '20px' }}>
                      <ProductCartComponent product={product} />
                      {index !== filteredCart.length - 1 && <Divider />}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <div style={{
          width: '1270px',
          paddingLeft: '355px',
          paddingTop: '10px'
        }}>
          <Divider>
          </Divider>
        </div>
        <div style={{
          paddingLeft: '355px',
          paddingTop: '10px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', paddingTop: '30px', fontWeight: 'bold', color: '#2a2728'
          }}>
            <span>&#127873; Want to add a note to your order?</span>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '4px',
              width: 300,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#2a2728',
                },
                '&:hover fieldset': {
                  borderColor: '#2a2728',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#2a2728',
                },
              },
            }}>
              <TextField
                style={{ width: 350, height: 100, paddingTop: '10px' }}
                multiline
                rows={4}
              />
            </Box>
          </div>
          <div style={{
            display: 'block',
            paddingRight: '275px',
          }}>
            <div style={{
              display: 'block',
              paddingTop: '35px'
            }}>
              <div style={{
                display: 'flex',
                color: '#2a2728',
                fontSize: '20px',
                paddingLeft: '185px'
              }}>
                <div style={{ fontWeight: 'bold', marginRight: '20px' }}>Subtotal</div>
                <div>{subtotal} €</div>
              </div>
              <div style={{
                paddingTop: '15px',
                color: 'rgba(42, 39, 40, 0.8)'
              }}>
                Tax included and shipping calculated at checkout.
              </div>
            </div>
            <div style={{
              paddingTop: '15px',
              paddingLeft: '50px  '
            }}>
              <Button
                sx={{
                  bgcolor: '#2a2728',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#c0c0c0',
                  },
                  fontSize: '14px',
                  width: '300px'
                }}
                onClick={() => navigate('/checkout')}
                size='large'
              >
                Check out
              </Button>
            </div>
            <div>
              <img
                style={{
                  width: '300px',
                  height: '60px',
                  filter: 'invert(100%)',
                  paddingLeft: '50px'
                }}
                src='./creditcardlogo.png'
                alt='shop logo'
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '50px', paddingBottom: '50px' }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#2a2728'
          }}>
            Bestsellers
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '30px' }}>
            {getRandomProducts().map((product) => (
              <BestsellerComponent key={product._id} product={product} />
            ))}
          </div>
          <div style={{
            paddingTop: '30px'
          }}>
            <Button
              sx={{
                bgcolor: '#2a2728',
                color: 'white',
                '&:hover': {
                  bgcolor: '#c0c0c0',
                },
                fontSize: '14px',
                fontWeight: 'bold',
                width: '100px'
              }}
              size='large'
              onClick={() => navigate('/collections')}
            >
              View all
            </Button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  cartContainer: {
    maxWidth: '1200px',
    margin: 'auto',
    backgroundColor: '#fff',
  },
  cartTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  productList: {
    marginTop: '16px',
    paddingBottom: '20px',
    paddingLeft: '6px'
  },
  summary: {
    marginTop: '48px',
    borderTop: '1px solid #ddd',
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryText: {
    border: '1px solid transparent',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center'
  },
};

export default CartPage;
