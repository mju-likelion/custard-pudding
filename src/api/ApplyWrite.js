import { Axios } from './Axios';

export const getApplicationData = (
  part,
  setApplicationDataFunction,
  navigateFunction,
) => {
  Axios.get(`/application/${part}`)
    .then((res) => {
      setApplicationDataFunction(res.data.data);
      return res;
    })
    .catch((err) => {
      const DetailStatusCode = err.response.data.statusCode;
      const statusCode = DetailStatusCode.substring(0, 3);
      if (
        statusCode === '400' ||
        statusCode === '500' ||
        statusCode === '900'
      ) {
        alert(
          '서버에 의도치 않은 에러가 발생했습니다. \n 공식 사이트 채널톡 혹은 인스타 DM으로 문의 부탁드립니다.',
        );
      }
      navigateFunction('/');
    });
};

export const postFileData = (
  formData,
  setFileLinkFunction,
  setFilesFunction,
) => {
  Axios.post('/application/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => {
      setFileLinkFunction(res.data.data.url);
    })
    .catch((err) => {
      alert(err.response.data.message);
      setFilesFunction({});
    });
};

export const postApplicationData = (data, navigateFunction, setIsLoading) => {
  Axios.post('/application', data, {
    headers: {
      'Content-Type': `application/json`,
    },
  })
    .then((res) => {
      setIsLoading(false);
      navigateFunction('/complete');
      sessionStorage.removeItem('studentId');
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
