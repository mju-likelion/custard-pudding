import { Axios } from './Axios';

export const getApplicationData = (part, setApplicationDataFunction) => {
  Axios.get(`/application/${part}`)
    .then((res) => {
      setApplicationDataFunction(res.data.data);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postFileData = (formData) => {
  Axios.post('/application/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const postApplicationData = (data) => {
  Axios.post('/application', data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
