import { PASSWORD_REGEX } from '@modules/auth/constants';
import * as yup from 'yup';

export const NewUserSchema = yup.object().shape({
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
    isRemembered: yup
        .boolean()
        .required(),
});
