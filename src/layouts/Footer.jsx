/**
 * ProfessionalFooter.jsx
 * Tailwind CSS responsive black–orange–yellow footer with modern styling.
 */

import React from "react";
import { useSelector } from "react-redux";
import { CgNotes } from "react-icons/cg";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { BsShieldLockFill } from "react-icons/bs";

const Footer = () => {
  const mode = useSelector((state) => state.theme.mode);
  const isDark = mode === "dark";

  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={18} />, href: "https://facebook.com" },
    { name: "Instagram", icon: <Instagram size={18} />, href: "https://instagram.com" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "https://twitter.com" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    { name: "YouTube", icon: <Youtube size={18} />, href: "https://youtube.com" },
  ];

  return (
    <footer
      className={"w-full border-t bg-black text-white border-orange-600"}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2
              className={"text-2xl font-extrabold tracking-wide text-white" }
            >
              PanjabPizza 🍕
            </h2>
            <p
              className={`mt-3 text-sm leading-relaxed text-yellow-400/80 
             `}
            >
              Serving authentic Italian flavors with a modern twist. Taste the
              excellence of every slice!
            </p>

            {/* Social Icons */}
            <div className="flex mt-5 gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center
                    ${
                      isDark
                        ? "bg-yellow-400/10 text-yellow-300 hover:bg-orange-500 hover:text-white"
                        : "bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white"
                    }`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-75 ml-5 md:m-13   ">
            <div>
            <h3
              className={`text-lg font-semibold mb-4 uppercase ${
                isDark ? "text-yellow-400" : "text-orange-600"
              }`}
            >
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              {["Menu", "Offers", "New Dishes"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={"transition-colors duration-300 hover:text-orange-400 text-gray-300"}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 uppercase ${
                isDark ? "text-yellow-400" : "text-orange-600"
              }`}
            >
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={"transition-colors duration-300 hover:text-orange-400  text-gray-300" }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 uppercase ${
                isDark ? "text-yellow-400" : "text-orange-600"
              }`}
            >
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              {["Blog", "FAQs", "Support"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={"transition-colors duration-300 hover:text-orange-400 text-gray-300"}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>
          </div>

        {/* Bottom Bar */}
        <div
          className={`mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm space-y-6 sm:space-y-0 ${
            isDark ? "border-orange-600" : "border-orange-400"
          }`}
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} PizzaKing. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2  text-gray-400">
            <BsShieldLockFill
              className={`text-lg ${isDark ? "text-yellow-400" : "text-orange-600"}`}
            />
            <a
              href="#"
              className={"hover:text-orange-400 font-medium text-white"}
            >
              PrivacyPolicy
            </a>
            <CgNotes
              className={`text-lg ml-4 ${isDark ? "text-yellow-400" : "text-orange-600"}`}
            />
            <button
              className={"hover:text-orange-400 font-medium text-white"}
            >
             Terms&Condations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
