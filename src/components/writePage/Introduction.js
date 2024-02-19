import React from 'react';
import styled from 'styled-components';
import ApplyAnswer from './ApplyAnswer';

const Introduction = ({ register, value, questionList }) => {
  return (
    <>
      {questionList?.map((item) => (
        <>
          <Question key={item.id}>
            {item.sequence}. {item.title}
          </Question>
          <ApplyAnswer
            register={register}
            name={'question' + String(item.sequence)}
            value={value}
            maxLength={item.maxLength}
          />
        </>
      ))}
    </>
  );
};

const Question = styled.p`
  align-self: flex-start;
  width: 330px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 560px;
    line-height: 30px;

    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
    line-height: 40px;

    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

export default Introduction;
