import * as yup from 'yup';

export const writeValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[가-힣]{1,6}$/),
  major: yup.string().required('전공입력해'),
  // studentId: yup.string().required(),
  grade: yup
    .string()
    .required('학년입력해')
    .oneOf([1, 2, 3, 4, '휴학', '졸업유예']),
  email: yup.string().required().email(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^010-([0-9]{4})-([0-9]{4})$/),
});
