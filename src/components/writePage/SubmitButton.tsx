import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface SubmitButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Container = styled.button<{ $disabled: boolean }>`
  width: 114px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.background100 : theme.colors.pink100};
  &:hover {
    background-color: ${({ theme, $disabled }) =>
      $disabled ? theme.colors.background100 : theme.colors.pink200};
  }

  @media ${({ theme }) => theme.size.tablet} {
    width: 176px;
    height: 74px;
    ${({ theme }) => theme.typographies.bigTxt};
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 232px;
    height: 96px;
    font-size: 28px;
  }
`;

const SubmitButton = ({
  children,
  disabled = false,
  onClick,
}: PropsWithChildren<SubmitButtonProps>) => {
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

export default SubmitButton;
