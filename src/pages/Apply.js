import styled from 'styled-components';
import CardLanyard from '../components/CardLanyard/CardLanyard';
import SubTitle from '../components/checkPage/SubTitle';
import Input from '../components/checkPage/Input';
import SmallButton from '../components/checkPage/SmallButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { idValidationSchema } from '../validation/idValidationSchema';

const Apply = () => {
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
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
