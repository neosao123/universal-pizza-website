// src/components/Navbar/SecondaryNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const SecondaryNav = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Deals", path: "/specialoffer" },
    { label: "Signature Pizza", path: "/signaturepizza" },
    { label: "Stores", path: "/stores" },
    { label: "About", path: "/about-us" },
    { label: "Contact", path: "/contact-us" },
  ];

  return (
    <div className="border-t border-gray-200 ">
      <div className="container mx-auto px-4">
        <nav className="hidden lg:flex items-center justify-center space-x-10 py-3">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`
                relative font-bold text-sm tracking-wide transition-all duration-300
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                after:bg-orange-600 after:transition-all after:duration-300
                hover:after:w-full
                ${item.path === location.pathname ? "text-orange-600" : "text-gray-700"}
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SecondaryNav;