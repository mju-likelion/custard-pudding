import { useRef, useState } from 'react';
import styled from 'styled-components';
import css from 'styled-components';
import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { GRADE_DATA } from './SelectGradeData';
const SelectBox = ({ name, setValue, majorData, getValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const SelectContainerRef = useRef(null);
  // const { getValues } = useForm();

  // 이전 페이지 참고 코드
  const handleClickOutside = (e) => {
    if (
      SelectContainerRef.current &&
      !SelectContainerRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    // 뒷정리 함수
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [SelectContainerRef]);

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };
  //

  const setData = (data) => {
    setValue(name, data);
    setIsOpen(false);
  };

  return (
    <SelectContainer ref={SelectContainerRef}>
      <SelectWrapper onClick={handleOptions} $isOpen={isOpen}>
        {getValues(name)}
      </SelectWrapper>
      {isOpen && (
        <SelectOptions $isScroll={name === 'majors'}>
          {name === 'majors' &&
            majorData.map((item) => (
              <Option key={item.id} onClick={() => setData(item.name)}>
                {item.name}
              </Option>
            ))}
          {name === 'grade' &&
            GRADE_DATA.map((item, idx) => (
              <Option key={idx} onClick={() => setData(item)}>
                {item}
              </Option>
            ))}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const SelectWrapper = styled.div`
  &::after {
    content: ${({ $isOpen }) => ($isOpen ? '"∧"' : '"∨"')};
    position: absolute;
    right: 10px;
    font-size: 10px;
    font-weight: 300;
    color: #939393;
    @media ${({ theme }) => theme.devices.TABLET} {
      right: 20px;
      font-size: 16px;
    }
  }

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  border: ${({ error, theme }) =>
    error ? `1px solid ${theme.colors.HOVER_BTN}` : 'none'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  padding: 0 10px;
  font-size: 10px;

  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 0 18px;
    font-size: 14px;
  }
`;
const SelectOptions = styled.div`
  width: 184px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px 4px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};

  position: absolute;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 99;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.MODAL_BG}; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.CARD_BG};
  }
  height: 178px;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 294px;
    height: 262px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 313px;
  }
`;
const Option = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.MODAL_BG};
  font-size: 10px;
  font-weight: 300;
  flex-shrink: 0; /* 줄어들지 않도록 설정 */

  transition: all 0.2s ease-in-out;
  user-select: none;

  &:last-child {
    border: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.MODAL_BG};
    opacity: 0.9;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 42px;
    font-size: 14px;
  }
`;

export default SelectBox;
