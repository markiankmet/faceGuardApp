import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('An error occurred while logging in');
      }
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const register = async (
  email: string,
  password: string,
  confirmPassword: string,
  username: string,
) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, {
      email,
      password,
      confirmPassword,
      username,
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('An error occurred while registering');
      }
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
