export interface SetPasswordRequest {
  token: string;
  new: string;
  newPasswordConfirmation: string;
}

export interface SetPasswordResponse {
  message: string;
}
