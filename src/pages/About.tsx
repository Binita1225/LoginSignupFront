import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const About = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - fixed on the left */}
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Navbar - fixed at the top */}
        <div className="fixed top-0 left-64 right-0 h-16 bg-gray-800 text-white flex items-center px-4">
          <NavBar />
        </div>

        <div className="mt-16 p-6">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <div className="flex space-x-6">
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg border border-gray-500 w-100 h-70 flex items-center justify-center">
              <p className="text-lg text-ellipsis">
                Hi, I’m a passionate developer with experience in building web
                applications. I specialize in React, ASP.NET Core, and modern
                web development.
              </p>
            </div>
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg border border-gray-500 w-100 h-70 flex items-center justify-center">
              <p className="text-lg text-gray-200">
                I love working on innovative projects and collaborating with
                others. In my free time, I enjoy gardening, working on personal
                projects, and learning new skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
