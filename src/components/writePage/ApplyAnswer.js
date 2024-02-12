import styled from 'styled-components';

const ApplyAnswer = ({ register, name, value, maxLength }) => {
  return (
    <AnswerContainer htmlFor={name}>
      <AnswerTextarea
        id={name}
        {...register(name)}
        autoFocus={false}
        maxLength={maxLength}
      />
      <AnswerLength>
        ( {value[name].length} / {maxLength} )
      </AnswerLength>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.label`
  width: 330px;
  height: 330px;
  padding: 26px 27px 40px 27px;
  margin-bottom: 50px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 560px;
    height: 1067px;
    padding: 36px 35px 56px 35px;
    margin-bottom: 110px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
    height: 882px;
    padding: 60px 61px 80px 61px;
  }
`;

const AnswerLength = styled.p`
  float: right;
  color: #939393;
  font-size: 10px;
  font-weight: 500;
  margin-top: 12px;
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
    margin-top: 16px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
    margin-top: 26px;
  }
`;
const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  border: none;
  resize: none;
  line-height: 20px;

  @media ${({ theme }) => theme.devices.TABLET} {
    line-height: 40px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.MODAL_BG};
    border-radius: 10px;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.CARD_BG};
  }
`;

export default ApplyAnswer;
