import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { GRADE_DATA } from '../../pages/ApplyWrite/data/SelectGradeData';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';
import { DefaultValuesType } from 'pages/ApplyWrite/data/HookFormDefaultData';

export interface MajorDataItem {
  id: string;
  name: string;
  sequence: number;
}

interface SelectboxProps {
  name: 'grade' | 'majors';
  setValue: UseFormSetValue<DefaultValuesType>;
  majorData: MajorDataItem[];
  getValues: UseFormGetValues<DefaultValuesType>;
  label: string;
  hasError?: boolean;
}

const AllContainer = styled.div`
  width: 226px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media ${({ theme }) => theme.size.tablet} {
    width: 350px;
    height: 42px;
    gap: 17px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 369px;
  }
`;
const InfoLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const SelectWrapper = styled.div<{ $isOpen: boolean; hasError?: boolean }>`
  &::after {
    content: ${({ $isOpen }) => ($isOpen ? '"∧"' : '"∨"')};
    position: absolute;
    right: 10px;
    font-size: 10px;
    font-weight: 300;
    color: #939393;
    @media ${({ theme }) => theme.size.tablet} {
      right: 20px;
      font-size: 16px;
    }
  }

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  border: ${({ hasError, theme }) =>
    hasError ? `1px solid ${theme.colors.pink200}` : 'none'};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background300};
  padding: 0 10px;
  font-size: 10px;

  @media ${({ theme }) => theme.size.tablet} {
    padding: 0 18px;
    font-size: 14px;
  }
`;
const SelectOptions = styled.div<{ $isScroll: boolean }>`
  width: 184px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px 4px;
  background-color: ${({ theme }) => theme.colors.background300};

  position: absolute;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 99;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background200};
    border-radius: 10px;
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background300};
  }
  height: 178px;
  cursor: pointer;
  @media ${({ theme }) => theme.size.tablet} {
    width: 294px;
    height: 262px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 313px;
  }
`;
const Option = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background200};
  font-size: 10px;
  font-weight: 300;

  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  user-select: none;

  &:last-child {
    border: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.background200};
    opacity: 0.9;
  }
  @media ${({ theme }) => theme.size.tablet} {
    height: 42px;
    font-size: 14px;
  }
`;

const SelectBox = ({
  name,
  setValue,
  majorData,
  getValues,
  label,
  hasError,
}: SelectboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const SelectContainerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!SelectContainerRef.current?.contains(e.target as HTMLElement)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [SelectContainerRef]);

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };
  //

  const setData = (data: string) => {
    setValue(name, data);
    setIsOpen(false);
  };

  return (
    <AllContainer>
      <InfoLabel>{label}</InfoLabel>
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
    </AllContainer>
  );
};

export default SelectBox;
