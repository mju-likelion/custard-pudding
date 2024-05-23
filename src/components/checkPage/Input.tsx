import styled from 'styled-components';
import { SizeValue } from 'pages/Check';

interface InputProps {
  inputSize: SizeValue;
  captionSize: SizeValue;
  messageSize: SizeValue;
}

const Caption = styled.p<{ $captionSize: SizeValue }>`
  ${({ theme }) => theme.typographies.smallTxt};
  text-align: left;
  margin: 0 0 6px 2px;

  width: ${({ $captionSize }) => $captionSize.width};
  height: ${({ $captionSize }) => $captionSize.height};

  @media ${({ theme }) => theme.size.desktop} {
    width: ${({ $captionSize }) => $captionSize.pcWidth};
    height: ${({ $captionSize }) => $captionSize.pcHeight};
    ${({ theme }) => theme.typographies.bigTxt};
    margin: 0 0 4px 2px;
  }
`;

const StyledInput = styled.input<{ $inputSize: SizeValue }>`
  width: 100%;
  height: ${({ $inputSize }) => $inputSize.height};
  background: transparent;
  border: 1px solid #d4d4d8;
  ${({ theme }) => theme.typographies.defaultTxt};
  color: ${({ theme }) => theme.colors.white};
  padding: 18px 16px;
  border-radius: 8px;

  @media ${({ theme }) => theme.size.desktop} {
    width: ${({ $inputSize }) => $inputSize.pcWidth};
    height: ${({ $inputSize }) => $inputSize.pcHeight};
  }
`;

const ErrorMessage = styled.p<{ $messageSize: SizeValue }>`
  width: ${({ $messageSize }) => $messageSize.width};
  height: ${({ $messageSize }) => $messageSize.height};
  color: ${({ theme }) => theme.colors.pink200};
  ${({ theme }) => theme.typographies.smallErrorTxt};
  margin-top: 7px;
  margin-left: 4px;

  @media ${({ theme }) => theme.size.desktop} {
    width: ${({ $messageSize }) => $messageSize.pcWidth};
    height: ${({ $messageSize }) => $messageSize.pcHeight};
    ${({ theme }) => theme.typographies.bigTxt};
    margin-top: 10px;
  }
`;

const Wrapper = styled.div``;

const Input = ({
  inputSize,
  captionSize,
  messageSize,
  hookFormRegister,
  messageErrors,
}: InputProps) => {
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

export default Input;
