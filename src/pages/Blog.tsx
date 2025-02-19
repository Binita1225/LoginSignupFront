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
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getBlog();
      console.log("Fetched Blogs:", data); // Check the response
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
      fetchBlogs(); //refresh the lists of blogs
    }
  };

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
          <h1 className="text-3xl font-bold mb-4">Blog Page</h1>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/addBlog")}
          >
            Add Blog
          </button>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {blogs.map((blogs: any) => (
              <div
                key={blogs.blogId}
                className="border p-4 rounded-lg shadow-lg bg-gray"
              >
                <h2 className="text-xl font-bold mb-2">{blogs.blogTitle}</h2>
                <p className="text-gray-100 mb-4">{blogs.blogContent}</p>

                <div className="mt-4 flex justify-start">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2" // Added margin-right here
                    onClick={() => navigate(`/edit-blog/${blogs.blogId}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(blogs.blogId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
