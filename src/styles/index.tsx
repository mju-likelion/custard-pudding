import { colors } from './colors';
import { size } from './size';
import { typographies } from './typographies';

export const theme = {
  colors,
  size,
  typographies,
};

export type Theme = typeof theme;

export * from './colors';
export * from './size';
export * from './typographies';
