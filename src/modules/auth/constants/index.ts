export enum AuthStorageKeys {
  USER = 'user',
  ACCESS_TOKEN = 'token',
  REFRESH_TOKEN = 'refreshToken',
  REMEMBER_ME = 'rememberMe',
}

export const NEW_PASSWORD_TOKEN_PARAM = 'token';

export enum QueryParams {
  NEW_PASSWORD_TOKEN = 'token',
}

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
