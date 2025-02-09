import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 text-white flex justify-between items-center px-4 h-16">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <Link
            to="/login"
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
