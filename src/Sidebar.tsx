import { Home, Info, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="absolute top-15 w-64 bg-gray-800 text-white">
      <nav className="mt-6 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/home"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Info className="w-5 h-5 mr-2" />
              About
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
            >
              <LogOut className="inline-block w-5 h-5 mr-1" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
