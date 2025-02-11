import { Link, useNavigate } from "react-router-dom";
import SidebarImage from "../image/sidebar.avif";

import axios from "axios";
import { useState, useEffect } from "react";
import { axiosInstance } from "../services/axiosInstance";

const Login = () => {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  // const handleLogin = async (e: any) => {
  //   e.preventDefault();
  //   setError("");
  //   console.log("Login Request:", { userName, password });

  //   try {
  //     const response = await axios.post(
  //       "https://localhost:7161/api/UserApi/login",
  //       {
  //         userName,
  //         password,
  //       }
  //     );

  //     const token = response.data.token;
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("userData", JSON.stringify(response.data)); // Store the entire user data
  //     console.log("Login successful");
  //     // Fetch the logged-in user data after login
  //     await fetchLoggedInUser();

  //     navigate("/home", { state: { userName: response.data.userName } });
  //   } catch (err: any) {
  //     console.error("Login failed:", err.response?.data || err.message);
  //     setError(
  //       err.response?.data?.message || "Login failed. Please try again."
  //     );
  //   }
  // };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    console.log("Login Request:", { userName, password });

    try {
      const response = await axios.post(
        "https://localhost:7161/api/UserApi/login",
        {
          userName,
          password,
        }
      );

      const { token, userName: returnedUserName, email } = response.data; // Destructure the response properly

      // Now store the token and user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem(
        "userData",
        JSON.stringify({ userName: returnedUserName, email })
      ); // Store userName and email

      console.log("Login successful");
      navigate("/", { state: { userName: returnedUserName } }); // Pass the correct userName
    } catch (err: any) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const fetchLoggedInUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found. User is not logged in.");
        return;
      }
      const response = await axiosInstance.get("/UserApi/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Logged-in user data:", response.data);
      setLoggedInUser(response.data);
    } catch (err) {
      console.error(
        "Failed to fetch user data:",
        err.response?.data || err.message
      );
    }
  };

  // Check for token and fetch user data on component load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchLoggedInUser();
      console.log("Logged-in user after fetch:", loggedInUser);
    }
  }, []);

  return (
    <div className="h-[80vh] w-[70vw] max-w-4xl mx-auto my-12 border rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Login
          </h2>
          <form className="mt-6" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email/Username</label>
              <input
                type="text"
                placeholder="Enter your email or username"
                value={userName} // This value can be either email or username
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
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
            className="mt-4 w-80 h-80 rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
