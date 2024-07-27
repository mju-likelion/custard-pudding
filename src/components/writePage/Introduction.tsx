import React from 'react';
import styled from 'styled-components';
import { UseFormRegister } from 'react-hook-form';
import ApplyAnswer from './ApplyAnswer';
import { IntroduceItem, ValuesType, ValueTypeKeys } from 'pages/ApplyWrite';

const Question = styled.p`
  align-self: flex-start;
  width: 330px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

  @media ${({ theme }) => theme.size.tablet} {
    width: 560px;
    line-height: 30px;

    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.defaultTxt}
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 972px;
    line-height: 40px;

    ${({ theme }) => theme.typographies.bigTxt}
  }
`;

interface IntroductionProps {
  register: UseFormRegister<any>;
  value: ValuesType;
  questionList: IntroduceItem[];
}
const Introduction = ({ register, value, questionList }: IntroductionProps) => {
  return (
    <>
      {questionList?.map((item) => (
        <React.Fragment key={item.id}>
          <Question>
            {item.sequence}. {item.title}
          </Question>
          <ApplyAnswer
            register={register}
            name={('question' + String(item.sequence)) as ValueTypeKeys}
            value={value}
            maxLength={item.maxLength}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default Introduction;
