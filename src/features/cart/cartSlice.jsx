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

      // Normalize selectedOptions to an array of selected items (with text, price, portion)
      let selectedOptionsArray = [];
      let optionsPrice = 0;

      if (Array.isArray(selectedOptions)) {
        // If user passed an array (rare here), flatten
        selectedOptionsArray = selectedOptions;
        optionsPrice = selectedOptionsArray.reduce((acc, opt) => acc + (opt.price || 0), 0);
      } else if (selectedOptions && typeof selectedOptions === "object") {
        // selectedOptions shape: { TAB: { SUBTAB: value } }
        Object.keys(selectedOptions).forEach((tab) => {
          const subtabs = selectedOptions[tab] || {};
          Object.keys(subtabs).forEach((subtab) => {
            const subval = subtabs[subtab];
            if (!subval) return;
            if (Array.isArray(subval)) {
              // array of {text,price,portion}
              selectedOptionsArray.push(...subval);
              optionsPrice += subval.reduce((acc, opt) => acc + (opt.price || 0), 0);
            } else if (typeof subval === "object" && (subval.text || subval.price)) {
              selectedOptionsArray.push(subval);
              optionsPrice += subval.price || 0;
            }
          });
        });
      }

      const basePrice = (selectedSize && selectedSize.price) || product.price || 0;
      const totalPrice = (basePrice + optionsPrice) * (quantity || 1);

      const newItem = {
        id: Date.now(),
        product,
        selectedOptions: selectedOptionsArray,
        quantity: quantity || 1,
        selectedSize: selectedSize || null,
        totalPrice,
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
