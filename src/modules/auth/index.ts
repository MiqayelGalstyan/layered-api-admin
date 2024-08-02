import { authSlice, clear, setTokens, setUser } from './store/auth.slice';
import LoginContainer from './components/LoginContainer';

import { useAuth } from './hooks/useAuth';
import { ITokensPayload } from './types/auth.type';

export type { ITokensPayload };

export {
  authSlice,
  useAuth,
  clear,
  setTokens,
  setUser,
  LoginContainer,
};
