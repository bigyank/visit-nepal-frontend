import axios from "axios";

const BASE_URL = "/api/auth/login";

export const loginUser = async (credentials) => {
  const response = await axios.post(BASE_URL, credentials);
  return response.data;
};
