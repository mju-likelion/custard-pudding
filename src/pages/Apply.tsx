import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Axios } from '../api/Axios';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';
import { idValidationSchema } from '../validation/idValidationSchema';
import CheckCard from '../components/checkPage/CheckCard';
import axios, { AxiosError } from 'axios';

interface StudentData {
  id: string;
}

enum STATUS_CODE {
  'SUCCESS' = '201',
  'SERVER_ERROR' = '401',
  'ALREADY_APPLIED' = '4090',
}

const Apply = () => {
  const [hasAlreadyApplied, setHasAlreadyApplied] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const startDay = new Date('2024-03-01 00:00:00').getTime();
  const lastDay = new Date('2024-03-07 23:59:59').getTime();

  const handleFormSubmit = async (data: StudentData) => {
    setValue(data.id);

    const today = new Date().getTime();
    if (startDay <= today && today <= lastDay) {
      try {
        setIsLoading(true);
        const response = await Axios.post('/apply', {
          studentId: data.id,
        });
        const statusCode: STATUS_CODE | undefined = response.data.statusCode;
        if (statusCode === STATUS_CODE.SUCCESS) {
          sessionStorage.setItem('studentId', data.id);
          navigate('/write');
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const statusCode: STATUS_CODE | undefined =
            error.response?.data.statusCode;
          if (statusCode === STATUS_CODE.ALREADY_APPLIED) {
            setHasAlreadyApplied(true);
          } else if (statusCode === STATUS_CODE.SERVER_ERROR) {
            alert(error.response?.data.message);
          } else {
            alert(
              '서버에 이슈가 있습니다. 문제가 지속될 경우 메인 홈페이지의 채팅을 통해 관리자에게 문의해주세요.',
            );
          }
          setIsLoading(false);
        }
      }
    } else {
      alert(
        '지원 기간이 아닙니다\n지원 기간: 2024-03-01 00:00:00 ~ 2024-03-07 23:59:59',
      );
    }
  };
  const inputSizeValue = {
    width: '220px',
    height: '28px',
    pcWidth: '438px',
    pcHeight: '56px',
  };
  const captionSizeValue = {
    width: '220px',
    height: '12px',
    pcWidth: '438px',
    pcHeight: '24px',
  };
  const messageSizeValue = {
    width: '220px',
    height: '8px',
    pcWidth: '438px',
    pcHeight: '20px',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(idValidationSchema) });

  return (
    <Container>
      {!hasAlreadyApplied && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <CardLanyard
            width={'250px'}
            height={'318px'}
            $pcWidth={'544px'}
            $pcHeight={'358px'}
          >
            <ContentsWrapper>
              <SubTitle>지원하기</SubTitle>
              <InputWrapper>
                <Input
                  inputSize={inputSizeValue}
                  captionSize={captionSizeValue}
                  messageSize={messageSizeValue}
                  hookFormRegister={register}
                  messageErrors={errors}
                />
              </InputWrapper>
              <SmallButton disabled={isLoading} type="submit">
                {isLoading ? '로딩중' : '지원하기'}
              </SmallButton>
            </ContentsWrapper>
          </CardLanyard>
        </form>
      )}
      {hasAlreadyApplied && <CheckCard status="rejected" value={value} />}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px - 56px);
  @media ${({ theme }) => theme.size.tablet} {
    height: calc(100vh - 100px - 70px);
  }
`;
const InputWrapper = styled.div`
  margin: 34px 0 60px 0;

  @media ${({ theme }) => theme.size.desktop} {
    margin: 18px 0 40px 0;
  }
`;
const ContentsWrapper = styled.div`
  margin: 42px 16px 19px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.size.desktop} {
    margin: 85px 54px 24px 52px;
  }
`;

export default Apply;
