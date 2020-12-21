import axios from "axios";

const BASE_URL = "/api/auth";

export const loginUser = async (credentials) => {
  const response = await axios.post(BASE_URL.concat("/login"), credentials);
  return response.data;
};

export const signupUser = async (credentials) => {
  const { email, password } = credentials;
  const response = await axios.post(BASE_URL.concat("/signup"), {
    email,
    password,
  });
  return response.data;
};

export const requestPassReset = async (credentials) => {
  const response = await axios.post(
    BASE_URL.concat("/password/recover/request"),
    credentials
  );
  return response.data;
};

export const confirmPassReset = async ({ id, credentials }) => {
  const response = await axios.post(
    BASE_URL.concat(`/password/recover/confirm/${id}`),
    credentials
  );
  return response.data;
};
