import React, { useEffect, useState } from "react";
import {
  getTestimonial,
  getTestimonialById,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../services/testimonialServices";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const data = await getTestimonial();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this testimonial")) {
      await deleteTestimonial(id);
      fetchTestimonials();
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
          <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => navigate("/add-testimonial")}
          >
            Add Testimonials
          </button>
          <div className="space-y-4">
            {testimonials.map((testimonials: any) => (
              <div
                key={testimonials.id}
                className="border p-4 rounded shadow-md"
              >
                <h2 className="text-xl font-bold">{testimonials.name}</h2>
                <p>{testimonials.message}</p>

                <div className="mt-4">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() =>
                      navigate(`/edit-testimonial/${testimonials.id}`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleDelete(testimonials.id)}
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

export default Testimonial;
