import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const location = useLocation();
  // const loggedInUser =
  //   location.state?.userName || localStorage.getItem("userData")?.userName;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, fetch user data from localStorage
      const userData = JSON.parse(localStorage.getItem("userData") || "{}");
      if (userData && userData.userName) {
        setLoggedInUser(userData.userName); // Set userName if it exists
        console.log("User Name:", userData.userName);
      }
    }
  }, []);

  return (
    <div className="bg-gray-800 text-white h-16 flex items-center justify-between px-4">
      {/* Left: App Title */}

      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center ml-100">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* Right: Login or Username */}
      <div className="ml-130">
        {loggedInUser ? (
          <span className="text-white">{loggedInUser}</span>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
