import { IUser } from "@modules/profile/types";

export interface ITokensPayload {
  token: string;
  refreshToken: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  token: string;
  refreshToken: string;
}

export interface AuthPartial {
  token: string;
  refreshToken: string;
  isAuthenticated: boolean;
  user?: any;
}
