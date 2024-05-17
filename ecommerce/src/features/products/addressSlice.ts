import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cart } from './models/Cart';
import { ProductDocument } from './models/Product';
import { CategoryDocument } from './models/Category';
import categoryService from './services/category.service';
import addressService from './services/address.service';
import { AddressDocument } from './models/Address';

export { };

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

interface AddressState extends AsyncState {
    addresses: AddressDocument[];
    cart: Cart;
}

const initialState: AddressState = {
    addresses: [],
    cart: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
};

const modifyQtyByOne = (
    cart: Cart,
    selectedAddress: AddressDocument,
    modificationType: 'INCREMENT' | 'DECREMENT'
) => {
    const previousCart = [...cart];

    const addressInCart = previousCart.find(
        (address) => address._id === selectedAddress._id
    );

    let newCart = [];

    if (!addressInCart) {
        newCart = previousCart;
    } else {
        const filteredCart = previousCart.filter(
            (p) => p._id !== addressInCart._id
        );

        const modification = modificationType === 'INCREMENT' ? 1 : -1;

        addressInCart.quantity = addressInCart.quantity + modification;

        if (addressInCart.quantity === 0) {
            newCart = [...filteredCart];
        } else {
            newCart = [...filteredCart, addressInCart];
        }
    }
    return newCart;
};

export const getAddresses = createAsyncThunk('address', async () => {
    try {
        return await addressService.getAddresses();
    } catch (error) {
        console.log('Error: ', error);
    }
});

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // incrementProduct: (state, action: PayloadAction<ProductDocument>) => {
        //     const modifiedCart = modifyQtyByOne(
        //         state.cart,
        //         action.payload,
        //         'INCREMENT'
        //     );
        //     state.cart = modifiedCart;
        // },
        // decrementProduct: (state, action: PayloadAction<ProductDocument>) => {
        //     const modifiedCart = modifyQtyByOne(
        //         state.cart,
        //         action.payload,
        //         'DECREMENT'
        //     );
        //     state.cart = modifiedCart;
        // },
        resetCart: (state) => {
            state.cart = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAddresses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAddresses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.addresses = action.payload?.data || [];
            })
            .addCase(getAddresses.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.addresses = [];
            });
    },
});

// export const { incrementProduct, decrementProduct, resetCart } =
// productSlice.actions;

export default productSlice.reducer;
