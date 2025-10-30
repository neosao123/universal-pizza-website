import axios from "axios";
import React, { useState } from "react";
import { UAParser } from "ua-parser-js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [ipInfo, setIpInfo] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parser = new UAParser();
      const resultData = parser.getResult();

      const res = await axios.get("https://ipapi.co/json/");
      setIpInfo(res.data);

      const auditData = {
        email: formData.email,
        browserName: resultData.browser.name,
        deviceType: resultData.device.type || "desktop",
        osName: resultData.os.name,
        osVersion: resultData.os.version,
        userAgent: resultData.ua,
        ipAddress: res.data.ip,
        city: res.data.city,
        region: res.data.region,
        country: res.data.country_name,
        isp: res.data.org,
        timestamp: new Date().toISOString(),
      };

      console.log("Login Data:", formData);
      console.log("Audit Data:", auditData);
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121212] p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md border border-orange-500">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-yellow-400 text-sm sm:text-base mb-6">
          Please log in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700
                         focus:ring-2 focus:ring-orange-500 focus:outline-none
                         bg-black text-white placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700
                         focus:ring-2 focus:ring-orange-500 focus:outline-none
                         bg-black text-white placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="rounded accent-orange-500" />{" "}
              Remember me
            </label>
            <a
              href="#"
              className="text-orange-400 hover:text-yellow-400 transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 
                       hover:bg-yellow-500 transition duration-200 font-semibold text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-orange-400 hover:text-yellow-400 transition-colors"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
