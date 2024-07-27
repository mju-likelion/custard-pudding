declare module 'react-confetti' {
  import { FC, CSSProperties } from 'react';

  interface ReactConfettiProps {
    width?: number;
    height?: number;
    numberOfPieces?: number;
    recycle?: boolean;
    wind?: number;
    gravity?: number;
    colors?: string[];
    opacity?: number;
    className?: string;
    style?: CSSProperties;
    tweenDuration?: number;
    initialVelocityX?: number;
    initialVelocityY?: number;
  }

  const ReactConfetti: FC<ReactConfettiProps>;

  export default ReactConfetti;
}
