import { api } from "../axios";
import { API_ENDPOINTS } from "../endpoints";
export const authService = {
  login: async (payload: { email: string; password: string }) => {
    const response = await api.post(API_ENDPOINTS.AUTH.LOGIN, payload);
    return response.data;
  },

  register: async (payload: {
    name: string;
    email: string;
    password: string;
  }) => {
    const response = await api.post(API_ENDPOINTS.AUTH.REGISTER, payload);
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get(API_ENDPOINTS.USER.ME);
    return response.data;
  },
};
