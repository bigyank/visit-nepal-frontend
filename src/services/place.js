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

export const getPlaceDetail = async (_key, id) => {
  const response = await axios.get(BASE_URL.concat(`/${id}`), {
    withCredentials: true,
  });
  return response.data;
};

export const makeReview = async (data) => {
  const { id, review } = data;
  const response = await axios.post(BASE_URL.concat(`/${id}/reviews`), review, {
    withCredentials: true,
  });
  return response.data;
};
