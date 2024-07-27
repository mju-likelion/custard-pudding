import { css } from 'styled-components';

const title = {
  title: () => css`
    font-size: 36px;
    font-weight: 700;
  `,
};

const subtitle = {
  subtitle: () => css`
    font-size: 24px;
    font-weight: 700;
  `,
};

const btnTxt = {
  // BIG_BTN_TXT
  bigBtnTxt: () => css`
    font-size: 32px;
    font-weight: 500;
  `,
  // SMALL_BTN_TXT
  smallBtnTxt: () => css`
    font-size: 16px;
    font-weight: 500;
  `,
};

const bodyTxt = {
  // DEFAULT_TXT
  defaultTxt: () => css`
    font-size: 16px;
    font-weight: 500;
  `,
  // BIG_TXT
  bigTxt: () => css`
    font-size: 20px;
    font-weight: 500;
  `,
  // SMALL_TXT
  smallTxt: () => css`
    font-size: 14px;
    font-weight: 300;
  `,
};

const errorTxt = {
  // SMALL_ERROR_TXT
  smallErrorTxt: () => css`
    font-size: 10px;
  `,
};

const mobileBodyTxt = {
  // M_DEFAULT_TXT
  mDefault: () => css`
    font-size: 12px;
    font-weight: 500;
  `,
  // M_SMALL_TXT
  mSmall: () => css`
    font-size: 10px;
    font-weight: 300;
  `,
};

export const typographies = {
  ...title,
  ...subtitle,
  ...btnTxt,
  ...bodyTxt,
  ...errorTxt,
  ...mobileBodyTxt,
};
