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

const Apply = () => {
  const [isExist, setIsExist] = useState(undefined);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const startDay = new Date('2024-03-01 00:00:00').getTime();
  const lastDay = new Date('2024-03-07 23:59:59').getTime();

  const handleFormSubmit = async (data) => {
    setValue(data.id);

    const today = new Date().getTime();
    if (startDay <= today && today <= lastDay) {
      try {
        const response = await Axios.post('/apply', {
          studentId: data.id,
        });
        const statusCode = response.data.statusCode;
        if (statusCode === '201') {
          sessionStorage.setItem('studentId', data.id);
          navigate('/write');
        }
      } catch (error) {
        const statusCode = error.response.data.statusCode;
        if (statusCode === '4090') {
          setIsExist(true);
          alert('이미 지원 이력이 존재합니다.');
        } else if (statusCode === '400') {
          alert('오류가 발생했습니다.');
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
      {isExist === undefined && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <CardLanyard
            width={'250px'}
            height={'318px'}
            pcWidth={'544px'}
            pcHeight={'358px'}
          >
            <ContentsWrapper>
              <SubTitle>지원하기</SubTitle>
              <InputWraaper>
                <Input
                  inputSize={inputSizeValue}
                  captionSize={captionSizeValue}
                  messageSize={messageSizeValue}
                  hookFormRegister={register}
                  messageErrors={errors}
                />
              </InputWraaper>
              <Button>지원하기</Button>
            </ContentsWrapper>
          </CardLanyard>
        </form>
      )}
      {isExist && <CheckCard status="rejected" />}
      {isExist && <CheckCard status="rejected" value={value} />}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px - 70px);
  width: 100%;
`;
const InputWraaper = styled.div`
  margin: 34px 0 58px 0;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 18px 0 48px 0;
  }
`;
const ContentsWrapper = styled.div`
  margin: 42px 16px 19px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 85px 54px 24px 52px;
  }
`;
const Button = styled(SmallButton)`
  /* margin-top: 28px; */
`;

export default Apply;
