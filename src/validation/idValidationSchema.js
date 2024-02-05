import * as yup from 'yup';

export const idValidationSchema = yup.object({
  id: yup
    .string()
    .matches(/^[0-9]*$/, '형식에 맞는 학번을 입력해주세요')
    .required('학번을 입력해주세요')
    .min(8, '8글자로 입력해주세요')
    .max(8, '8글자로 입력해주세요'),
});
