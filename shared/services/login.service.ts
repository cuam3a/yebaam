import api from '@/api/api';
// import { Profile, TokenResponse, User } from '@/interfaces';

export const useLoginService = () => {

  const useLogin = async (body:any) => {
    return await api.post('/api/users/login', body);
  };

  return {
    useLogin,
  };
};
