import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice.jsx";
import customizationReducer from "../features/customization/customizationSlice.jsx";
import cartReducer from "../features/cart/cartSlice.jsx";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        customization: customizationReducer,
        cart: cartReducer,
    },
})
