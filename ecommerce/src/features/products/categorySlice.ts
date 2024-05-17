import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cart } from './models/Cart';
import { ProductDocument } from './models/Product';
import { CategoryDocument } from './models/Category';
import categoryService from './services/category.service';

export { };

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

interface CategoryState extends AsyncState {
    categories: CategoryDocument[];
    cart: Cart;
}

const initialState: CategoryState = {
    categories: [],
    cart: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
};

const modifyQtyByOne = (
    cart: Cart,
    selectedCategory: CategoryDocument,
    modificationType: 'INCREMENT' | 'DECREMENT'
) => {
    const previousCart = [...cart];

    const categoryInCart = previousCart.find(
        (category) => category._id === selectedCategory._id
    );

    let newCart = [];

    if (!categoryInCart) {
        newCart = previousCart;
    } else {
        const filteredCart = previousCart.filter(
            (p) => p._id !== categoryInCart._id
        );

        const modification = modificationType === 'INCREMENT' ? 1 : -1;

        categoryInCart.quantity = categoryInCart.quantity + modification;

        if (categoryInCart.quantity === 0) {
            newCart = [...filteredCart];
        } else {
            newCart = [...filteredCart, categoryInCart];
        }
    }
    return newCart;
};

export const getCategories = createAsyncThunk('category', async () => {
    try {
        return await categoryService.getCategories();
    } catch (error) {
        console.log('Error: ', error);
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        incrementProduct: (state, action: PayloadAction<ProductDocument>) => {
            const modifiedCart = modifyQtyByOne(
                state.cart,
                action.payload,
                'INCREMENT'
            );
            state.cart = modifiedCart;
        },
        decrementProduct: (state, action: PayloadAction<ProductDocument>) => {
            const modifiedCart = modifyQtyByOne(
                state.cart,
                action.payload,
                'DECREMENT'
            );
            state.cart = modifiedCart;
        },
        resetCart: (state) => {
            state.cart = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.categories = action.payload?.data || [];
            })
            .addCase(getCategories.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.categories = [];
            });
    },
});

export const { incrementProduct, decrementProduct, resetCart } =
    productSlice.actions;

export default productSlice.reducer;
