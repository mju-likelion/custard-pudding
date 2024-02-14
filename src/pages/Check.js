import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Axios } from '../api/Axios';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';
import CheckCard from '../components/checkPage/CheckCard';
import { idValidationSchema } from '../validation/idValidationSchema';
import { useState } from 'react';

const Check = () => {
  const [isChecked, setIsChecked] = useState(undefined);

  const handleFormSubmit = async (data) => {
    try {
      const response = await Axios.get(`/apply/exist/${data.id}`);
      const isExist = response?.data?.data?.isExist;
      setIsChecked(isExist);
    } catch (error) {
      console.log(error);
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
      {isChecked === undefined ? (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <CardLanyard
            width={'250px'}
            height={'318px'}
            pcWidth={'544px'}
            pcHeight={'358px'}
          >
            <ContentsWrapper>
              <SubTitle>지원 확인하기</SubTitle>
              <InputWraaper>
                <Input
                  inputSize={inputSizeValue}
                  captionSize={captionSizeValue}
                  messageSize={messageSizeValue}
                  hookFormRegister={register}
                  messageErrors={errors}
                />
              </InputWraaper>
              <Button type={'submit'}>확인하기</Button>
            </ContentsWrapper>
          </CardLanyard>
        </form>
      ) : isChecked ? (
        <CheckCard status={true} />
      ) : (
        <CheckCard status={false} />
      )}
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

export default Check;
