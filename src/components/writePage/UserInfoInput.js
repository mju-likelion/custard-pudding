import styled from 'styled-components';
import SelectBox from '../../pages/ApplyWrite/SelectBox';
const UserInfoInput = ({
  label,
  name,
  isDisabled,
  register,
  errors,
  placeholder,
  studentIdValue,
  setValue,
  getValues,
  majorData,
}) => {
  return (
    <Container>
      <InfoLabel>{label}</InfoLabel>
      {isDisabled ? (
        <InfoInput disabled error={errors[name]} value={studentIdValue} />
      ) : name === 'grade' || name === 'majors' ? (
        <SelectBox
          setValue={setValue}
          majorData={majorData}
          name={name}
          getValues={getValues}
        />
      ) : (
        <InfoInput
          placeholder={placeholder}
          id={name}
          {...register(name)}
          error={errors[name]}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
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
  border: ${({ error, theme }) =>
    error ? `1px solid ${theme.colors.HOVER_BTN}` : 'none'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  &:disabled {
    background-color: #202020;
    border: 1px solid ${({ theme }) => theme.colors.MODAL_BG};
  }
  &:focus {
    border: ${({ theme }) => `2px solid ${theme.colors.MODAL_BG}`};
  }
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 14px 18px;
    font-size: 14px;
  }
`;

export default UserInfoInput;
