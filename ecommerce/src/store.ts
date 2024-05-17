import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import productReducer from './features/products/productSlice';
import categoryReducer from './features/products/categorySlice';
import addressReducer from './features/products/addressSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    category: categoryReducer,
    address: addressReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
