import { Home, Eye, LogOut, Award, GraduationCap, Laptop } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
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
              to="/skills"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Award className="w-5 h-5 mr-2" />
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/experience"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="/project"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Laptop className="w-5 h-5 mr-2" />
              Project
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Eye className="w-5 h-5 mr-2" />
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/testimonial"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Eye className="w-5 h-5 mr-2" />
              Testimonial
            </Link>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 flex items-center"
            >
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
