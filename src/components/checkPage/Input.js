import styled from 'styled-components';

const Input = ({
  inputSize,
  captionSize,
  messageSize,
  hookFormRegister,
  messageErrors,
}) => {
  return (
    <Wrapper>
      <Caption $captionSize={captionSize}>학번</Caption>
      <StyledInput $inputSize={inputSize} {...hookFormRegister('id')} />
      <ErrorMessage $messageSize={messageSize}>
        {messageErrors.id && messageErrors.id.message}
      </ErrorMessage>
    </Wrapper>
  );
};

const Caption = styled.p`
  ${({ theme }) => theme.typographies.SMALL_TXT};
  text-align: left;
  margin: 0 0 6px 2px;

  width: ${({ $captionSize }) => $captionSize.width};
  height: ${({ $captionSize }) => $captionSize.height};

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: ${({ $captionSize }) => $captionSize.pcWidth};
    height: ${({ $captionSize }) => $captionSize.pcHeight};
    ${({ theme }) => theme.typographies.BIG_TXT};
    margin: 0 0 4px 2px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
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
  width: ${({ $messageSize }) => $messageSize.width};
  height: ${({ $messageSize }) => $messageSize.height};
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  ${({ theme }) => theme.typographies.SMALL_ERROR_TXT};
  margin-top: 7px;
  margin-left: 4px;

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: ${({ $messageSize }) => $messageSize.pcWidth};
    height: ${({ $messageSize }) => $messageSize.pcHeight};
    ${({ theme }) => theme.typographies.BIG_TXT};
    margin-top: 10px;
  }
`;

const Wrapper = styled.div``;

export default Input;
