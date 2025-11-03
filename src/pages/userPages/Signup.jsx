import React, { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    mobile_no: "",
    birth_date: "",
    photo: null,
    password: "",
    terms_accepted: false,
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
    const { name, value, files, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "photo" && files.length > 0) {
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
    <div className="min-h-screen  flex flex-row  items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
      <div className="bg-[#121212] p-6 sm:p-8 min-w-[25vh] rounded-2xl shadow-lg w-full max-w-md border border-orange-500">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2">
          Create Your Account
        </h2>
        <p className="text-center text-yellow-400 text-sm sm:text-base mb-6">
          Join us and start your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">

         
          {/* First Name */}
          <InputField
            label="First Name"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
            placeholder="John"
          />

          {/* Last Name */}
          <InputField
            label="Last Name"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
            placeholder="Doe"
          />

          {/* Email */}
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />

          {/* Mobile Number */}
          <InputField
            label="Mobile Number"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />
          </div>
         <div className="grid grid-cols-2 gap-4">
 {/* Birth Date */}
          <InputField
            label="Birth Date"
            name="birth_date"
            type="date"
            value={formData.birth_date}
            onChange={handleChange}
          />

          {/* Profile Photo */}
          <InputField
            label="Profile Photo"
            name="photo"
            type="file"
            onChange={handleChange}
            accept="image/*"
          />

          {/* Password */}
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
          />

          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="terms_accepted"
              checked={formData.terms_accepted}
              onChange={handleChange}
              required
              className="mr-2 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label className="text-gray-300 text-sm">
              I agree to the <a href="#" className="text-orange-400 hover:text-yellow-400">Terms and Conditions</a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg mt-4 hover:bg-yellow-500 transition duration-200 font-semibold text-sm sm:text-base"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <a
            href="#"
            className="text-orange-400 hover:text-yellow-400 transition-colors"
          >
            Login
          </a>
        </p>
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
  accept,
}) => (
  <div>
    <label className="block text-gray-300 text-sm mb-1">
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
      className="w-full px-4 py-2 rounded-lg border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-black text-white placeholder-gray-400 text-sm sm:text-base"
    />
  </div>
);

export default Signup;
