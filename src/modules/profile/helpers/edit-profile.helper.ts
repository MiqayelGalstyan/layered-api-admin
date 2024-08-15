import * as yup from 'yup';

export const EditProfileSchema = yup.object().shape({
    email: yup
        .string()
        .required('Field is required'),
    firstName: yup
        .string()
        .required('Field is required'),
    lastName: yup
        .string()
        .required('Field is required'),
    imagePath: yup
        .string()
        .optional(),
});
