import { createSlice } from "@reduxjs/toolkit";
import isMorning from "@/js/isMorning";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        value: isMorning() ? "breakfast" : "combo",
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
