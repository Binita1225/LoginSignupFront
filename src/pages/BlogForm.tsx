import React from "react";
import { useEffect, useState } from "react";
import { addBlog, getBlogById, updateBlog } from "../services/blogServices";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  console.log("Current Blog ID:", id);

  useEffect(() => {
    if (id) {
      fetchBlogById(Number(id));
    }
  }, [id]);

  const fetchBlogById = async (blogId: number) => {
    try {
      const blog = await getBlogById(blogId);
      console.log("Fetched Blog Data:", blog); // Debugging line
      if (blog) {
        setTitle(blog.blogTitle);
        setContent(blog.blogContent);
      }
    } catch (error) {
      console.error("Error fetching blog", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure correct field names
    const blogData = {
      blogId: id, 
      blogTitle: title,
      blogContent: content,
    };

    try {
      if (id) {
        await updateBlog(Number(id), blogData);
        console.log("Blog updated successfully!");
      } else {
        await addBlog(blogData);
        console.log("Blog added successfully!");
      }

      navigate("/blog");
    } catch (error: any) {
      console.error("Error saving blog:", error.response?.data || error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {id ? "Edit Blog" : "Add Blog"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-100">Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100">Content</label>
          <textarea
            className="w-full p-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {id ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
