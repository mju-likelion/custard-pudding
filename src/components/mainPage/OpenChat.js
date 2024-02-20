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
  right: 100px;
  bottom: 100px;
  text-decoration: none;
`;
const Box = styled.div`
  width: 180px;
  height: 55px;
  padding: 18px 15px 15px;
  position: relative;
  border-radius: 25px;
  text-align: center;
  line-height: 20px;
  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.MODAL_BG};
`;
const LionImg = styled.img`
  width: 120px;
  position: absolute;
  top: -30px;
  right: -80px;
`;

export default OpenChat;
