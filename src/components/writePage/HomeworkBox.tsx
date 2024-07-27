import styled from 'styled-components';
import {
  HOMEWORK_DATA,
  IPartKey,
} from '../../pages/ApplyWrite/data/HomeworkData';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface HomeworkBoxProps {
  selectedPart: IPartKey;
  register: UseFormRegister<any>;
  files: any;
  setFiles: any;
  errors: FieldErrors<any>;
  setFileLink: any;
}

const Title = styled.p`
  align-self: flex-start;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 500;

  @media ${({ theme }) => theme.size.tablet} {
    margin-bottom: 25px;
    ${({ theme }) => theme.typographies.defaultTxt}
  }
  @media ${({ theme }) => theme.size.desktop} {
    ${({ theme }) => theme.typographies.bigTxt}
  }
`;
const WebInput = styled.div`
  display: flex;
  gap: 10px;
`;
const WebHomeworkWrapper = styled.div<{ $isExistFile: any }>`
  width: 244px;
  height: 30px;
  border-radius: 8px;
  border: 1px dashed
    ${({ $isExistFile, theme }) =>
      $isExistFile ? '#434580' : theme.colors.background200};

  background-color: ${({ theme }) => theme.colors.background300};
  padding: 10px 16px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 360px;
    height: 42px;
    padding: 14px;
    border: 2px dashed
      ${({ $isExistFile, theme }) =>
        $isExistFile ? '#434580' : theme.colors.background200};
  }
  @media ${({ theme }) => theme.size.desktop} {
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
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background300};
  @media ${({ theme }) => theme.size.tablet} {
    height: 42px;
    padding: 14px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.size.desktop} {
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

  @media ${({ theme }) => theme.size.tablet} {
    font-size: 14px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    font-size: 16px;
  }
`;
const FileInput = styled.input`
  display: none;
`;
const RemoveButton = styled.button`
  color: #6b6b6b;
  border-radius: 8px;
  border: 2px solid #6b6b6b;
  width: 70px;
  height: 30px;
  font-size: 12px;
  @media ${({ theme }) => theme.size.tablet} {
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
  @media ${({ theme }) => theme.size.desktop} {
    width: 100px;
    height: 56px;
    font-size: 17px;
  }
`;
const HomeworkHelperText = styled.p`
  margin-top: 5px;
  font-size: 10px;
  font-weight: 300;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.background100};
  @media ${({ theme }) => theme.size.tablet} {
    margin-top: 10px;
    font-size: 16px;
  }
`;
const InfoHelperText = styled.div<{ $errors: boolean }>`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 9px;
  font-weight: 300;
  visibility: ${({ $errors }) => ($errors ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.colors.pink200};
  @media ${({ theme }) => theme.size.tablet} {
    margin-top: 15px;
    font-size: 15px;
  }
`;

const HomeworkBox = ({
  selectedPart,
  register,
  files,
  setFiles,
  errors,
  setFileLink,
}: HomeworkBoxProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFiles({});
    setFileLink('');
    const fileInput = document.getElementById('file') as HTMLInputElement;
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
        <InfoHelperText $errors={errors['link'] ? true : false}>
          <>{errors['link']?.message}</>
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

export default HomeworkBox;
