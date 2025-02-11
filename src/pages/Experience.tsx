import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Experience = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      <div className="flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 h-16 bg-gray-800 text-white flex items-center px-4">
          <NavBar />
        </div>

        <div className="mt-16 p-6">
          <h1 className="text-3xl font-bold mb-4">Experience</h1>
          <div className="space-y-6">
            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg border border-gray-500">
              <h2 className="text-xl font-bold mb-2">Web Developer Intern</h2>
              <p className="text-gray-300 mb-2">
                ABC Tech Solutions | Jan 2023 - Jun 2023
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  Developed responsive web applications using React and ASP.NET
                  Core.
                </li>
                <li>
                  Collaborated with the design team to implement modern UI/UX
                  principles.
                </li>
                <li>
                  Worked with REST APIs and optimized database queries for
                  performance.
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 text-gray-200 p-6 rounded-lg border border-gray-500">
              <h2 className="text-xl font-bold mb-2">
                Freelance Web Developer
              </h2>
              <p className="text-gray-300 mb-2">
                Self-employed | Jul 2023 - Present
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>
                  Built custom web solutions for small businesses and startups.
                </li>
                <li>
                  Specialized in full-stack development using React, PHP, and
                  MySQL.
                </li>
                <li>
                  Provided ongoing support and maintenance for client projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
