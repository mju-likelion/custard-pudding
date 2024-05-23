const SUCCESS_IMG_URL =
  'https://likelion12th-apply-pages.s3.ap-northeast-2.amazonaws.com/svgs/check_success.svg';
const FAILED_IMG_URL =
  'https://likelion12th-apply-pages.s3.ap-northeast-2.amazonaws.com/svgs/check_fail.svg';
const REJECTED_IMG_URL =
  'https://likelion12th-apply-pages.s3.ap-northeast-2.amazonaws.com/svgs/apply_reject.svg';

interface ResultData {
  [key: string]: {
    content: string;
    img: string;
  };
}

export const resultData: ResultData = {
  check_success: {
    content: '님의\n 지원이 정상적으로\n 확인되었습니다.',
    img: SUCCESS_IMG_URL,
  },
  check_failed: {
    content: '님의\n 지원이 확인되지\n 않았습니다.',
    img: FAILED_IMG_URL,
  },
  rejected: {
    content: '님의\n 지원이력이\n 이미 존재합니다.',
    img: REJECTED_IMG_URL,
  },
};
