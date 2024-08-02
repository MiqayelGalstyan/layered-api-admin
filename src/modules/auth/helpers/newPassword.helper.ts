import * as Yup from 'yup';
import { PASSWORD_REGEX } from '@modules/auth/constants';

export const newPasswordSchema = Yup.object().shape({
  new: Yup.string()
    .required('New Password is required')
    .matches(
      PASSWORD_REGEX,
      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.',
    ),
  newPasswordConfirmation: Yup.string()
    .required('Confirm New Password is required')
    .oneOf([Yup.ref('new')], 'Passwords must match'),
});
