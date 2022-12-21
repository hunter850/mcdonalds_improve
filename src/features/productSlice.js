import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// config
import { breakfastImages, comboImages, orderImages } from "@/config/home_config";

const initialState = {
    combo: comboImages,
    breakfast: breakfastImages,
    order: orderImages,
};

export const getProductData = createAsyncThunk("product/getProductData", (data, thunkAPI) => {
    try {
        const sessionData = sessionStorage.getItem("select_history");
        const allProducts = sessionData === null ? [] : JSON.parse(sessionData);
        if (allProducts.length === 0) {
            return initialState;
        } else {
            const combo = allProducts.filter((item) => item.id >= 1 && item.id <= 10);
            const breakfast = allProducts.filter((item) => item.id >= 11 && item.id <= 20);
            const order = allProducts.filter((item) => item.id >= 21 && item.id <= 30);
            return { combo, breakfast, order };
        }
    } catch (error) {
        thunkAPI.rejectWithValue(initialState);
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        updateProductValue: (state, action) => {
            state[action.payload.key] = action.payload.value;
        },
        resetProduct: (state) => {
            state.breakfast = initialState.breakfast;
            state.combo = initialState.combo;
            state.order = initialState.order;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductData.fulfilled, (state, action) => {
                state.combo = action.payload.combo;
                state.breakfast = action.payload.breakfast;
                state.order = action.payload.order;
            })
            .addCase(getProductData.rejected, (state, action) => {
                state.combo = action.payload.combo;
                state.breakfast = action.payload.breakfast;
                state.order = action.payload.order;
            });
    },
});

// Action creators are generated for each case reducer function
export const { updateProductValue, resetProduct } = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
