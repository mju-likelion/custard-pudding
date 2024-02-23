import SUCCESS from '../../assets/imgs/check_success.svg';
import FAILED from '../../assets/imgs/check_fail.svg';
import REJECTED from '../../assets/imgs/apply_reject.svg';

export const resultData = {
  check_success: {
    content: '님의\n 지원이 정상적으로\n 확인되었습니다.',
    img: SUCCESS,
  },
  check_failed: {
    content: '님의\n 지원이 확인되지\n 않았습니다.',
    img: FAILED,
  },
  rejected: {
    content: '님의\n 지원이력이\n 이미 존재합니다.',
    img: REJECTED,
  },
};
