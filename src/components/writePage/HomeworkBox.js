import styled from 'styled-components';
import { HOMEWORK_DATA } from '../../pages/ApplyWrite/data/HomeworkData';

const HomeworkBox = ({ selectedPart, register, files, setFiles }) => {
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  return (
    <>
      <Title>{HOMEWORK_DATA[selectedPart].title}</Title>
      {selectedPart === 'WEB' && (
        <>
          <WebHomeworkWrapper>
            <FileInputLabel htmlFor="file">
              {files.length > 0 ? files[0]?.name : '파일 업로드'}
            </FileInputLabel>
          </WebHomeworkWrapper>
          <FileInput
            id="file"
            name="file"
            type="file"
            accept=".zip"
            onChange={(e) => handleFileChange(e)}
          />
        </>
      )}
      {selectedPart === 'SERVER' && (
        <ServerHomeworkInput {...register('link')} />
      )}
      <HomeworkHelperText>
        {HOMEWORK_DATA[selectedPart].helperText}
      </HomeworkHelperText>
    </>
  );
};

const Title = styled.p`
  align-self: flex-start;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.devices.TABLET} {
    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;

const WebHomeworkWrapper = styled.div`
  width: 244px;
  height: 30px;
  border-radius: 8px;
  border: 2px dashed ${({ theme }) => theme.colors.MODAL_BG};
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  padding: 10px 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 360px;
    height: 42px;
    padding: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 440px;
    height: 56px;
    padding: 20px 28px;
  }
`;

const ServerHomeworkInput = styled.input`
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 30px;
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 42px;
    padding: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 56px;
    padding: 20px 28px;
  }
`;
const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #b6b6b6;
  &:hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    font-size: 16px;
  }
`;
const FileInput = styled.input`
  display: none;
`;

const HomeworkHelperText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.DISABLE_BTN};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 10px;
    font-size: 14px;
  }
`;
export default HomeworkBox;