import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavDropdown from './NavDropdown';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <InnerContainer>
        <LogoBox>
          <SubtitleBox>APPLY</SubtitleBox>
        </LogoBox>
        <NavContainer>
          <NavItem onClick={navigate()}>지원하기</NavItem>
          <NavItem onClick={navigate()}>지원 확인하기</NavItem>
        </NavContainer>
      </InnerContainer>
      <NavDropdown />
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

const SubtitleBox = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 10px;
  color: #ffffff;
  // vs F1EBEB

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 17px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 28px;
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
    font-size: 18px;
    gap: 30px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
    font-size: 24px;
    gap: 60px;
  }
`;

const NavItem = styled.button`
  all: unset;
  cursor: pointer;
`;

export default Header;
