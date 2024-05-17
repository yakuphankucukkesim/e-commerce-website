import { FC, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { ProductDocument } from '../models/Product';
import { decrementProduct, incrementProduct } from '../productSlice';
import { useNavigate } from 'react-router-dom';

interface ProductComponentProps {
    product: ProductDocument;
}

const BestsellerComponent: FC<ProductComponentProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state) => state.product);
    const cartItem = cart.find((item) => item._id === product._id);
    const qty = cartItem ? cartItem.quantity : 0;

    const navigate = useNavigate();

    return (
        <div style={{
            cursor: 'pointer',
        }}
            onClick={() => navigate('/')}
        >
            <div>
                <img
                    style={{
                    }}
                    src='https://via.placeholder.com/200.png/09f/fff'
                    alt='shop logo'
                />
            </div>
            <div style={{
                color: '#2a2728',
                cursor: 'pointer',
                paddingTop: '10px'
            }}>
                {product.name}
            </div>
        </div>
    );
};

export default BestsellerComponent;
