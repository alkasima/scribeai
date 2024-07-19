import apiService from './apiService';

interface ApiResponse {
  accessToken: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}

export const login = async (email: string, password: string): Promise<ApiResponse> => {
  try {
    const response = await apiService.post<ApiResponse>('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || new Error('Failed to login');
  }
};


export const register = async (firstName: string, lastName: string, email: string, password: string): Promise<ApiResponse> => {
  try {
    const response = await apiService.post<ApiResponse>('/auth/register', {firstName, lastName, email, password});
    return response.data;
  }catch(error: any){
    throw error.response?.data || new Error('Failed to register');
  }
}