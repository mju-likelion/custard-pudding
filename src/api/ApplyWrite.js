import { Axios } from './Axios';

export const getPageBaseInfo = (
  part,
  callbackFunction,
  callbackFunctionTwo,
) => {
  Axios.get(`/application/${part}`)
    .then((res) => {
      console.log(res.data.data);
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
      console.log(res.data.data.introduces);
      callbackFunction(res.data.data.introduces);
    })
    .catch((err) => {
      console.log(err);
    });
};
