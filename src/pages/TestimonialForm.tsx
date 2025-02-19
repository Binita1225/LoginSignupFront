import React from "react";
import { useEffect, useState } from "react";
import {
  addTestimonial,
  getTestimonialById,
  updateTestimonial,
} from "../services/testimonialServices";
import { useNavigate, useParams } from "react-router-dom";

const TestimonialForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { id } = useParams<{ id }>();

  useEffect(() => {
    if (id) fetchTestimonial();
  }, [id]);

  const fetchTestimonial = async () => {
    try {
      const testimonial = await getTestimonialById(Number(id));
      setName(testimonial.name);
      setMessage(testimonial.message);
    } catch (error) {
      console.error("Error fetching testimonial", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const testimonialData = { id, name, message };

    try {
      if (id) {
        await updateTestimonial(Number(id), testimonialData);
      } else {
        await addTestimonial(testimonialData);
      }
      navigate("/testimonial");
    } catch (error) {
      console.error("Error saving testimonials", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {id ? "Edit Testimonials" : "Add Testimonials"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-100">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

export default TestimonialForm;
