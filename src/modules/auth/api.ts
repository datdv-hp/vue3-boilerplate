import axiosInstance, { ApiService } from '@/plugins/axios';

class AuthApiService extends ApiService {}
export const authApiService = new AuthApiService({ baseUrl: '/auth' }, axiosInstance);
