import { ITokensPayload } from '@modules/auth';

export interface RegisterRequest {
  login: string;
  fullName: string;
  password: string;
}

export interface RegisterResponse extends ITokensPayload {}
