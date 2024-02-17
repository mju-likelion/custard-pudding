import * as yup from 'yup';

export const writeValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[가-힣]{1,6}$/),
  major: yup.string().required(),
  // studentId: yup.string().required(),
  grade: yup
    .string()
    .required()
    .oneOf(['1', '2', '3', '4', '휴학', '졸업유예']),
  email: yup.string().required().email(),
  phoneNumber: yup
    .string()
    .required()
    .matches(/^010-([0-9]{4})-([0-9]{4})$/),

  question1: yup.string().required(),
  question2: yup.string().required(),
  question3: yup.string().required(),
  question4: yup.string().required(),
  question5: yup.string().required(),

  // agree1: yup.boolean().required(),
  // agree2: yup.boolean().required(),
  // agree3: yup.boolean().required(),
});
