import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import InfoInputBox from './InfoInputBox';
import Introduction from './Introduction';
import { writeValidationSchema } from '../../validation/writeValidationSchema';
import { getPageBaseInfo, getPartQuestionList } from '../../api/ApplyWrite';

const ApplyWrite = () => {
  // const EMPTY_ERROR = '※ 작성이 완료되지 않은 내용이 있습니다';
  // const WRONG_FORM_ERROR = '※ 형식에 맞지 않는 값이 있습니다';
  const [FormError, setFormError] = useState(false);
  const [selectedPart, setSelectedPart] = useState('web');
  const [baseInfo, setBaseInfo] = useState({});
  const [questionList, setQuestionList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(writeValidationSchema),
    mode: 'onChange',
    defaultValues: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
    },
  });

  // 전공, 개인정보 동의 문장 GET API
  useEffect(() => {
    console.log(selectedPart);

    getPageBaseInfo(selectedPart, setBaseInfo, setQuestionList);
  }, []);

  const isFormError = () => {
    if (Object.keys(errors).length > 0) {
      setFormError(true);
    } else if (Object.keys(errors).length === 0) {
      setFormError(false);
    }
  };
  const value = watch();

  const onSubmit = (data) => {
    // 제출하기 POST API
  };

  const handlePartClick = (part) => {
    setSelectedPart(part);
    // 질문 GET API
    getPartQuestionList(part, setQuestionList);
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
          <InfoHelperText $isError={FormError}>
            ※ 형식에 맞지 않는 값이 있습니다
          </InfoHelperText>
        </InfoContainer>
        <IntroduceContainer>
          <Title>자기소개서</Title>
          <Introduction
            register={register}
            value={value}
            questionList={questionList}
          ></Introduction>
        </IntroduceContainer>
        <HomeworkContainer>
          <Title>지원 과제</Title>
          <Question>자기소개 페이지를 첨부해주세요 (웹파트)</Question>
          <HomeworkInputBox>
            <HomeworkInput></HomeworkInput>
            <FileButton>파일 선택</FileButton>
          </HomeworkInputBox>
          <HomeworkHelperText>
            ※ 뭐시기 저시기 이런거 말할거에요
          </HomeworkHelperText>
        </HomeworkContainer>
      </AllContainer>
      <TestButton type="submit" onClick={isFormError}>
        제출하기
      </TestButton>
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
  margin-top: 15px;
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  visibility: ${({ $isError }) => ($isError ? 'visible' : 'hidden')};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 28px;
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
  height: 690px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 560px;
    height: 1067px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
    height: 882px;
  }
`;

const Question = styled.p`
  align-self: flex-start;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

const HomeworkInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 25px;
  }
`;
const HomeworkInput = styled.input`
  width: 240px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  border-radius: 8px;
  border: none;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 440px;
    height: 56px;
  }
`;
const FileButton = styled.button`
  width: 70px;
  height: 24px;
  font-size: 10px;
  font-weight: 300;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.WHITE_TXT};
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 16px;
    width: 110px;
    height: 36px;
  }
`;

const HomeworkHelperText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.DISABLE_BTN};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 10px;
    font-size: 14px;
  }
`;
const TestButton = styled.button`
  width: 200px;
  height: 100px;
  color: white;
  background-color: pink;
`;
export default ApplyWrite;
