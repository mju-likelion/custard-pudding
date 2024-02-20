import * as yup from 'yup';

export const idValidationSchema = yup.object({
  id: yup
    .string()
    .matches(/^[6][0][0-9]{6}$/, '형식에 맞는 학번을 입력해주세요')
    .required('학번을 입력해주세요'),
});
