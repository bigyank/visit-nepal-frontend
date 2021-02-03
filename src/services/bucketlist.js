import axios from "axios";

const BASE_URL = "/api/buckets";

export const addPlaceToBucketList = async (id) => {
  const response = await axios.post(
    BASE_URL.concat(`/${id}`),
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const removePlaceFromBucketList = async (id) => {
  const response = await axios.delete(
    BASE_URL.concat(`/${id}`),
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
