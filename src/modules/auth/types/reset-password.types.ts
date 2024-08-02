export interface ResetPasswordRequest {
  email: string;
  redirectUri: string;
}

export interface ResetPasswordResponse {
  message: string;
}
