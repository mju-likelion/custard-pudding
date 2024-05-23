import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import React from 'react';

interface SmallButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Wrapper = styled.button`
  border-radius: 40px;
  font-size: 12px;
  font-weight: 300;
  padding: 9px 16px;
  width: 110px;
  height: 40px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink100};

  &:hover {
    background-color: ${({ theme }) => theme.colors.pink200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background100};
  }

  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.smallBtnTxt};
    padding: 14px 48px;
    border-radius: 40px;
    width: 160px;
    height: 54px;
  }
`;

const SmallButton = ({
  children,
  type,
  onClick,
  disabled = false,
}: PropsWithChildren<SmallButtonProps>) => {
  return (
    <Wrapper type={type} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default SmallButton;
