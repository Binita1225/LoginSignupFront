import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData && userData.userName) {
      setUserName(userData.userName);
    }
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full z-10">
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Navbar */}
        <div className="bg-gray-800 text-white h-16 flex items-center px-4 fixed top-0 left-64 right-0 z-10">
          <NavBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-16 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
          <p className="mt-4">
            You can start exploring the app by clicking on the links below.
          </p>
          <ul className="mt-4">
            <li>
              <a href="/profile" className="text-blue-500 hover:underline">
                Go to Profile
              </a>
            </li>
            <li>
              <a href="/settings" className="text-blue-500 hover:underline">
                Go to Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="w-full bg-gray-800 text-white py-4 mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
