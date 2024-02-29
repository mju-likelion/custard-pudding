import styled from 'styled-components';
import { HOMEWORK_DATA } from '../../pages/ApplyWrite/data/HomeworkData';

const HomeworkBox = ({
  selectedPart,
  register,
  files,
  setFiles,
  errors,
  setFileLink,
}) => {
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const onClick = (e) => {
    e.preventDefault();
    setFiles({});
    setFileLink('');
    const fileInput = document.getElementById('file');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <>
      <Title>{HOMEWORK_DATA[selectedPart].title}</Title>
      {selectedPart === 'WEB' && (
        <WebInput>
          <WebHomeworkWrapper $isExistFile={!!files[0]?.name}>
            <FileInputLabel htmlFor="file">
              {files.length > 0 ? files[0]?.name : '파일 업로드'}
            </FileInputLabel>
          </WebHomeworkWrapper>
          <FileInput
            key={files.length === 0 ? 'empty' : 'loaded'} // 파일 상태에 따라 key 값 변경
            id="file"
            name="file"
            type="file"
            accept=".zip"
            onChange={(e) => handleFileChange(e)}
          />
          {files.length > 0 && (
            <RemoveButton onClick={(e) => onClick(e)}>삭제하기</RemoveButton>
          )}
        </WebInput>
      )}
      {selectedPart === 'SERVER' && (
        <ServerHomeworkInput {...register('link')} />
      )}
      {selectedPart === 'SERVER' && (
        <InfoHelperText $errors={errors['link']}>
          {errors['link']?.message}
        </InfoHelperText>
      )}
      <HomeworkHelperText>
        {HOMEWORK_DATA[selectedPart].taskHelperText}
      </HomeworkHelperText>
      <HomeworkHelperText>
        {HOMEWORK_DATA[selectedPart].LinkHelperText}
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
const WebInput = styled.div`
  display: flex;
  gap: 10px;
`;
const WebHomeworkWrapper = styled.div`
  width: 244px;
  height: 30px;
  border-radius: 8px;
  border: 1px dashed
    ${({ $isExistFile, theme }) =>
      $isExistFile ? '#434580' : theme.colors.MODAL_BG};

  background-color: ${({ theme }) => theme.colors.CARD_BG};
  padding: 10px 16px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 360px;
    height: 42px;
    padding: 14px;
    border: 2px dashed
      ${({ $isExistFile, theme }) =>
        $isExistFile ? '#434580' : theme.colors.MODAL_BG};
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
  font-size: 10px;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  @media ${({ theme }) => theme.devices.TABLET} {
    height: 42px;
    padding: 14px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    height: 56px;
    padding: 20px 28px;
    font-size: 18px;
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
const RemoveButton = styled.button`
  width: 100px;
  height: 40px;
  color: #6b6b6b;
  border-radius: 8px;
  border: 2px solid #6b6b6b;
`;
const HomeworkHelperText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 300;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.DISABLE_BTN};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 10px;
    font-size: 16px;
  }
`;
const InfoHelperText = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 9px;
  font-weight: 300;
  visibility: ${({ $errors }) => ($errors ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.HOVER_BTN};
  @media ${({ theme }) => theme.devices.TABLET} {
    margin-top: 15px;
    font-size: 15px;
  }
`;
export default HomeworkBox;
