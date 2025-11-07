// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import SecondaryNav from "./SecondaryNav";   // IMPORTED HERE
import MobileMenu from "./MobileMenu";
import { toast } from "react-toastify";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartSidebar, setCartSidebar] = useState(false);
  const { user } = useSelector((state) => state);
  const navigate = useNavigate();

  // Dummy cart (replace with real Redux later)
  const cart = { 
    grandtotal: 25.99, 
    product: [
      { id: 1, name: "Margherita", quantity: 2, price: 12.99 },
      { id: 2, name: "Garlic Bread", quantity: 1, price: 4.99 }
    ] 
  };

  const handleOrderNowClick = () => {
    if (cart.product.length > 0) {
      user ? navigate("/checkout-page") : navigate("/login");
    } else {
      toast.error("Add some delicious pizza first!");
    }
  };

  const handleCartBarToggle = () => {
    setCartSidebar(prev => !prev);
    toast.success("Cart sidebar opened!");
  };

  return (
    <>
      {/* 1. Top Bar */}
      <TopNav />


      <MainNav
        onMenuToggle={() => setMobileMenuOpen(true)}
        cart={cart}
        handleOrderNowClick={handleOrderNowClick}
        handleCartBarToggle={handleCartBarToggle}
      />
      <SecondaryNav />   
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        user={user}
        cart={cart}
      />
    </>
  );
};

export default Navbar;