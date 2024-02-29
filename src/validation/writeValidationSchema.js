import * as yup from 'yup';

export const writeValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[가-힣]{1,6}$/),
  majors: yup.string().required(),
  grade: yup
    .string()
    .required()
    .oneOf(['1', '2', '3', '4', '휴학', '졸업유예']),
  email: yup
    .string()
    .required('이메일은 필수로 작성해주세요.')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      '이메일 형식으로 작성해주세요.',
    ),
  phoneNumber: yup
    .string()
    .required('전화번호는 필수로 작성해주세요.')
    .matches(
      /^010-([0-9]{4})-([0-9]{4})$/,
      "'010-1234-5678' 형태로 작성해주세요.",
    ),

  question1: yup.string().required(),
  question2: yup.string().required(),
  question3: yup.string().required(),
  question4: yup.string().required(),
  question5: yup.string().required(),

  agree1: yup.boolean().required(),
  agree2: yup.boolean().required(),
});
