# TODO: Fix E-commerce Cart and Preview Issues

## 1. Add localStorage persistence to customizationSlice.jsx
- [x] Add load/save functions for customization state
- [x] Update initialState to load from localStorage
- [x] Save state on every change

## 2. Fix Add to Cart in Customization.jsx
- [x] Import addToCart action
- [x] Add onClick handler to the "Add to Cart" button
- [x] Dispatch addToCart with product, selectedSize, quantity, etc.

## 3. Create Cart component
- [x] Create src/component/shared/Cart.jsx
- [x] Display cart items from Redux state
- [x] Add delete button for each item using removeFromCart
- [x] Show total price

## 4. Integrate Cart into Dashboard
- [x] Import and display Cart component in Dashboard.jsx
- [x] Position it appropriately (e.g., below customization)
