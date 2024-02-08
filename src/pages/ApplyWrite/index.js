import styled from 'styled-components';
import UserInfoInput from '../../components/writePage/UserInfoInput';
import { INPUT_LABEL_LIST } from './InputLabelList';
import ApplyAnswer from '../../components/writePage/ApplyAnswer';
import { useForm } from 'react-hook-form';
import { writeValidationSchema } from '../../validation/writeValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const ApplyWrite = () => {
  // const EMPTY_ERROR = '※ 작성이 완료되지 않은 내용이 있습니다';
  // const WRONG_FORM_ERROR = '※ 형식에 맞지 않는 값이 있습니다';

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // setFocus,
  } = useForm({
    resolver: yupResolver(writeValidationSchema),
    mode: 'onChange',
  });

  const value = watch();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AllContainer>
        <InfoContainer>
          <Title>지원자 정보</Title>
          <InfoInputBox>
            <InnerInputBox>
              {INPUT_LABEL_LIST.left.map((item) => (
                <UserInfoInput
                  key={item.id}
                  label={item.label}
                  name={item.name}
                  isDisabled={item.isDisabled}
                  register={register}
                  errors={errors}
                  value={value}
                />
              ))}
            </InnerInputBox>
            <HorizontalLine />
            <InnerInputBox>
              {INPUT_LABEL_LIST.right.map((item) => (
                <UserInfoInput
                  key={item.id}
                  label={item.label}
                  name={item.name}
                  register={register}
                  errors={errors}
                  placeholder={item.placeholder}
                />
              ))}
              <ApplyPartBox>
                <PartLabel>지원파트</PartLabel>
                <PartBtnBox>
                  <PartBtn>웹</PartBtn>
                  <PartBtn>서버</PartBtn>
                </PartBtnBox>
              </ApplyPartBox>
            </InnerInputBox>
          </InfoInputBox>
          <InfoHelperText $isError={errors.name ? true : false}>
            ※ 형식에 맞지 않는 값이 있습니다
          </InfoHelperText>
        </InfoContainer>
        {/* 테스트 버튼 */}
        <TestButton type="submit">제출하기</TestButton>
        <IntroduceContainer>
          <Title>자기소개서</Title>
          {/* data 따로 관리하는 파일에서 get 요청 후 렌더링 + map 활용 */}
          {[1, 2, 3, 4, 5].map((item, idx) => (
            <>
              <Question key={idx}>
                {item}. 뭐시기 저시기 {item}번 문항입니다.
              </Question>
              <ApplyAnswer />
            </>
          ))}
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
const InfoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #939393;
  border-radius: 15px;
  padding: 35px 52px;
  width: 330px;
  height: 367px;
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 65px 105px;
    width: 560px;
    height: 656px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 68px 85px;
    width: 972px;
    height: 388px;
  }
`;
const InnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 28px;
  }
`;

const ApplyPartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 17px;
  }
`;
const PartLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;
const PartBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PartBtn = styled.button`
  width: 74px;
  height: 26px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 116px;
    height: 42px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 130px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
`;
const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  margin: auto 0;
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
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
