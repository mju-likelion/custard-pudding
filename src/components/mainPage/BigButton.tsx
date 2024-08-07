import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import React from 'react';

interface BigButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const BigButton = ({
  children,
  disabled = false,
  onClick,
}: PropsWithChildren<BigButtonProps>) => {
  return (
    <Wrapper type="button" onClick={onClick}>
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
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.background100 : theme.colors.pink100};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.background100 : theme.colors.pink200};
  }

  @media ${({ theme }) => theme.size.tablet} {
    border-radius: 35px;
    font-size: 22px;
    width: 200px;
    height: 70px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    font-size: 26px;
    border-radius: 60px;
    width: 250px;
    height: 90px;
  }
`;

export default BigButton;
