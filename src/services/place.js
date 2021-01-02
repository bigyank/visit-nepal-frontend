import axios from "axios";

const BASE_URL = "/api/places";

export const addPlace = async (placeInfo) => {
  const response = await axios.post(BASE_URL, placeInfo, {
    withCredentials: true,
  });
  return response.data;
};

export const getAllPlaces = async () => {
  const response = await axios.get(BASE_URL, {
    withCredentials: true,
  });
  return response.data;
};
