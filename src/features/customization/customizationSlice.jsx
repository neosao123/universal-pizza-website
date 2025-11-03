import { createSlice } from "@reduxjs/toolkit";

// Helper to load customization from localStorage
const loadCustomizationFromStorage = () => {
  try {
    const serializedCustomization = localStorage.getItem("customization");
    return serializedCustomization ? JSON.parse(serializedCustomization) : {
      selectedBox: null,
      quantity: 0,
      activeTab: "DOUGH",
      activeSubTab: null,
      previewImage: null, // Will be set based on product
      selectedOption: "",
      selectedInnerOptions: {}, // for inner radio selections in toppings
    };
  } catch (e) {
    console.error("Could not load customization from localStorage", e);
    return {
      selectedBox: null,
      quantity: 0,
      activeTab: "DOUGH",
      activeSubTab: null,
      previewImage: null,
      selectedOption: "",
      selectedInnerOptions: {},
    };
  }
};

// Helper to save customization to localStorage
const saveCustomizationToStorage = (customization) => {
  try {
    localStorage.setItem("customization", JSON.stringify(customization));
  } catch (e) {
    console.error("Could not save customization to localStorage", e);
  }
};

const initialState = loadCustomizationFromStorage();

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setSelectedBox: (state, action) => {
      state.selectedBox = action.payload.index;
      state.previewImage = action.payload.image || state.previewImage;
      saveCustomizationToStorage(state);
    },
    setQuantity: (state, action) => {
      if (action.payload.type === "inc") {
        state.quantity += 1;
      } else if (action.payload.type === "dec" && state.quantity > 0) {
        state.quantity -= 1;
      }
      saveCustomizationToStorage(state);
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      state.activeSubTab = null; // Reset subTab when tab changes
      state.selectedOption = ""; // Reset selected option
      saveCustomizationToStorage(state);
    },
    setActiveSubTab: (state, action) => {
      state.activeSubTab = action.payload;
      saveCustomizationToStorage(state);
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
      saveCustomizationToStorage(state);
    },
    setSelectedInnerOptions: (state, action) => {
      state.selectedInnerOptions = action.payload;
      saveCustomizationToStorage(state);
    },
    setPreviewImage: (state, action) => {
      state.previewImage = action.payload;
      saveCustomizationToStorage(state);
    },
    resetCustomization: (state) => {
      Object.assign(state, initialState);
      saveCustomizationToStorage(state);
    },
  },
});

export const {
  setSelectedBox,
  setQuantity,
  setActiveTab,
  setActiveSubTab,
  setSelectedOption,
  setSelectedInnerOptions,
  setPreviewImage,
  resetCustomization,
} = customizationSlice.actions;

export default customizationSlice.reducer;
