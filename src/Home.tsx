import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import About from "./About";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData && userData.userName) {
      setUserName(userData.userName);
    }
  }, []);

  return (
    // <div className="flex">
    //   {/* Navbar at the top */}
    //   <Navbar />

    //   {/* Sidebar on the left */}
    //   <div className="w-64 h-screen bg-gray-800 text-white fixed top-16 left-0">
    //     <Sidebar />
    //   </div>

    //   {/* Page Content */}
    //   <div className="flex-1  mt-16">
    //     <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
    //     <p className="mt-4">This is the home page of the app.</p>
    //     <p className="mt-4">
    //       You can start exploring the app by clicking on the links below.
    //     </p>
    //     <ul className="mt-4">
    //       <li>
    //         <a href="/profile" className="text-blue-500 hover:underline">
    //           Go to Profile
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/settings" className="text-blue-500 hover:underline">
    //           Go to Settings
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 h-16 bg-gray-800 text-white flex items-center px-4">
          <Navbar />
          <Skills />
          <About />
        </div>

        <div className="mt-16 p-6">
          <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
          <p className="mt-4">This is the home page of the app.</p>
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
      </div>
    </div>
  );
};

export default Home;
