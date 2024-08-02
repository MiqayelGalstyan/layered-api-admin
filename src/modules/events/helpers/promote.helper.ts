import * as yup from 'yup';

export const PromoteSchema = yup.object().shape({
    state: yup
        .object()
        .nullable(),
    event: yup
        .string()
        .required('Field is required')
});
