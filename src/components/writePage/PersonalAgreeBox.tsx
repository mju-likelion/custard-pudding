import styled from 'styled-components';
import agreeIcon from '../../assets/imgs/agree_icon.svg';
import { UseFormRegister } from 'react-hook-form';

interface PersonalAgreeBoxProps {
  text: string;
  sequence: number;
  register: UseFormRegister<any>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 6px;
  @media ${({ theme }) => theme.size.tablet} {
    margin-bottom: 40px;
    gap: 10px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    margin-bottom: 50px;
  }
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  @media ${({ theme }) => theme.size.tablet} {
    padding: 0 12px;
  }
`;
const Title = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.defaultTxt}
  }
  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;
const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media ${({ theme }) => theme.size.tablet} {
    gap: 8px;
  }
`;
const CheckLabel = styled.label`
  user-select: none;
  color: ${({ theme }) => theme.colors.pink100};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.defaultTxt}
  }
  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;
const CheckBox = styled.input`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.background200};
  border-radius: 3px;
  width: 20px;
  height: 20px;
  &:checked {
    background-image: url(${agreeIcon});
    background-color: ${({ theme }) => theme.colors.pink100};
    background-position: 50%;

    opacity: 0.6;
    padding: 2px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 28px;
    height: 28px;
  }
`;
const AgreeContentBox = styled.div<{ $isRefer: boolean }>`
  width: 326px;
  height: ${({ $isRefer }) => ($isRefer ? ' 100px' : '156px')};
  background-color: ${({ theme }) => theme.colors.background300};
  border-radius: 15px;
  padding: 20px 14px 20px 24px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 562px;
    height: ${({ $isRefer }) => ($isRefer ? ' 200px' : '250px')};
    padding: 32px 30px 32px 40px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 972px;
    height: ${({ $isRefer }) => ($isRefer ? ' 200px' : '320px')};
    padding: 40px 40px 40px 60px;
  }
`;
const AgreeContent = styled.div<{ $isRefer: boolean }>`
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme, $isRefer }) =>
    $isRefer ? theme.colors.pink200 : '#b6b6b6'};
  white-space: pre-line;
  overflow-y: scroll;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      theme.colors.background200}; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background300};
  }

  @media ${({ theme }) => theme.size.tablet} {
    line-height: 30px;
    font-size: 14px;
    &::-webkit-scrollbar {
      width: 8px;
    }
    padding-right: 6px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    line-height: ${({ $isRefer }) => ($isRefer ? '30px' : '40px')};
    ${({ theme }) => theme.typographies.defaultTxt}
    padding-right: 20px;
  }
`;

const PersonalAgreeBox = ({
  text,
  sequence,
  register,
}: PersonalAgreeBoxProps) => {
  return (
    <Container>
      <TitleBox>
        <Title>{sequence === 2 ? '참고 및 주의사항' : '개인정보 동의'}</Title>
        <CheckWrapper>
          <CheckLabel htmlFor={'agree' + String(sequence)}>[동의]</CheckLabel>
          <CheckBox
            {...register('agree' + String(sequence))}
            type="checkbox"
            id={'agree' + String(sequence)}
          />
        </CheckWrapper>
      </TitleBox>
      <AgreeContentBox $isRefer={sequence === 2 ? true : false}>
        <AgreeContent $isRefer={sequence === 2 ? true : false}>
          {text}
        </AgreeContent>
      </AgreeContentBox>
    </Container>
  );
};

export default PersonalAgreeBox;
