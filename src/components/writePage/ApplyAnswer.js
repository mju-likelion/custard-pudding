import styled from 'styled-components';

const ApplyAnswer = () => {
  return (
    // htmlFor, id는 따로 데이터 배열 고유값 id 만들어서 사용
    <AnswerContainer htmlFor="answer">
      <AnswerTextarea id="answer"></AnswerTextarea>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.label`
  width: 330px;
  height: 330px;
  padding: 26px 27px;
  margin-bottom: 50px;

  border-radius: 15px;
  background-color: #282828;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 560px;
    height: 1067px;
    padding: 34px 35px;
    margin-bottom: 110px;
  }

  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 972px;
    height: 882px;
    padding: 62px 61px;
    margin-bottom: 110px;
  }
`;
const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  background-color: #282828;
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
    background: #3b3b3b; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: #282828; /*스크롤바 뒷 배경 색상*/
  }
`;

export default ApplyAnswer;
