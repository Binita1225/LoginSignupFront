import { Link } from "react-router-dom";
import SidebarImage from "./image/sidebar.avif";

const Login = () => {
  return (
    <div className="h-[80vh] w-[70vw] mx-auto my-12 border rounded-lg shadow-lg flex overflow-hidden">
      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold text-center text-blue-600">
            Login
          </h2>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 transition">
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
            className="mt-4 w-80 h-80 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
