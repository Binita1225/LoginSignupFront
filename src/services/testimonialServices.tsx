import axios from "axios";
import Testimonial from "../pages/Testimonial";

const API_URL = "https://localhost:7161/api/Testimonial";

export const getTestimonial = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getTestimonialById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addTestimonial = async (TestimonialData: any) => {
  const response = await axios.post(API_URL, TestimonialData);
  return response.data;
};

export const updateTestimonial = async (id, TestimonialData) => {
  const response = await axios.put(`${API_URL}/${id}`, TestimonialData);
  return response.data;
};

export const deleteTestimonial = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
