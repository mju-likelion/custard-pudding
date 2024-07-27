import styled, { css } from 'styled-components';
import CopyMail from './mainPage/CopyMail';
import Toast from './mainPage/Toast';
import { ReactComponent as Github_icon } from '../assets/imgs/github_icon.svg';
import { ReactComponent as Instar_icon } from '../assets/imgs/instar_icon.svg';
import { ReactComponent as Email_icon } from '../assets/imgs/email_icon.svg';

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background400};
  position: sticky;
  z-index: 99;
`;
const SnsLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Icon = css`
  width: 28px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 34px;
  }
  fill: ${({ theme }) => theme.colors.white};
  &:hover {
    fill: ${({ theme }) => theme.colors.pink200};
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
  ${({ theme }) => theme.typographies.mSmall}
  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.smallTxt}
  }
`;

const Footer = () => {
  return (
    <Container>
      <SnsLinks>
        <a
          href="https://github.com/mju-likelion/"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.instagram.com/mju_likelion/"
          target="_blank"
          rel="noreferrer"
        >
          <Instar />
        </a>
        <CopyMail>
          <Email />
        </CopyMail>
      </SnsLinks>
      <Toast />
      <Copyright>
        © 2024. LIKELION MJU All pictures cannot be copied without permission.
      </Copyright>
    </Container>
  );
};

export default Footer;
