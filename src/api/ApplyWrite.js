import { Axios } from './Axios';

export const getPageBaseInfo = (
  part,
  callbackFunction,
  callbackFunctionTwo,
) => {
  Axios.get(`/application/${part}`)
    .then((res) => {
      callbackFunction(res.data.data);
      callbackFunctionTwo(res.data.data.introduces);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getPartQuestionList = (part, callbackFunction) => {
  Axios.get(`/application/${part}`)
    .then((res) => {
      callbackFunction(res.data.data.introduces);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postFileData = (formData) => {
  Axios.post(`/application/file`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
