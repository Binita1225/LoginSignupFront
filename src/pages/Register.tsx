import { Link, useNavigate } from "react-router-dom";
import SidebarImage from "../image/sidebar.avif";

import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password" || name === "confirmPassword") {
      let password = name === "password" ? value : formData.password;
      let confirmPassword =
        name === "confirmPassword" ? value : formData.confirmPassword;

      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
      } else if (password !== confirmPassword) {
        setError("Passwords do not match.");
      } else {
        setError(""); // Clear error when both conditions are met
      }
    }
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://localhost:7161/api/UserApi/signup",
        {
          name: formData.name,
          userName: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      // alert("Signup successful!");
      console.log(response.data);

      navigate("/");

      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      console.error("Error during signup:", error.response?.data);
      if (error.response?.data?.errors) {
        console.log("Validation errors:", error.response.data.errors);
        setError(JSON.stringify(error.response.data.errors));
      } else {
        setError(error.response?.data || "Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="h-[90vh] w-[90vw] max-w-4xl mx-auto my-12 border rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Right Side - Registration Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Register
          </h2>

          <form className="mt-6" onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">User Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter confirm password"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Left Side - Sidebar */}
      <div className="w-1/2 bg-blue-500 text-white flex items-center justify-center">
        <div className="p-8 text-center flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          <img
            src={SidebarImage}
            alt="Sidebar"
            className="mt-4 w-80 h-80 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
