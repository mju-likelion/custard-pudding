import styled from 'styled-components';

/**
 * @param {string} text
 */
const BigButton = ({ children, disabled, onClick }) => {
  return (
    <Wrapper type="button" disabled={disabled} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 40px;
  font-size: 10px;
  font-weight: 300;
  padding: 10px 20px;
  width: 78px;
  height: 30px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.DISABLE_BTN : theme.colors.MAIN_PINK};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.DISABLE_BTN : theme.colors.HOVER_BTN};
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_BTN_TXT};
    padding: 26px 72px;
    border-radius: 40px;
    width: 272px;
    height: 100px;
  }

  @media${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.BIG_BTN_TXT};
    width: 272px;
    height: 100px;
    border-radius: 40px;
    padding: 26px 72px;
  }
`;

export default BigButton;
