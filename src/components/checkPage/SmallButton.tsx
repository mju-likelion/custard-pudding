import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface SmallButtonProps {
  type: 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const SmallButton = ({
  children,
  type,
  onClick,
  ...rest
}: PropsWithChildren<SmallButtonProps>) => {
  return (
    <Wrapper type={type} onClick={onClick} {...rest}>
      {children}
    </Wrapper>
  );
};

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
    ${({ theme }) => theme.typographies.SMALL_BTN_TXT};
    padding: 14px 48px;
    border-radius: 40px;
    width: 160px;
    height: 54px;
  }
`;

export default SmallButton;
