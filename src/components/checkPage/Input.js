import styled from 'styled-components';

const Input = ({ isError, defaultMessage, errorMessage, inputSize }) => {
  return (
    <Wrapper>
      <Caption>지원 아이디</Caption>
      <StypledInput $inputSize={inputSize} />
      <ErrorMessage>{isError ? errorMessage : defaultMessage}</ErrorMessage>
    </Wrapper>
  );
};

const Caption = styled.p`
  ${({ theme }) => theme.typographies.BIG_TXT};
  text-align: left;
  margin-bottom: 4px;
`;

const StypledInput = styled.input`
  width: ${({ $inputSize }) => $inputSize.width};
  height: ${({ $inputSize }) => $inputSize.height};
  background: transparent;
  border: 1px solid #d4d4d8;
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  padding: 18px 16px;
  border-radius: 8px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: ${({ $inputSize }) => $inputSize.pcWidth};
    height: ${({ $inputSize }) => $inputSize.pcHeight};
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  ${({ theme }) => theme.typographies.SMALL_TXT};
`;

const Wrapper = styled.div``;

export default Input;
