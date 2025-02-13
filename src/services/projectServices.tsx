import axios from "axios";

const API_URL = "https://localhost:7161/api/ProjectApi";

export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addProjects = async (projectData: any) => {
  const response = await axios.post(API_URL, projectData);
  return response.data;
};

export const updateProjects = async (id, projectData) => {
  const response = await axios.put(`${API_URL}/${id}`, projectData);
  return response.data;
};

export const deleteprojects = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
