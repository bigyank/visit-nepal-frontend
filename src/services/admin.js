import axios from "axios";

const BASE_URL = "/api/admin";

export const getAllUser = async () => {
  const response = await axios.get(BASE_URL.concat("/users"), {
    withCredentials: true,
  });
  return response.data;
};
