import { createSlice } from "@reduxjs/toolkit";
// config
import { breakfastImages, mainImages, orderImages } from "@/config/home_config";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        breakfast: breakfastImages,
        main: mainImages,
        order: orderImages,
    },
    reducers: {
        updateProductValue: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateProductValue } = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
