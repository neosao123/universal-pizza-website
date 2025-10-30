import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Home,
  Info,
  Briefcase,
  Phone,
  Menu,
  X,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const mode = useSelector((state) => state.theme.mode);
  const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, link: "/" },
    { name: "About", icon: <Info size={18} />, link: "/about" },
    { name: "Menu", icon: <Briefcase size={18} />, link: "/menu" },
    { name: "Contact", icon: <Phone size={18} />, link: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 🔝 Top Bar */}
      <div className="fixed top-0 left-0 w-full bg-orange-600 text-white text-xs sm:text-sm z-50">
        <div className="max-w-8xl mx-auto px-3 sm:px-6 flex items-center justify-between h-9">
          {/* Left: Phone */}
          <a
            href="tel:+911234567890"
            className="flex items-center gap-1 hover:text-yellow-200 transition"
          >
            <Phone size={14} />
            <span>+91 12345 67890</span>
          </a>

          {/* Right: Email */}
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-1 hover:text-yellow-200 transition"
          >
            <Mail size={14} />
            <span>hello@example.com</span>
          </a>
        </div>
      </div>

      {/* 🌐 Navbar */}
      <nav
        className={"fixed w-full left-0  top-[36px] sm:top-9 z-50 transition-all duration-500 bg-black/95  shadow-lg border-b border-orange-600" }
      >
        <div className="max-w-8xl mx-auto px-2 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* 🍕 Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                🍕
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  PanjabPizza
                </span>
                <span className="text-[10px] sm:text-xs text-yellow-400">
                  Taste the Real Italy
                </span>
              </div>
            </div>

            {/* 🧭 Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center gap-2 text-sm font-semibold text-white hover:text-orange-400 transition"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </div>

            {/* 🌐 Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/login"
                className="px-4 py-2 border border-orange-500 text-orange-400 rounded-lg font-semibold text-sm hover:bg-orange-500 hover:text-white transition"
              >
                Login
              </a>
              <a
                href="/signup"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-500 transition"
              >
                Sign Up
              </a>
            </div>

            {/* 📱 Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-orange-500 text-black hover:bg-orange-400 transition"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 Full-Page Mobile Nav */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col items-center justify-center space-y-6 transition-all duration-300">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={toggleMenu}
                className="flex items-center gap-3 text-lg font-semibold hover:text-orange-400 transition"
              >
                {item.icon}
                {item.name}
              </a>
            ))}

            <div className="pt-6">
              <a
                href="/login"
                className="block text-center py-2 px-6 border border-orange-500 text-white rounded-lg hover:bg-orange-600 transition mb-3"
              >
                Login
              </a>
              <a
                href="/signup"
                className="block text-center py-2 px-6 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
