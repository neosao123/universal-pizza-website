import React from "react";
import { useSelector } from "react-redux";
import { Settings, LogOut, Edit } from "lucide-react";

const Profile = ({ compact = false }) => {
  const mode = useSelector((state) => state.theme.mode);

  if (compact) {
    // --- Compact version for Navbar ---
    return (
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 object-cover shadow-sm"
        />
        <span
          className={`text-sm font-medium ${
            mode === "light" ? "text-gray-800" : "text-gray-200"
          }`}
        >
          John Doe
        </span>
      </div>
    );
  }

  return (
    <div
      className={` relative w-full max-w-3xl mx-auto bg-gradient-to-r from-white/80 via-white/60 to-white/80 dark:from-gray-900/70 dark:via-gray-900/50 dark:to-gray-900/70 backdrop-blur-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-5 flex items-center justify-between transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]`}
    >
   
      <div className="flex items-center space-x-5">
        <img
          src="https://via.placeholder.com/60"
          alt="Profile"
          className="w-14 h-14 rounded-full border-2 border-white shadow-md dark:border-gray-800 object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 tracking-wide">
            John Doe
          </h2>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Software Engineer
          </p>
        </div>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center space-x-1">
        <button className="p-3 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 shadow-md hover:shadow-lg transition-all duration-300">
          <Edit size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-3 rounded-full bg-gray-100/70 dark:bg-gray-800/70 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 shadow-md hover:shadow-lg transition-all duration-300">
          <Settings size={20} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-3 rounded-full bg-red-100/70 dark:bg-red-900/70 hover:bg-red-200/80 dark:hover:bg-red-800/80 shadow-md hover:shadow-lg transition-all duration-300">
          <LogOut size={20} className="text-red-600 dark:text-red-300" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
