export type IPartKey = 'WEB' | 'SERVER';
// export type IHOMEWORK_DATA = Record<IPart, { [key: string]: any }>;
export type IHOMEWORK_DATA = Record<
  IPartKey,
  { title: string; taskHelperText: string; LinkHelperText?: string }
>;

export const HOMEWORK_DATA: IHOMEWORK_DATA = {
  WEB: {
    title: '자기소개 페이지를 첨부해주세요 (웹파트)',
    taskHelperText: '※ 학번.zip 파일 형식으로 첨부해주세요.',
  },
  SERVER: {
    title: '지원 과제 Repo 링크를 남겨주세요 (서버 파트)',
    taskHelperText: '※ 지원 기간이 지난 후의 commit 기록은 반영되지 않습니다.',
    LinkHelperText:
      '※ 다른 주소가 아닌 GitHub repository 링크 혹은 구글 드라이브 링크(액세스 권한-링크가 있는 모든 사용자)를 첨부해주세요.',
  },
};
