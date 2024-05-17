import { FC, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { ProductDocument } from '../models/Product';
import { decrementProduct, incrementProduct } from '../productSlice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

interface ProductComponentProps {
  product: ProductDocument;
}

const AllProductComponent: FC<ProductComponentProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.product);
  const cartItem = cart.find((item) => item._id === product._id);
  const qty = cartItem ? cartItem.quantity : 0;

  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(incrementProduct(product));
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 3000);
  };

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300, minWidth: 300, height: 450, border: 'none' }}>
      <CardMedia
        component='img'
        height='300'
        image='https://via.placeholder.com/400.png/09f/fff'
        alt='image'
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      />
      <CardContent>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#2a2728',
            cursor: 'pointer',
          }}>
            {product.name}
          </div>
          <div style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#2a2728',
            cursor: 'pointer',
          }}>
            {product.price.toFixed(2)}€
          </div>
        </div>
        {product.description && (
          <Typography variant='body2' color='text.secondary' style={{ marginTop: '16px', color: '#2a2728', fontSize: '13px' }}>
            {product.ingredient}
          </Typography>
        )}
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          {/* {showAddedToCart && (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ color: 'green' }} />
              <span style={{ color: 'green' }}>Added to cart!</span>
            </span>
          )} */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            {/* {qty > 0 ? (
              <div style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
                <Button
                  sx={{
                    bgcolor: '#f0f0f0',
                    color: 'black',
                    padding: '6px',
                    '&:hover': {
                      bgcolor: '#c0c0c0',
                    },
                    fontSize: '13px',
                  }}
                  onClick={() => {
                    dispatch(decrementProduct(product));
                  }}
                  size='large'
                >
                  Remove from cart
                </Button>
              </div>
            ) : null} */}
            <Button
              sx={{
                bgcolor: '#2a2728',
                color: 'white',
                '&:hover': {
                  bgcolor: '#c0c0c0',
                },
                fontSize: '14px',
                fontWeight: 'bold',
                width: '400px'
              }}
              onClick={handleAddToCart}
              size='large'
            >
              + Add to cart
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

export default AllProductComponent;
