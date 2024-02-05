import styled from 'styled-components';

const SmallButton = ({ children, type }) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  border-radius: 40px;
  font-size: 10px;
  font-weight: 300;
  padding: 9px 16px;
  width: 74px;
  height: 26px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.MAIN_PINK};

  &:hover {
    background-color: ${({ theme }) => theme.colors.HOVER_BTN};
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.SMALL_BTN_TXT};
    padding: 14px 48px;
    border-radius: 40px;
    width: 160px;
    height: 54px;
  }
`;

export default SmallButton;
