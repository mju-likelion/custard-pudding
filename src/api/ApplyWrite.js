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

export const postFileData = (formData, setFileLinkFunction) => {
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
          '서버에 의도치 않은 에러가 발생했습니다. 공식 사이트 채널톡 혹은 인스타 DM으로 문의 부탁드립니다.',
        );
      } else if (statusCode === '900') {
        alert(
          '자기소개 페이지 파일 혹은 GitHub 링크가 누락되었거나, 파일의 형식이 잘못되었습니다.',
        );
      }
    });
};

export const postApplicationData = (data, navigateFunction) => {
  Axios.post('/application', data, {
    headers: {
      'Content-Type': `application/json`,
    },
  })
    .then((res) => {
      console.log(res);
      navigateFunction('/complete');
      sessionStorage.removeItem('studentId');
    })
    .catch((err) => {
      console.log(err);
      const DetailStatusCode = err.response.data.statusCode;
      const statusCode = DetailStatusCode.substring(0, 3);
      if (statusCode === '400') {
        alert('유효하지 않은 값이 있거나, 누락된 항목이 있습니다.');
      } else if (statusCode === '500') {
        alert(
          '서버에 의도치 않은 에러가 발생했습니다. 공식 사이트 채널톡 혹은 인스타 DM으로 문의 부탁드립니다.',
        );
      } else if (statusCode === '900') {
        alert(
          '(사전 과제 포함) 필수 값이 누락되었거나, 형식에 맞지 않는 값이 있습니다.',
        );
      }
    });
};
