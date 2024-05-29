import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
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

export interface SizeValue {
  width: number;
  height: number;
  pcWidth: number;
  pcHeight: number;
}

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

const Check = () => {
  const [isChecked, setIsChecked] = useState<boolean>();
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit: SubmitHandler<StudentData> = async (
    data: StudentData,
  ) => {
    setValue(data.id);
    try {
      setIsLoading(true);
      const response = await Axios.get(`/apply/exist/${data.id}`);
      const isExist = response?.data?.data?.isExist;
      setIsChecked(isExist);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputSizeValue: SizeValue = {
    width: 220,
    height: 28,
    pcWidth: 438,
    pcHeight: 56,
  };
  const captionSizeValue: SizeValue = {
    width: 220,
    height: 12,
    pcWidth: 438,
    pcHeight: 24,
  };
  const messageSizeValue: SizeValue = {
    width: 220,
    height: 8,
    pcWidth: 438,
    pcHeight: 20,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentData>({
    resolver: yupResolver(idValidationSchema),
  });

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
        <CheckCard status="checkSuccess" studentId={value} />
      ) : (
        <CheckCard status="checkFailed" studentId={value} />
      )}
    </Container>
  );
};

export default Check;
