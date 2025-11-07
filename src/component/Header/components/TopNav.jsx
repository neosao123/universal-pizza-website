import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const TopNav = () => (
  <div className="bg-orange-100 text-black text-sm py-2 z-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center gap-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <a 
            href="mailto:sales@panjabpizza.ca" 
            className="flex items-center gap-1 hover:text-yellow-200 transition-colors"
          >
            <FaEnvelope size={12} />
            <span>sales@panjabpizza</span>
          </a>
          
        </div>

        {/* Store Info */}
        <div className="flex flex-wrap items-center gap-4 text-xs">
      
         <a 
            href="tel:+14034925500" 
            className="flex items-center gap-1 hover:text-yellow-200 transition-colors"
          >
            <FaPhone size={12} />
            <span>+1 403 492 5500</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TopNav;