import React, { useState } from "react";
import { FaTimes, FaSearch, FaHome, FaTag, FaPizzaSlice, FaStore, FaInfoCircle, FaPhone, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose, user, cart }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      onClose();
    }
  };

  const menuItems = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "Deals", link: "/specialoffer", icon: FaTag },
    { name: "Signature Pizza", link: "/signaturepizza", icon: FaPizzaSlice },
    { name: "Stores", link: "/stores", icon: FaStore },
    { name: "About", link: "/about-us", icon: FaInfoCircle },
    { name: "Contact", link: "/contact-us", icon: FaPhone },
  ];

  const cartItemsCount = cart?.product?.reduce((total, item) => total + item.quantity, 0) || 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col transform transition-all duration-300">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-200 bg-orange-50">
        <h2 className="text-xl font-bold text-orange-600">Menu</h2>
        <button 
          onClick={onClose} 
          className="p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pizzas..."
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-orange-500 text-gray-800 placeholder-gray-500"
          />
          <button 
            type="submit" 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-600"
          >
            <FaSearch size={16} />
          </button>
        </form>
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex justify-around">
          <button 
            onClick={() => { navigate("/profile"); onClose(); }}
            className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <FaUser className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Profile</span>
          </button>
          <button 
            onClick={() => { navigate("/wishlist"); onClose(); }}
            className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <FaHeart className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Wishlist</span>
          </button>
          <button 
            onClick={() => { /* handle cart toggle */ onClose(); }}
            className="flex flex-col items-center p-2 text-gray-600 hover:text-orange-600 transition-colors relative"
          >
            <FaShoppingCart className="h-6 w-6 mb-1" />
            <span className="text-xs font-medium">Cart</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => { navigate(item.link); onClose(); }}
                className="flex items-center gap-4 p-4 w-full text-left text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors group"
              >
                <IconComponent className="group-hover:scale-110 transition-transform text-orange-500" />
                <span className="font-semibold">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        {user ? (
          <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="bg-orange-500 text-white p-2 rounded-full">
              <FaUser size={16} />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">Welcome back!</p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => { navigate("/login"); onClose(); }}
              className="bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => { navigate("/signup"); onClose(); }}
              className="bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;