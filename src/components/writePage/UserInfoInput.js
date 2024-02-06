import styled from 'styled-components';

const UserInfoInput = ({ subTitle, isDisabled }) => {
  return (
    <Container>
      <InfoLabel>{subTitle}</InfoLabel>
      {isDisabled ? <InfoInput disabled /> : <InfoInput />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media ${({ theme }) => theme.devices.TABLET} {
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
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  &:disabled {
    background-color: #202020;
    border: 1px solid ${({ theme }) => theme.colors.MODAL_BG};
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
