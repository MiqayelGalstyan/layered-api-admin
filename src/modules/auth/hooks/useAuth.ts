import { useLazyGetProfileQuery } from '@modules/profile';
import { useLoginMutation } from '../api/auth.api';
import { setTokens, setUser, clear } from '../store/auth.slice';
import { LoginRequest } from '../types';
import { useAppDispatch } from '@app/store';
import { ITokensPayload } from '../types/auth.type';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [loginRequest] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const login = async (payload: LoginRequest) => {
    try {
      const data = await loginRequest({ ...payload }).unwrap();
      console.log('Login successful:', data);
      await getProfileAfterLogin(data);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      dispatch(clear());
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const fetchUser = async () => {
    try {
      const userProfileData = await getProfile().unwrap();
      dispatch(setUser(userProfileData));
      console.log('User profile fetched successfully');
    } catch (error) {
      console.error('Fetching user profile failed:', error);
      throw error;
    }
  };

  const getProfileAfterLogin = async (tokens: ITokensPayload) => {
    console.log(tokens, 'tokens')
    dispatch(setTokens(tokens));
    await fetchUser();
  };

  return {
    login,
    logout,
    fetchUser,
  };
};