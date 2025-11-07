// MainNav.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaShoppingCart, FaPhone, FaShoppingBag, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../../../assets/logo/panjab_pizza.png";

const MainNav = ({ onMenuToggle, cart, handleOrderNowClick, handleCartBarToggle }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  // ✅ FIXED: Select specific state property
  const user = useSelector((state) => state.user);

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
    <header className={`bg-white ${isSticky ? "fixed top-0 left-0 right-0 z-40 shadow-lg animate-slideDown" : "relative"}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 cursor-pointer group flex-shrink-0" onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Panjab Pizza"
            className="h-12 md:h-14 transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-bold bg-brand bg-clip-text text-transparent">
              Panjab Pizza
            </span>
          
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="flex-1 max-w-2xl mx-8 hidden xl:block">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-gray-50 rounded-xl border border-gray-200 flex items-center group-hover:border-orange-300 transition-colors duration-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                className="flex-1 bg-transparent font-medium text-sm pl-6 pr-12 py-3 focus:outline-none placeholder-gray-500 w-full"
                placeholder="Search for pizzas, deals, and more..."
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 text-gray-400 hover:text-orange-600 transition-colors duration-200 p-1 hover:scale-110"
              >
                <FaSearch size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Contact & Actions */}
        <div className="flex items-center gap-6">
          
          {/* Phone - Desktop */}
          <div className="hidden lg:flex flex-col items-end mr-2">
            <div className="flex items-center gap-3 group">
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                <FaPhone size={14} />
              </div>
              <div className="text-right">
                <span className="font-bold text-gray-800 text-lg block">+1 403 492 5500</span>
                <span className="font-semibold text-sm text-gray-500">Call & Order</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            
            {/* User Account */}
            <button 
              onClick={() => user ? navigate("/profile") : navigate("/login")}
              className="hidden md:flex p-3 hover:bg-orange-50 rounded-2xl transition-all duration-300 group"
              title={user ? "My Account" : "Login"}
            >
              <FaUser className="h-5 w-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
            </button>

            {/* Order Now Icon */}
            <button
              onClick={handleOrderNowClick}
              className="p-3 hover:bg-orange-50 rounded-2xl transition-all duration-300 group relative"
              title="Order Now"
            >
              <FaShoppingBag className="h-6 w-6 text-orange-500 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
            </button>

            {/* Cart Section */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs text-gray-500 font-medium">Your Cart</span>
                <span className="font-bold text-orange-600 text-lg">${cart?.grandtotal?.toFixed(2) || "0.00"}</span>
              </div>
              
              <div className="relative group">
                <button 
                  onClick={handleCartBarToggle} 
                  className="p-3 hover:bg-orange-50 rounded-2xl transition-all duration-300 relative"
                  title="Shopping Cart"
                >
                  <FaShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center animate-pulse">
                      {cartItemsCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={onMenuToggle} 
              className="lg:hidden p-3 hover:bg-orange-50 rounded-2xl transition-all duration-300"
              title="Menu"
            >
              <FaBars className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="xl:hidden border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search menu..."
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600"
            >
              <FaSearch size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;