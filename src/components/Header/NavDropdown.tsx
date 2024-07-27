import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background200};
  display: flex;
  flex-direction: column;
  z-index: 50;
  @media ${({ theme }) => theme.size.tablet} {
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

interface NavDropdownProps {
  closeMenu: () => void;
}

const NavDropdown = ({ closeMenu }: NavDropdownProps) => {
  const navigate = useNavigate();

  const handleNavClick = (address: string) => {
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

export default NavDropdown;
