import { useState } from 'react';
import styled from 'styled-components';

const SelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSelect = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SelectContainer>
      <SelectWrapper onClick={openSelect}></SelectWrapper>
      {isOpen && (
        <SelectOptions>
          <Option>1</Option>
          <Option>2</Option>
          <Option>3</Option>
          <Option>4</Option>
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border: ${({ error, theme }) =>
    error ? `1px solid ${theme.colors.HOVER_BTN}` : 'none'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
`;
const SelectOptions = styled.div`
  width: 184px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 294px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 313px;
  }
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MODAL_BG};
  &:last-child {
    border: none;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 42px;
  }
`;

export default SelectBox;
