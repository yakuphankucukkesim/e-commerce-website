import { FC } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ProductDocument } from '../models/Product';
import { decrementProduct, incrementProduct } from '../productSlice';

interface ProductCartComponentProps {
    product: ProductDocument;
}

const ShoppingCartProductComponent: FC<ProductCartComponentProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const { cart } = useAppSelector((state) => state.product);
    const cartItem = cart.find((item) => item._id === product._id);
    const qty = cartItem ? cartItem.quantity : 0;

    return (
        <div style={{
            display: 'flex',
            width: '400px'
        }}>
            <div>
                <img
                    style={{
                    }}
                    src='https://via.placeholder.com/60.png/09f/fff'
                    alt='shop logo'
                />
            </div>
            <div style={{
                paddingTop: '20px',
                paddingLeft: '20px',
            }}>
                {product.name} ({qty})
            </div>
            <div style={{
                paddingTop: '20px',
                marginLeft: 'auto'
            }}>
                €{`${(product.price * qty).toFixed(2)}`}
            </div>
        </div>
    );
};

export default ShoppingCartProductComponent;
