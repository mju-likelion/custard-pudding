import styled from 'styled-components';

const BigButton = ({ children, disabled, onClick }) => {
  return (
    <Wrapper type="button" disabled={disabled} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  width: 130px;
  height: 45px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.DISABLE_BTN : theme.colors.MAIN_PINK};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.DISABLE_BTN : theme.colors.HOVER_BTN};
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    border-radius: 35px;
    font-size: 22px;
    width: 200px;
    height: 70px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 26px;
    border-radius: 60px;
    width: 250px;
    height: 90px;
  }
`;

export default BigButton;
