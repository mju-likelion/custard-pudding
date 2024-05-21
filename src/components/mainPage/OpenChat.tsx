import styled from 'styled-components';
import lion from '.././../assets/imgs/openchat_lion.svg';

const OpenChat = () => {
  const openChatLink = 'https://open.kakao.com/o/spjt66ag';
  return (
    <OpenChatLink href={openChatLink} target="_blank">
      <Box>카카오톡 문의하기</Box>
      <LionImg src={lion} />
    </OpenChatLink>
  );
};

const OpenChatLink = styled.a`
  position: fixed;
  right: 70px;
  bottom: 100px;
  text-decoration: none;
  z-index: 999;

  @media ${({ theme }) => theme.size.tablet} {
    right: 90px;
    bottom: 80px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    right: 120px;
    bottom: 100px;
  }
`;
const Box = styled.div`
  width: 120px;
  height: 35px;
  padding: 8px 5px 7px;
  font-size: 12px;
  font-weight: 300;

  @media ${({ theme }) => theme.size.tablet} {
    width: 150px;
    height: 45px;
    padding: 14px;
    ${({ theme }) => theme.typographies.smallTxt};
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 180px;
    height: 55px;
    padding: 18px 15px 15px;
    ${({ theme }) => theme.typographies.defaultTxt};
  }

  position: relative;
  border-radius: 25px;
  text-align: center;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background200};
`;
const LionImg = styled.img`
  position: absolute;
  width: 80px;
  top: -23px;
  right: -55px;

  @media ${({ theme }) => theme.size.tablet} {
    width: 100px;
    top: -25px;
    right: -65px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 120px;
    top: -30px;
    right: -80px;
  }
`;

export default OpenChat;
