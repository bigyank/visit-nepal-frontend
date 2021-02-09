import axios from "axios";

const BASE_URL = "/api/admin";

export const getAllUser = async () => {
  const response = await axios.get(BASE_URL.concat("/users"), {
    withCredentials: true,
  });
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(
    BASE_URL.concat(`/users/${id}`),
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateUser = async (updatedData) => {
  const response = await axios.put(
    BASE_URL.concat(`/users/${updatedData.id}`),
    updatedData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
