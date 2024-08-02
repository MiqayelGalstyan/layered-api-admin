import { createApi } from '@reduxjs/toolkit/query/react';
import { buildBaseQuery } from '@app/api/buildBaseQuery';
import {
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ValidateTokenRequest,
  ValidateTokenResponse,
  SetPasswordResponse,
  SetPasswordRequest,
  LoginRequest,
  IUpdatePasswordResponse,
  IUpdatePasswordRequest,
} from '@modules/auth/types';
import { ITokensPayload } from '../types/auth.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: buildBaseQuery(),
  endpoints: builder => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: credentials => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation<ITokensPayload, LoginRequest>({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<
      ResetPasswordResponse,
      ResetPasswordRequest
    >({
      query: body => ({
        url: '/reset-password',
        method: 'POST',
        body,
      }),
    }),
    refreshToken: builder.mutation<RefreshTokenResponse, RefreshTokenRequest>({
      query: () => ({
        url: '/refresh-token',
        method: 'POST',
      }),
    }),
    validateToken: builder.mutation<
      ValidateTokenResponse,
      ValidateTokenRequest
    >({
      query: token => ({
        url: '/validate-reset-token',
        method: 'POST',
        body: token,
      }),
    }),
    setNewPassword: builder.mutation<SetPasswordResponse, SetPasswordRequest>({
      query: body => ({
        url: '/set-password',
        method: 'POST',
        body,
      }),
    }),
    updatePassword: builder.mutation<
      IUpdatePasswordResponse,
      IUpdatePasswordRequest
    >({
      query: passwords => ({
        url: '/password',
        method: 'PUT',
        body: passwords,
      }),
    }),
  }),
});

export const {
  useUpdatePasswordMutation,
  useLoginMutation,
  useSetNewPasswordMutation,
  useResetPasswordMutation,
  useValidateTokenMutation,
} = authApi;
