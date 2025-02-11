import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full z-10">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64 flex flex-col">
        <div className="bg-gray-800 text-white h-16 flex items-center px-4 fixed top-0 left-64 right-0 z-10">
          <NavBar />
        </div>

        <div className="flex-1 mt-16 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <div className="flex space-x-6">
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg border border-gray-500 w-1/2 h-70 flex items-center justify-center">
              <p className="text-lg text-ellipsis">
                Hi, I’m a passionate developer with experience in building web
                applications. I specialize in React, ASP.NET Core, and modern
                web development.
              </p>
            </div>
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg border border-gray-500 w-1/2 h-70 flex items-center justify-center">
              <p className="text-lg text-gray-200">
                I love working on innovative projects and collaborating with
                others. In my free time, I enjoy gardening, working on personal
                projects, and learning new skills.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-800 text-white py-4 mt-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
