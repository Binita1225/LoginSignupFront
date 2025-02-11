import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col">
        <div className="fixed top-0 left-64 right-0 h-16 bg-gray-800 text-white flex items-center px-4">
          <NavBar />
        </div>

        {/* Main Section */}
        <div className="flex-1 mt-16 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold">Welcome to the Home Page!</h1>
          <p className="mt-4">
            You can start exploring the app by clicking on the links below.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/profile" className="text-blue-500 hover:underline">
                Go to Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-blue-500 hover:underline">
                Go to Settings
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
