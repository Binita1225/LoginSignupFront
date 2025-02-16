import React, { useState, useEffect } from "react";
import { Plus, Info, Edit, Trash } from "lucide-react";
import {
  getBlog,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
} from "../services/blogServices";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

const Blog = () => {
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
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
