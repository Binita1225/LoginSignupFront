import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto w-full">
      <div className="flex justify-between px-20">
        <div className="flex flex-row space-x-16">
          <div className="flex flex-col space-y-2">
            <a href="/home" className=" hover:text-blue-400">
              Home
            </a>
            <a href="/skills" className=" hover:text-blue-400">
              Skills
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="/experience" className=" hover:text-blue-400">
              Experience
            </a>
            <a href="/project" className=" hover:text-blue-400">
              Project
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="/about" className=" hover:text-blue-400">
              About
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <a
            href="https://facebook.com"
            className="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://github.com"
            className="hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="text-center text-sm py-2 mt-4 border-t border-gray-600">
        &copy; 2025 Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
