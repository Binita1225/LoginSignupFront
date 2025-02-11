import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData?.userName) {
      setLoggedInUser(userData.userName);
    }
  }, []);

  return (
    <div className="bg-gray-800 text-white h-16 flex items-center justify-between px-4">
      {/* Centered Search Bar */}
      <div className="flex-1 flex justify-center ml-60">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      {/* User Welcome Message */}
      <div className="ml-90">
        {loggedInUser && <span className="text-white">{loggedInUser}</span>}
      </div>
    </div>
  );
};

export default NavBar;
