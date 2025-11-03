import { createSlice } from "@reduxjs/toolkit";

// Helper to load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return [];
  }
};

// Helper to save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (e) {
    console.error("Could not save cart to localStorage", e);
  }
};

const initialState = {
  items: loadCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, selectedOptions, quantity, selectedSize } = action.payload;
      const newItem = {
        id: Date.now(), // Simple unique ID
        product,
        selectedOptions: selectedOptions || [],
        quantity,
        selectedSize,
        totalPrice: (product.price || 0) * quantity, // Base price, adjust if needed
      };
      state.items.push(newItem);
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
