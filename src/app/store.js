import { configureStore } from "@reduxjs/toolkit";
import countReducer from "@/features/countSlice";
import categoryReducer from "@/features/categorySlice";
import productReducer from "@/features/productSlice";
import cartReducer from "@/features/cartSlice";
import comboReducer from "@/features/comboSlice";
import logger from "redux-logger";

export default configureStore({
    reducer: {
        count: countReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        combo: comboReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
