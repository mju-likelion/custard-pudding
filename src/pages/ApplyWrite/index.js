import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InfoInputBox from '../../components/writePage/InfoInputBox';
import Introduction from '../../components/writePage/Introduction';
import HomeworkBox from '../../components/writePage/HomeworkBox';
import PersonalAgreeBox from '../../components/writePage/PersonalAgreeBox';
import BigButton from '../../components/Button/BigButton';
import { DEFAULT_VALUES } from './data/HookFormDefaultData';
import { writeValidationSchema } from '../../validation/writeValidationSchema';
import {
  getApplicationData,
  postFileData,
  postApplicationData,
} from '../../api/ApplyWrite';

const ApplyWrite = () => {
  // const EMPTY_ERROR = '※ 작성이 완료되지 않은 내용이 있습니다';
  // const WRONG_FORM_ERROR = '※ 형식에 맞지 않는 값이 있습니다';
  const [FormError, setFormError] = useState(false);
  const [selectedPart, setSelectedPart] = useState('WEB');
  const [applicationData, setApplicationData] = useState({});
  const [files, setFiles] = useState({});
  const [fileLink, setFileLink] = useState('');
  const [studentIdValue, setStudentIdValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(writeValidationSchema),
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  const value = watch();

  useEffect(() => {
    sessionStorage.setItem('test', '60193292');
    setStudentIdValue(sessionStorage.getItem('test'));
    getApplicationData(selectedPart, setApplicationData);
  }, []);

  const handlePartClick = (part) => {
    setSelectedPart(part);
    getApplicationData(part, setApplicationData);
  };

  const isFormError = () => {
    if (Object.keys(errors).length > 0) {
      setFormError(true);
    } else if (Object.keys(errors).length === 0) {
      setFormError(false);
    }
  };

  const onSubmit = () => {
    if (Object.keys(files).length > 0) {
      const formData = new FormData();
      formData.append('file', files[0]);
      postFileData(formData, setFileLink);
    }

    const findMajorId = (majors, majorName) => {
      for (let i = 0; i < majors.length; i++) {
        if (majors[i].name === majorName) {
          return majors[i].id;
        }
      }
      return null;
    };

    const introducesObject = {};
    applicationData.introduces.forEach((item, idx) => {
      introducesObject[item.id] = value['question' + (idx + 1)];
    });
    const agreementObject = {};
    applicationData.agreements.forEach((item, idx) => {
      agreementObject[item.id] = value['agree' + (idx + 1)];
    });
    const selectedMajorId = findMajorId(applicationData.majors, value.majors);

    const submitFormData = {
      studentId: studentIdValue,
      name: value.name,
      majorId: selectedMajorId,
      phoneNumber: value.phoneNumber,
      email: value.email,
      grade: value.grade,
      part: selectedPart,
      link: selectedPart === 'SERVER' ? value.link : fileLink,
      introduces: introducesObject,
      agreements: agreementObject,
    };
    postApplicationData(submitFormData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {applicationData && (
        <AllContainer>
          <InfoContainer>
            <Title>지원자 정보</Title>
            <InfoInputBox
              errors={errors}
              register={register}
              selectedPart={selectedPart}
              handlePartClick={handlePartClick}
              setValue={setValue}
              getValues={getValues}
              majorData={applicationData.majors}
              studentIdValue={studentIdValue}
            />
          </InfoContainer>
          <IntroduceContainer>
            <Title>자기소개서</Title>
            <Introduction
              register={register}
              value={value}
              questionList={applicationData.introduces}
            />
          </IntroduceContainer>
          <HomeworkContainer>
            <Title>지원 과제</Title>
            <HomeworkBox
              selectedPart={selectedPart}
              register={register}
              files={files}
              setFiles={setFiles}
            />
          </HomeworkContainer>
          <AgreeContainer>
            <Title>참고 사항</Title>
            {/* 이게 좋은 로직일까? */}
            {applicationData.agreements &&
              applicationData.agreements.map((item) => (
                <PersonalAgreeBox
                  key={item.id}
                  text={item.content}
                  sequence={item.sequence}
                  register={register}
                />
              ))}
          </AgreeContainer>
          <InfoHelperText $isError={!isValid}>
            ※ 작성이 완료되지 않았거나, 형식에 맞지 않는 값이 있습니다.
          </InfoHelperText>
          {value.agree1 && value.agree2 && value.agree3 ? (
            <BigButton type="submit" onClick={isFormError} $isActive={true}>
              제출하기
            </BigButton>
          ) : (
            <BigButton disabled={true}>제출하기</BigButton>
          )}
        </AllContainer>
      )}
    </form>
  );
};

const AllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin: 175px 0 200px 0;
  }
`;
const Title = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.MAIN_PINK};
  font-size: 20px;
  font-weight: 700;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;
const InfoHelperText = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  visibility: ${({ $isError }) => ($isError ? 'visible' : 'hidden')};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 28px;
    font-size: 20px;
  }
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 90px;
  }
`;
const HomeworkContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  margin-bottom: 110px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 560px;
    margin-bottom: 200px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
  }
`;

const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 90px;
  }
`;

export default ApplyWrite;
