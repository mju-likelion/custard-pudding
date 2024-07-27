import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';
import { ValuesType, ValueTypeKeys } from 'pages/ApplyWrite';

interface ApplyAnswerProps {
  register: UseFormRegister<any>;
  name: ValueTypeKeys;
  value: ValuesType;
  maxLength: number;
}

const AnswerContainer = styled.label`
  width: 330px;
  height: 330px;
  padding: 26px 12px 40px 27px;
  margin-bottom: 50px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background300};
  @media ${({ theme }) => theme.size.tablet} {
    width: 560px;
    height: 670px;
    padding: 36px 25px 55px 40px;
    margin-bottom: 110px;
  }

  @media ${({ theme }) => theme.size.desktop} {
    width: 972px;
    height: 574px;
    padding: 60px 38px 80px 60px;
  }
`;

const AnswerLength = styled.p`
  float: right;
  color: #939393;
  font-size: 10px;
  font-weight: 500;
  margin-top: 12px;
  @media ${({ theme }) => theme.size.tablet} {
    font-size: 14px;
    margin-top: 16px;
  }

  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.defaultTxt}
    margin-top: 26px;
  }
`;
const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background300};
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  resize: none;
  line-height: 20px;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background200};
    border-radius: 10px;
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background300};
  }

  @media ${({ theme }) => theme.size.tablet} {
    padding-right: 18px;
    line-height: 40px;
    font-size: 14px;
    &::-webkit-scrollbar {
      width: 8px;
    }
  }
  @media ${({ theme }) => theme.size.desktop} {
    padding-right: 28px;
    ${({ theme }) => theme.typographies.defaultTxt}
    &::-webkit-scrollbar {
      width: 10px;
    }
  }
`;

const ApplyAnswer = ({
  register,
  name,
  value,
  maxLength,
}: ApplyAnswerProps) => {
  return (
    <AnswerContainer htmlFor={name}>
      <AnswerTextarea id={name} {...register(name)} maxLength={maxLength} />
      <AnswerLength>
        {/* @Todo value[name]이 string, boolean 이 있음. string 형식일  때만 아래 요구사항을 수행하도록 변경하기 */}
        ( {typeof value[name] === 'string' && value[name].length} / {maxLength})
      </AnswerLength>
    </AnswerContainer>
  );
};

export default ApplyAnswer;
