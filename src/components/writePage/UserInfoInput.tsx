import styled from 'styled-components';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { InputItemData } from './InfoInputBox';

interface UserInfoInputProps {
  label: string;
  name: string;
  isDisabled: boolean;
  register: UseFormRegister<InputItemData>;
  errors: FieldErrors<InputItemData>;
  placeholder: string;
  studentIdValue: string;
}

const AllContainer = styled.div<{ $isRight: boolean }>`
  display: flex;
  flex-direction: column;
  height: ${({ $isRight }) => ($isRight ? '42px' : 'none')};
  @media ${({ theme }) => theme.size.tablet} {
    height: ${({ $isRight }) => ($isRight ? '56px' : 'none')};
  }
  @media ${({ theme }) => theme.size.desktop} {
    height: ${({ $isRight }) => ($isRight ? '72px' : 'none')};
  }
`;
const InputContainer = styled.div`
  width: 226px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media ${({ theme }) => theme.size.tablet} {
    width: 350px;
    height: 42px;
    gap: 17px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 369px;
  }
`;

const InfoLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;

const InfoInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border: none;
  border: ${({ $error, theme }) =>
    $error ? `1px solid ${theme.colors.pink200}` : 'none'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background300};
  &:disabled {
    background-color: #202020;
    border: 1px solid ${({ theme }) => theme.colors.background200};
  }
  &:focus {
    border: ${({ theme }) => `2px solid ${theme.colors.background200}`};
  }
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.size.tablet} {
    padding: 14px 18px;
    font-size: 14px;
  }
`;
const InfoHelperText = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 9px;
  font-weight: 300;
  visibility: ${({ $errors }) => ($errors ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.pink200};
  @media ${({ theme }) => theme.size.tablet} {
    margin-top: 15px;
    font-size: 15px;
  }
`;

const UserInfoInput = ({
  label,
  name,
  isDisabled,
  register,
  errors,
  placeholder,
  studentIdValue,
}: UserInfoInputProps) => {
  return (
    <AllContainer $isRight={name === 'email' || name === 'phoneNumber'}>
      <InputContainer>
        <InfoLabel>{label}</InfoLabel>
        {isDisabled ? (
          <InfoInput disabled $error={errors[name]} value={studentIdValue} />
        ) : (
          <InfoInput
            placeholder={placeholder}
            id={name}
            {...register(name)}
            $error={errors[name]}
          />
        )}
      </InputContainer>
      {(name === 'email' || name === 'phoneNumber') && errors[name] && (
        <InfoHelperText $errors={errors[name]}>
          {errors[name].message}
        </InfoHelperText>
      )}
    </AllContainer>
  );
};

export default UserInfoInput;
