import styled, { css } from 'styled-components';
import Toast from './mainPage/Toast';
import { ReactComponent as Github_icon } from '../assets/imgs/github_icon.svg';
import { ReactComponent as Instar_icon } from '../assets/imgs/instar_icon.svg';
import { ReactComponent as Email_icon } from '../assets/imgs/email_icon.svg';

const Footer = () => {
  return (
    <Container>
      <SnsLinks>
        <a href="https://github.com/mju-likelion/">
          <Github />
        </a>
        <a href="https://www.instagram.com/mju_likelion/">
          <Instar />
        </a>
        <Toast>
          <Email />
        </Toast>
      </SnsLinks>
      <Copyright>
        © 2024. LIKELION MJU All pictures cannot be copied without permission.
      </Copyright>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.INPUT_BG};
`;
const SnsLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Icon = css`
  width: 28px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 34px;
  }
  fill: ${({ theme }) => theme.colors.WHITE_TXT};
  &:hover {
    fill: ${({ theme }) => theme.colors.HOVER_BTN};
  }
`;

const Github = styled(Github_icon)`
  ${Icon}
`;
const Instar = styled(Instar_icon)`
  ${Icon}
`;
const Email = styled(Email_icon)`
  ${Icon}
`;
const Copyright = styled.p`
  padding: 0 20px;
  ${({ theme }) => theme.typographies.M_SMALL_TXT}
  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.SMALL_TXT}
  }
`;

export default Footer;
