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
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

export default Introduction;
