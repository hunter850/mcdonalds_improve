import { createSlice } from "@reduxjs/toolkit";
import { sideOrderImages } from "@/config/home_config";

const initialState = {
    value: sideOrderImages,
};

export const comboSlice = createSlice({
    name: "combo",
    initialState,
    reducers: {
        updateCombo: (state, action) => {
            state.value = action.payload;
        },
        resetCombo: (state) => {
            state.value = initialState.value;
        },
    },
});

export const { updateCombo, resetCombo } = comboSlice.actions;

export const selectCombo = (state) => state.combo.value;

export default comboSlice.reducer;
