import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        addProductsToCart: (state, action) => {
            state.value.push.apply(state.value, action.payload);
        },
        addOneProductToCart: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addProductsToCart, addOneProductToCart } = cartSlice.actions;

export const selectProduct = (state) => state.cart.value;

export default cartSlice.reducer;
