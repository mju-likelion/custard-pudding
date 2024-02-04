import * as yup from 'yup';

export const idValidationSchema = yup.object({
  id: yup
    .string()
    .matches(/^[a-zA-Z][0-9a-zA-Z]*$/, '형식에 맞는 아이디를 입력해주세요')
    .required('아이디를 입력해주세요')
    .min(6, '6글자 이상 12글자 이하로 입력하세요')
    .max(12, '6글자 이상 12글자 이하로 입력하세요'),
});
