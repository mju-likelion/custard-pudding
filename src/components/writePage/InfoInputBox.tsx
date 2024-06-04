import styled from 'styled-components';
import { INPUT_LABEL_LIST } from '../../pages/ApplyWrite/data/InfoInputData';
import { PART } from '../../pages/ApplyWrite/data/InfoInputData';
import UserInfoInput from './UserInfoInput';
import SelectBox from './SelectBox';

export interface InputItemData {
  id: number;
  label: string;
  name: string;
  placeholder: string;
  isDisabled?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #939393;
  border-radius: 15px;
  padding: 35px 52px;
  width: 330px;
  height: 367px;
  @media ${({ theme }) => theme.size.tablet} {
    padding: 65px 105px;
    width: 560px;
    height: 656px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 68px 85px;
    width: 972px;
    height: 388px;
  }
`;
const LeftInnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${({ theme }) => theme.size.tablet} {
    gap: 28px;
  }
`;
const RightInnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${({ theme }) => theme.size.tablet} {
    gap: 32px;
  }
`;

const ApplyPartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media ${({ theme }) => theme.size.tablet} {
    gap: 17px;
  }
`;
const PartLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.size.tablet} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;
const PartBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PartBtn = styled.button<{ $select: string }>`
  width: 74px;
  height: 26px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme, $select }) =>
    $select ? theme.colors.pink100 : theme.colors.background300};

  @media ${({ theme }) => theme.size.tablet} {
    width: 116px;
    height: 42px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 130px;
    ${({ theme }) => theme.typographies.defaultTxt}
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.background300};
  margin: auto 0;
  display: block;
  @media ${({ theme }) => theme.size.desktop} {
    display: none;
  }
`;

const InfoInputBox = ({
  register,
  errors,
  selectedPart,
  handlePartClick,
  setValue,
  majorData,
  getValues,
  studentIdValue,
}) => {
  return (
    <Container>
      <LeftInnerInputBox>
        {INPUT_LABEL_LIST.left.map((item) =>
          item.name === 'grade' || item.name === 'majors' ? (
            <SelectBox
              key={item.id}
              name={item.name}
              label={item.label}
              majorData={majorData}
              getValues={getValues}
              setValue={setValue}
            />
          ) : (
            <UserInfoInput
              key={item.id}
              label={item.label}
              name={item.name}
              isDisabled={item.isDisabled}
              register={register}
              errors={errors}
              setValue={setValue}
              getValues={getValues}
              studentIdValue={studentIdValue}
              placeholder={item.placeholder}
              majorData={majorData}
            />
          ),
        )}
      </LeftInnerInputBox>
      <HorizontalLine />
      <RightInnerInputBox>
        {INPUT_LABEL_LIST.right.map((item) => (
          <UserInfoInput
            key={item.id}
            label={item.label}
            name={item.name}
            register={register}
            errors={errors}
            placeholder={item.placeholder}
            isDisabled={false}
            studentIdValue={''}
          />
        ))}
        <ApplyPartBox>
          <PartLabel>지원파트</PartLabel>
          <PartBtnBox>
            {PART.map((item) => (
              <PartBtn
                key={item.id}
                $select={selectedPart === item.partEn}
                onClick={() => handlePartClick(item.partEn)}
                type="button"
              >
                {item.partKo}
              </PartBtn>
            ))}
          </PartBtnBox>
        </ApplyPartBox>
      </RightInnerInputBox>
    </Container>
  );
};

export default InfoInputBox;
