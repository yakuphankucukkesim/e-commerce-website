import React from 'react';
import HeaderComponent from '../features/products/components/Header.component';
import PaymentGateway from '../features/products/components/Payment.component';
import ProductCartComponent from '../features/products/components/ProductCart.component';
import { useAppSelector } from '../hooks/redux/hooks';
import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import FooterComponent from '../features/products/components/Footer.component';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Button, Divider } from '@mui/material';
import ShoppingCartProductComponent from '../features/products/components/ShoppingCartProduct.component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckOutPage = () => {
    const { cart, products } = useAppSelector((state) => state.product);

    const filteredCart = cart.filter(item => item.quantity > 0);

    const totalQty = filteredCart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = filteredCart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    let shippingFee = totalPrice > 50 ? 0 : 10;

    const finalTotalPrice = totalPrice + shippingFee;
    const navigate = useNavigate();
    const handleCheckout = async () => {
        try {
            for (const item of filteredCart) {
                const response = await axios.post('http://localhost:3001/orders', {
                    productName: item.name,
                    quantity: item.quantity,
                    totalPrice: item.quantity * item.price,
                });
                console.log('Order created:', response.data);
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.cartContainer}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <img
                            style={{
                                width: '140px',
                                paddingLeft: '50px',
                                cursor: 'pointer',
                            }}
                            src='./pngegg2.png'
                            alt='shop logo'
                            onClick={() => navigate('/')}
                        />
                    </div>
                    <div style={{
                        paddingTop: '40px',
                        cursor: 'pointer'
                    }}
                        onClick={() => navigate('/cart')}>
                        <ShoppingBagOutlinedIcon />
                    </div>
                </div>
                <div style={{
                    paddingLeft: '45px',
                    paddingTop: '20px',
                }}>
                    <Divider />
                </div>
                {/* <h2 style={styles.cartTitle}>Shopping Cart ({totalQty} items)</h2> */}
                <div style={{
                    paddingLeft: '100px',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        paddingTop: '30px'
                    }}>
                        {filteredCart.length === 0 ? (
                            <div>
                                <p>No items in cart! Would you like to add anything in your cart?</p>
                            </div>
                        ) : (
                            <div style={styles.productList}>
                                {filteredCart.map((cartItem) => {
                                    const product = products.find((prod) => prod._id === cartItem._id);
                                    if (product) {
                                        return (
                                            <ShoppingCartProductComponent key={product._id} product={product} />
                                        );
                                    }
                                    return null;
                                })}
                                <div style={{
                                    display: 'flex',
                                    width: '400px',
                                    paddingTop: '20px'
                                }}>
                                    <div>
                                        Subtotal
                                    </div>
                                    <div style={{
                                        marginLeft: 'auto'
                                    }}>
                                        <span style={{ fontWeight: 'bold' }}>€{totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '400px',
                                    paddingTop: '5px'
                                }}>
                                    <div>
                                        Shipping
                                    </div>
                                    <div style={{
                                        marginLeft: 'auto'
                                    }}>
                                        <div style={{
                                            color: 'rgba(42, 39, 40, 0.6)',
                                        }}>
                                            {totalPrice > 50 ? "Free!" : <span style={{ fontWeight: 'bold' }}>€10.00</span>}
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '400px',
                                    paddingTop: '5px'
                                }}>
                                    <div style={{
                                        fontSize: '21px',
                                        fontWeight: 'bold'
                                    }}>
                                        Total
                                    </div>
                                    <div style={{
                                        marginLeft: 'auto',
                                    }}>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{
                                                fontWeight: 'bold',
                                                fontSize: '21px',
                                            }}>
                                                €{finalTotalPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    width: '400px',
                                    paddingTop: '5px'
                                }}>
                                    <div style={{
                                        color: 'rgba(42, 39, 40, 0.6)',
                                        fontSize: '13px'
                                    }}>
                                        Including {totalPrice * 20 / 100} in taxes
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <div style={{
                            paddingTop: '100px'
                        }}>
                            {totalQty > 0 && <PaymentGateway />}
                        </div>
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
        padding: '24px',
        paddingBottom: '100px'
    },
    cartTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px',
    },
    productList: {
        marginTop: '16px',
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

export default CheckOutPage;
