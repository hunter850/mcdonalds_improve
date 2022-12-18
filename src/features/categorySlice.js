import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: "breakfast",
    },
    reducers: {
        updateCategory: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateCategory } = categorySlice.actions;

export const selectCategory = (state) => state.category.value;

export default categorySlice.reducer;
