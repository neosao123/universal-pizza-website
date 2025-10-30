import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Signup = () => {
  const mode = useSelector((state) => state.theme.mode);

  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile_no: "",
    birth_date: "",
    photo: null,
    password: "",
  });

  // ✅ Fetch designations
  useEffect(() => {
    const fetchDesignations = async () => {
      try {
          const { data } = await axios.get("http://localhost:3000/api/designations");
        // Assuming the API returns an array of designations
        setDesignations(data);
      } catch (error) {
        console.error("Error fetching designations:", error);
      }
    };
    fetchDesignations();
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files.length > 0) {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
console.log(formData);
      const res = await axios.post("http://localhost:3000/api/signup", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Signup Successful!");
      console.log("Response:", res.data);
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup Failed!");
    }
  };

  return (
    <div
      className={`h-auto my-14 flex items-center justify-center transition-all duration-500 ${
        mode === "light"
          ? "bg-gradient-to-br from-blue-50 to-indigo-100"
          : "bg-gradient-to-br from-gray-900 to-gray-800"
      } p-4`}
    >
      <div
        className={`w-full max-w-md rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
          mode === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        {/* Header */}
        <div className="top-0 z-10 px-2 py-2 bg-gradient-to-r from-indigo-500 to-blue-500">
          <h2 className="text-2xl font-bold text-white text-center">
            Create Account
          </h2>
          <p className="text-indigo-100 text-center mt-1">
            Join us and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* First Name */}
          <InputField
            label="First Name"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
            placeholder="John"
            mode={mode}
          />

          {/* Last Name */}
          <InputField
            label="Last Name"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
            placeholder="Doe"
            mode={mode}
          />

          

          {/* Email */}
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            mode={mode}
          />

          {/* Mobile Number */}
          <InputField
            label="Mobile Number"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            mode={mode}
          />

          {/* Birth Date */}
          <InputField
            label="Birth Date"
            name="birth_date"
            type="date"
            value={formData.birth_date}
            onChange={handleChange}
            mode={mode}
          />

          {/* Profile Photo */}
          <InputField
            label="Profile Photo"
            name="photo"
            type="file"
            onChange={handleChange}
            accept="image/*"
            mode={mode}
          />

          {/* Password */}
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            mode={mode}
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full font-semibold py-2 rounded-lg shadow-md bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// ✅ Reusable Input Component
const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  mode,
  accept,
}) => (
  <div>
    <label
      className={`block text-sm font-medium mb-1 ${
        mode === "light" ? "text-gray-700" : "text-gray-300"
      }`}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={type !== "file" ? value : undefined}
      onChange={onChange}
      placeholder={placeholder}
      accept={accept}
      required
      autoComplete="off"
      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none ${
        mode === "light"
          ? "border-gray-300 focus:ring-indigo-400"
          : "border-gray-600 focus:ring-yellow-400 bg-gray-700 text-white"
      }`}
    />
  </div>
);

export default Signup;
