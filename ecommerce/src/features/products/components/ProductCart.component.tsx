import { FC } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ProductDocument } from '../models/Product';
import { decrementProduct, incrementProduct } from '../productSlice';

interface ProductCartComponentProps {
  product: ProductDocument;
}

const ProductCartComponent: FC<ProductCartComponentProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.product);
  const cartItem = cart.find((item) => item._id === product._id);
  const qty = cartItem ? cartItem.quantity : 0;

  return (
    <Card sx={{
      display: 'flex', flexDirection: 'row', width: 1270
    }}>
      <CardMedia
        component='img'
        sx={{ width: 100, minWidth: 100 }}
        image='https://via.placeholder.com/100.png/09f/fff'
        alt='image'
      />
      <CardContent sx={{
        flex: 1,
        fontSize: '17px',
        color: '#2a2728',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        <div>
          <div style={{
            fontWeight: 'bold',
            fontFamily: 'sans-serif'
          }}>
            {product.name}
          </div>
          <div style={{
            fontSize: '15px',
            color: '#2a2728',
            paddingTop: '5px',
            fontFamily: 'sans-serif'
          }}
          >
            {product.price} €
          </div>
        </div>
        <div>
          <CardActions sx={{ border: '1px solid #2a2728', marginRight: '120px', marginBottom: '-8px' }}>
            <Button
              onClick={() => {
                dispatch(decrementProduct(product));
              }}
              disabled={qty === 0}
              size='large'
              sx={{ color: '#2a2728', fontWeight: 'bold', '&:hover': { backgroundColor: 'transparent' } }}
            >
              -
            </Button>
            <div style={{ color: '#2a2728', fontWeight: 'bold' }}>{qty}</div>
            <Button
              onClick={() => {
                dispatch(incrementProduct(product));
              }}
              size='large'
              sx={{ color: '#2a2728', fontWeight: 'bold', '&:hover': { backgroundColor: 'transparent' } }}
            >
              +
            </Button>
          </CardActions>
        </div>
        <div style={{
          gap: '8px',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          fontFamily: 'sans-serif'
        }}>
          {`${(product.price * qty).toFixed(2)}`} €
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCartComponent;
