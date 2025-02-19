import axios from "axios";

const API_URL = "https://localhost:7161/api/ContactForm";

export const getContactForm = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addContactForm = async (formData: any) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

