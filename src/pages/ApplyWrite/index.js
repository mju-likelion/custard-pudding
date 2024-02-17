import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InfoInputBox from './InfoInputBox';
import Introduction from './Introduction';
import { writeValidationSchema } from '../../validation/writeValidationSchema';
import { getPageBaseInfo, getPartQuestionList } from '../../api/ApplyWrite';
import HomeworkBox from './HomeworkBox';
import PersonalAgreeBox from './PersonalAgreeBox';

const ApplyWrite = () => {
  // const EMPTY_ERROR = '※ 작성이 완료되지 않은 내용이 있습니다';
  // const WRONG_FORM_ERROR = '※ 형식에 맞지 않는 값이 있습니다';
  const [FormError, setFormError] = useState(false);
  const [selectedPart, setSelectedPart] = useState('web');
  const [baseInfo, setBaseInfo] = useState({});
  const [questionList, setQuestionList] = useState([]);
  const [taskFile, setTaskFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(writeValidationSchema),
    mode: 'onChange',
    defaultValues: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
    },
  });

  // 전공, 개인정보 동의 문장 GET API
  useEffect(() => {
    getPageBaseInfo(selectedPart, setBaseInfo, setQuestionList);
  }, []);

  const isFormError = () => {
    if (Object.keys(errors).length > 0) {
      setFormError(true);
    } else if (Object.keys(errors).length === 0) {
      setFormError(false);
    }
  };

  useEffect(() => {
    isFormError();
  }, [errors]);
  const value = watch();

  const onSubmit = () => {
    // 제출하기 POST API
  };

  const handlePartClick = (part) => {
    setSelectedPart(part);
    // 질문 GET API
    getPartQuestionList(part, setQuestionList);
    console.log(baseInfo);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AllContainer>
        <InfoContainer>
          <Title>지원자 정보</Title>
          <InfoInputBox
            errors={errors}
            register={register}
            selectedPart={selectedPart}
            handlePartClick={handlePartClick}
          />
        </InfoContainer>
        <IntroduceContainer>
          <Title>자기소개서</Title>
          <Introduction
            register={register}
            value={value}
            questionList={questionList}
          />
        </IntroduceContainer>
        <HomeworkContainer>
          <Title>지원 과제</Title>
          <HomeworkBox
            selectedPart={selectedPart}
            setValue={setValue}
            register={register}
          />
        </HomeworkContainer>
        <AgreeContainer>
          <Title>참고 사항</Title>
          {/* 이게 좋은 로직일까? */}
          {baseInfo.agreements &&
            baseInfo.agreements.map((item) => (
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
        <TestButton type="submit" onClick={isFormError}>
          제출하기
        </TestButton>
      </AllContainer>
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
const TestButton = styled.button`
  width: 200px;
  height: 100px;
  margin: 0 auto;
  color: white;
  background-color: pink;
`;
export default ApplyWrite;
