import * as yup from 'yup';
import { PASSWORD_REGEX } from '../constants';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Field is required'),
  password: yup
    .string()
    .required('Field is required')
    .matches(
      PASSWORD_REGEX,
      'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.',
    ),
});
