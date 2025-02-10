import { Home, Info, LogOut, Award } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData"); // Remove user data from localStorage
    setLoggedInUser(null);
    navigate("/login");
  };

  const handleSkillsClick = () => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (!userData || !userData.userName) {
      navigate("/login");
    } else {
      navigate("/skills");
    }
  };

  return (
    // <div className="absolute top-15 w-64 bg-gray-800 text-white">
    //   <h1 className="text-2xl font-bold">MyApp</h1>
    //   <nav className="mt-6 p-4">
    //     <ul className="space-y-2">
    //       <li>
    //         <Link
    //           to="/home"
    //           className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
    //         >
    //           <Home className="w-5 h-5 mr-2" />
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/about"
    //           className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
    //         >
    //           <Info className="w-5 h-5 mr-2" />
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <button
    //           onClick={handleLogout}
    //           className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
    //         >
    //           <LogOut className="inline-block w-5 h-5 mr-1" />
    //           Logout
    //         </button>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>

    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white flex flex-col">
      {/* Header stays fixed at the top */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">MyApp</h1>
      </div>

      {/* Scrollable navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>
          </li>

          <li>
            <button
              onClick={handleSkillsClick}
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
            >
              <Award className="w-5 h-5 mr-2" />
              Skills
            </button>
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
