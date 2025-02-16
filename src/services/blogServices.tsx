import axios from "axios";

const API_URL = "https://localhost:7161/api/Blog";

export const getBlog = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBlogById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addBlog = async (blogData: any) => {
  const response = await axios.post(API_URL, blogData);
  return response.data;
};

export const updateBlog = async (id, blogData) => {
  const response = await axios.put(`${API_URL}/${id}`, blogData);
  return response.data;
};

export const deleteBlog = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
