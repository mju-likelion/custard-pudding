import React from 'react';
import styled from 'styled-components';
import { TEXTAREA_LIST } from './IntroductionData';
import ApplyAnswer from '../../components/writePage/ApplyAnswer';

const Introduction = ({ register, value }) => {
  return (
    <>
      {TEXTAREA_LIST.map((item) => (
        <>
          <Question key={item.id}>
            {item.id}. 뭐시기 저시기 {item.id}번 문항입니다.
          </Question>
          <ApplyAnswer
            register={register}
            name={item.name}
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
