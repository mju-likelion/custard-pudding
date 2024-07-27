import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavDropdown from './NavDropdown';
import BigLogo from '../../assets/imgs/logo_big.svg';
import SmallLogo from '../../assets/imgs/logo_small.svg';
import { ReactComponent as OpenMenuIcon } from '../../assets/imgs/header_mobile_menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/imgs/header_mobile_x.svg';

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background500};
  position: sticky;
  top: 0;
  z-index: 99;
`;
const InnerContainer = styled.div`
  max-width: 1200px;
  height: 56px;
  padding: 20px 16px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.size.tablet} {
    height: 70px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    height: 70px;
    padding: 27px 16px;
  }
`;
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  @media ${({ theme }) => theme.size.desktop} {
    gap: 6px;
  }
  cursor: pointer;
`;
const BigLogoWrapper = styled.img`
  display: none;
  @media ${({ theme }) => theme.size.desktop} {
    display: block;
  }
`;
const SmallLogoWrapper = styled.img`
  display: block;
  @media ${({ theme }) => theme.size.desktop} {
    display: none;
  }
`;
const SubtitleBox = styled.div`
  padding: 3px 0 0 0;
  font-size: 16px;
  font-weight: 300;
  line-height: 10px;
  @media ${({ theme }) => theme.size.tablet} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.size.desktop} {
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
  @media ${({ theme }) => theme.size.tablet} {
    display: flex;
    font-size: 16px;
    gap: 40px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    display: flex;
    font-size: 20px;
    gap: 60px;
  }
`;
const NavItem = styled.button<{ $current: boolean }>`
  all: unset;
  cursor: pointer;
  color: ${({ $current, theme }) =>
    $current ? theme.colors.pink100 : 'white'};
`;
const OpenIconBox = styled(OpenMenuIcon)`
  @media ${({ theme }) => theme.size.mobile} {
    display: block;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.size.tablet} {
    display: none;
  }
`;
const CloseIconBox = styled(CloseMenuIcon)`
  @media ${({ theme }) => theme.size.mobile} {
    display: block;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.size.tablet} {
    display: none;
  }
`;

type CurrentType = {
  [key: string]: boolean;
  apply: boolean;
  check: boolean;
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [current, setCurrent] = useState<CurrentType>({
    apply: false,
    check: false,
  });

  const openMenu = () => {
    setIsOpenMenu(true);
  };
  const closeMenu = () => {
    setIsOpenMenu(false);
  };

  const onClick = (current: CurrentType, path: string) => {
    if (location.pathname === '/write') {
      const response = confirm(
        '페이지를 떠나면 변경된 내용이 저장되지 않습니다. 페이지를 이동하시겠습니까?',
      );
      if (response) {
        setCurrent(current);
        navigate(path);
      }
    } else navigate(path);
  };

  const button_data = [
    {
      title: '지원하기',
      path: 'apply',
      onClick: () => onClick({ apply: true, check: false }, '/apply'),
    },
    {
      title: '지원 확인하기',
      path: 'check',
      onClick: () => onClick({ apply: false, check: true }, '/check'),
    },
  ];

  useEffect(() => {
    if (location.pathname === '/apply') {
      setCurrent({ apply: true, check: false });
    } else if (location.pathname === '/write') {
      setCurrent({ apply: true, check: false });
    } else if (location.pathname === '/check') {
      setCurrent({ apply: false, check: true });
    } else setCurrent({ apply: false, check: false });
  }, [location]);

  return (
    <Container>
      <InnerContainer>
        <LogoBox onClick={() => onClick({ apply: false, check: false }, '/')}>
          <BigLogoWrapper src={BigLogo} />
          <SmallLogoWrapper src={SmallLogo} />
          <SubtitleBox>APPLY</SubtitleBox>
        </LogoBox>
        {!isOpenMenu ? (
          <OpenIconBox onClick={openMenu} />
        ) : (
          <CloseIconBox onClick={closeMenu} />
        )}
        <NavContainer>
          {button_data.map((button) => {
            return (
              <NavItem
                key={button.title}
                $current={current[button.path]}
                onClick={button.onClick}
              >
                {button.title}
              </NavItem>
            );
          })}
        </NavContainer>
      </InnerContainer>
      {isOpenMenu && <NavDropdown closeMenu={closeMenu} />}
    </Container>
  );
};

export default Header;
