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
      console.log(err);
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
  selectedPart,
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
      console.log(err);
      const DetailStatusCode = err.response.data.statusCode;
      const statusCode = DetailStatusCode.substring(0, 3);
      if (statusCode === '500') {
        alert(
          '서버에 의도치 않은 에러가 발생했습니다. \n 공식 사이트 채널톡 혹은 인스타 DM으로 문의 부탁드립니다.',
        );
        setFilesFunction({});
      } else if (statusCode === '900' && selectedPart === 'WEB') {
        alert(
          '자기소개 페이지 파일이 누락되었거나, 파일의 형식이 잘못되었습니다.',
        );
        setFilesFunction({});
      } else if (statusCode === '900' && selectedPart === 'SERVER') {
        alert(
          'GitHub repository 링크가 누락되었거나, 링크의 형식이 잘못되었습니다.',
        );
      }
    });
};

export const postApplicationData = (
  data,
  navigateFunction,
  selectedPart,
  setIsLoading,
) => {
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
      const DetailStatusCode = err.response.data.statusCode;
      const statusCode = DetailStatusCode.substring(0, 3);
      if (statusCode === '400') {
        alert('유효하지 않은 값이 있거나, 누락된 항목이 있습니다.');
      } else if (statusCode === '500') {
        alert(
          '서버에 의도치 않은 에러가 발생했습니다. \n 공식 사이트 채널톡 혹은 인스타 DM으로 문의 부탁드립니다.',
        );
      } else if (statusCode === '900' && selectedPart === 'WEB') {
        alert(
          '자기소개 페이지 파일이 누락되었거나, 파일의 형식이 잘못되었습니다.',
        );
      } else if (statusCode === '900' && selectedPart === 'SERVER') {
        alert(
          'GitHub repository 링크가 누락되었거나, 링크의 형식이 잘못되었습니다.',
        );
      }
    });
};
