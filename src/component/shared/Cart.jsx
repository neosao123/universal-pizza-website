import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Size: {item.selectedSize?.text || "N/A"} | Quantity: {item.quantity}
                    </p>
                    {item.selectedOptions.length > 0 && (
                      <p className="text-sm text-gray-600">
                        Options: {item.selectedOptions.map(opt => opt.text).join(", ")}
                      </p>
                    )}
                    <p className="text-sm font-medium text-orange-600">
                      ₹{item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleClearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-800">
                Total: ₹{totalPrice.toFixed(2)}
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors mt-2">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
