import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Container
      type="submit"
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

const Container = styled.button`
  width: 114px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.DISABLE_BTN : theme.colors.MAIN_PINK};
  &:hover {
    background-color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.DISABLE_BTN : theme.colors.HOVER_BTN};
  }

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 176px;
    height: 74px;
    ${({ theme }) => theme.typographies.BIG_TXT};
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 232px;
    height: 96px;
    font-size: 28px;
  }
`;
export default SubmitButton;
