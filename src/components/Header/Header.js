import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import NavDropdown from './NavDropdown';

import BigLogo from '../../assets/imgs/logo_big.svg';
import SmallLogo from '../../assets/imgs/logo_small.svg';
import { ReactComponent as OpenMenuIcon } from '../../assets/imgs/header_mobile_menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/imgs/header_mobile_x.svg';

const Header = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenIcon, setIsOpenIcon] = useState(true);

  const openMenu = () => {
    setIsOpenMenu(true);
    setIsOpenIcon(false);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
    setIsOpenIcon(true);
  };
  return (
    <Container>
      <InnerContainer>
        <LogoBox>
          <BigLogoWrapper src={BigLogo} onClick={() => navigate()} />
          <SmallLogoWrapper src={SmallLogo} onClick={() => navigate()} />
          <SubtitleBox>APPLY</SubtitleBox>
        </LogoBox>
        {isOpenIcon ? (
          <OpenIconBox onClick={openMenu} />
        ) : (
          <CloseIconBox onClick={closeMenu} />
        )}
        <NavContainer>
          <NavItem onClick={() => navigate()}>지원하기</NavItem>
          <NavItem onClick={() => navigate()}>지원 확인하기</NavItem>
        </NavContainer>
      </InnerContainer>
      {isOpenMenu && <NavDropdown />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.PAGE_BG};
  position: sticky;
  top: 0;
  z-index: 99;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  height: 56px;
  padding: 20px 16px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 70px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 70px;
    padding: 27px 16px;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    gap: 6px;
  }
  cursor: pointer;
`;

const BigLogoWrapper = styled.img`
  @media ${({ theme }) => theme.devices.MOBILE} {
    display: none;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: block;
  }
`;

const SmallLogoWrapper = styled.img`
  @media ${({ theme }) => theme.devices.MOBILE} {
    display: block;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

const SubtitleBox = styled.div`
  padding: 3px 0 0 0;
  font-size: 16px;
  font-weight: 300;
  line-height: 10px;
  color: #ffffff;
  // vs F1EBEB

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 24px;
    line-height: 21px;
  }
`;

const NavContainer = styled.div`
  display: none;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  gap: 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: flex;
    font-size: 16px;
    gap: 40px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
    font-size: 20px;
    gap: 60px;
  }
`;

const NavItem = styled.button`
  all: unset;
  cursor: pointer;
`;

const OpenIconBox = styled(OpenMenuIcon)`
  @media ${({ theme }) => theme.devices.MOBILE} {
    display: block;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;
const CloseIconBox = styled(CloseMenuIcon)`
  @media ${({ theme }) => theme.devices.MOBILE} {
    display: block;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

export default Header;
