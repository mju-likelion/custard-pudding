import { css } from 'styled-components';

export const Theme = {
  colors: {
    HOVER_BTN: '#FF5172',
    MAIN_PINK: '#F48096',
    DISABLE_BTN: '#939393',
    WHITE_TXT: '#F9F3F3',
    MODAL_BG: '#3B3B3B',
    CARD_BG: '#2B2B2B',
    INPUT_BG: '#242424',
    PAGE_BG: '#1C1B1A',
  },
  typographies: {
    TITLE: css`
      font-size: 36px;
      font-weight: 700;
    `,
    SUB_TITLE: css`
      font-size: 24px;
      font-weight: 700;
    `,
    DEFAULT_TXT: css`
      font-size: 16px;
      font-weight: 500;
    `,
    BIG_TXT: css`
      font-size: 20px;
      font-weight: 500;
    `,
    SMALL_TXT: css`
      font-size: 14px;
      font-weight: 300;
    `,
    BIG_BTN_TXT: css`
      font-size: 32px;
      font-weight: 500;
    `,
    SMALL_BTN_TXT: css`
      font-size: 16px;
      font-weight: 500;
    `,
  },
  devices: {
    DESKTOP: `(min-width: 1200px)`,
    MOBILE: `(min-width: 350px) `,
  },
};
