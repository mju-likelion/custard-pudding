import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavDropdown = ({ closeMenu }) => {
  const navigate = useNavigate();

  const handleNavClick = (address) => {
    closeMenu();
    navigate(address);
  };

  return (
    <Container>
      <NavItem onClick={() => handleNavClick('/apply')}>지원하기</NavItem>
      <NavItem onClick={() => handleNavClick('/check')}>지원 확인하기</NavItem>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.MODAL_BG};
  display: flex;
  flex-direction: column;
  z-index: 50;
  @media ${({ theme }) => theme.devices.TABLET} {
    display: none;
  }
`;

const NavItem = styled.button`
  all: unset;
  height: 40px;
  padding: 18px 16px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;
// 여기에 Link 태그는 불가능한가? 좋은 방법은?

export default NavDropdown;
