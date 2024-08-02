export interface IUpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

export interface IUpdatePasswordResponse {
  message: string;
}
