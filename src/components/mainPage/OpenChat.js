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

  @media ${({ theme }) => theme.devices.TABLET} {
    right: 80px;
    bottom: 70px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    right: 100px;
    bottom: 100px;
  }
`;
const Box = styled.div`
  width: 120px;
  height: 35px;
  padding: 8px 5px 7px;
  font-size: 12px;
  font-weight: 300;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 150px;
    height: 45px;
    padding: 14px;
    ${({ theme }) => theme.typographies.SMALL_TXT};
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 180px;
    height: 55px;
    padding: 18px 15px 15px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT};
  }

  position: relative;
  border-radius: 25px;
  text-align: center;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.MODAL_BG};
`;
const LionImg = styled.img`
  position: absolute;
  width: 80px;
  top: -23px;
  right: -55px;

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 100px;
    top: -25px;
    right: -65px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 120px;
    top: -30px;
    right: -80px;
  }
`;

export default OpenChat;
