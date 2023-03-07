import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDataFromSession = createAsyncThunk("cart/getDataFromSession", (data, thunkAPI) => {
    try {
        const sessionData = sessionStorage.getItem("cart");
        const cartData = sessionData === null ? [] : JSON.parse(sessionData);
        return cartData;
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
        isLoading: false,
        status: null,
        errorMessage: "",
    },
    reducers: {
        addProductsToCart: (state, action) => {
            state.value.push.apply(state.value, action.payload);
        },
        addOneProductToCart: (state, action) => {
            state.value.push(action.payload);
        },
        resetCart: (state) => {
            state.value = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataFromSession.pending, (state) => {
                state.isLoading = true;
                state.status = null;
                state.errorMessage = "";
            })
            .addCase(getDataFromSession.fulfilled, (state, action) => {
                state.value = action.payload;
                state.isLoading = false;
                state.status = "success";
            })
            .addCase(getDataFromSession.rejected, (state, action) => {
                state.isLoading = false;
                state.status = "fail";
                state.errorMessage = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { addProductsToCart, addOneProductToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;
