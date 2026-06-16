import api from "@/lib/axios";
import type { User } from "#/types";

export const registerUser = async ({ name, email, password }: User ) => {
  try {
    const res = await api.post('/auth/register', { name, email, password });

    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || 'Failed to register';
    throw new Error(message);
  }
};

export const loginUser = async (credentials: User ) => {
  try {
    const res = await api.post('/auth/login', credentials);

    return res.data;
  } catch (err: any) {
    const message = err.response?.data?.message || 'Failed to login';
    throw new Error(message);
  }
};
