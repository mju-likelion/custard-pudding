import styled from 'styled-components';

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ $isRight }) => ($isRight ? '42px' : 'none')};
  @media ${({ theme }) => theme.devices.TABLET} {
    height: ${({ $isRight }) => ($isRight ? '56px' : 'none')};
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
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

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 350px;
    height: 42px;
    gap: 17px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 369px;
  }
`;

const InfoLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

const InfoInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border: none;
  border: ${({ $error, theme }) =>
    $error ? `1px solid ${theme.colors.HOVER_BTN}` : 'none'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  &:disabled {
    background-color: #202020;
    border: 1px solid ${({ theme }) => theme.colors.MODAL_BG};
  }
  &:focus {
    border: ${({ theme }) => `2px solid ${theme.colors.MODAL_BG}`};
  }
  font-size: 9px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  @media ${({ theme }) => theme.devices.TABLET} {
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
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  @media ${({ theme }) => theme.devices.TABLET} {
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
}) => {
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
