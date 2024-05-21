import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Axios } from '../api/Axios';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';
import CheckCard from '../components/checkPage/CheckCard';
import { idValidationSchema } from '../validation/idValidationSchema';
import { StudentData } from './Apply';

const Check = () => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: StudentData) => {
    setValue(data.id);
    try {
      setIsLoading(true);
      const response = await Axios.get(`/apply/exist/${data.id}`);
      const isExist = response?.data?.data?.isExist;
      setIsChecked(isExist);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
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
          <CardLanyard width={250} height={318} pcWidth={544} pcHeight={358}>
            <ContentsWrapper>
              <SubTitle>지원 확인하기</SubTitle>
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
                {isLoading ? '로딩중' : '확인하기'}
              </SmallButton>
            </ContentsWrapper>
          </CardLanyard>
        </form>
      ) : isChecked ? (
        <CheckCard status="check_success" value={value} />
      ) : (
        <CheckCard status="check_failed" value={value} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px - 56px);
  @media ${({ theme }) => theme.devices.TABLET} {
    height: calc(100vh - 100px - 70px);
  }
`;
const InputWrapper = styled.div`
  margin: 34px 0 60px 0;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    margin: 18px 0 40px 0;
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

export default Check;
