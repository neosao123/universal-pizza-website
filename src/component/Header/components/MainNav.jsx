// MainNav.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaShoppingCart, FaPhone, FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../../../assets/logo/panjab_pizza.png";

const MainNav = ({ onMenuToggle, cart, handleOrderNowClick, handleCartBarToggle }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const cartItemsCount = cart?.product?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <header className={`bg-white ${isSticky ? "fixed top-0 left-0 right-0 z-40 shadow-xl animate-slideDown" : "relative"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center">
        {/* Logo */}
        <div className="mr-auto flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Panjab Pizza"
            className="h-10 md:h-12 transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold bg-brand bg-clip-text text-transparent">
              Panjab Pizza
            </span>
          </div>
        </div>

      {/* Search Bar - Desktop */}
<div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-lg hidden xl:flex items-center mx-8 shadow-sm border border-gray-200">
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
    className="flex-1 bg-transparent font-medium text-sm pl-6 pr-4 py-3 focus:outline-none placeholder-gray-500"
    placeholder="Search for pizzas, deals, and more..."
  />
  <button 
    onClick={handleSearch} 
    className="px-5 text-gray-500 hover:text-orange-600 transition-colors duration-200 border-l border-gray-300 h-full flex items-center"
  >
    <FaSearch size={16} />
  </button>
</div>

        {/* Phone */}
        <div className="ml-auto md:w-48 hidden lg:flex flex-col place-items-end mr-6">
          <div className="flex items-center gap-2">
            <FaPhone className="text-orange-600" size={14} />
            <span className="font-bold text-lg">+1 403 492 5500</span>
          </div>
          <span className="font-semibold text-sm text-gray-400">Call And Order In</span>
        </div>

        {/* Icons */}
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end gap-3">
            <li className="hidden lg:block">
              <button onClick={handleOrderNowClick} className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 flex items-center gap-2">
                <FaShoppingBag /> Order Now
              </button>
            </li>
         
            <li className="relative">
              <button onClick={handleCartBarToggle} className="p-2 hover:bg-gray-100 rounded-lg relative">
                <FaShoppingCart className="h-5 w-5 text-gray-600" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Cart Total */}
        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <span className="text-xs text-gray-400">Your Cart</span>
          <span className="text-orange-600">${cart?.grandtotal?.toFixed(2) || "0.00"}</span>
        </div>

        {/* Mobile Menu */}
        <button onClick={onMenuToggle} className="ml-4 lg:hidden p-2 hover:bg-gray-100 rounded-lg">
          <FaBars className="h-5 w-5 text-gray-600" />
        </button>
      </div>


    </header>
  );
};

export default MainNav;