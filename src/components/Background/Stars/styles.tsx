import styled, { keyframes } from "styled-components";

export const StarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 42%;
`;

const starTwinkleFrames = keyframes`
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
`;

export const StarHolder = styled.div<{ $styles?: string[] }>`
  position: relative;
  background: #f1f1f1;
  border-radius: 50%;
  animation: ${starTwinkleFrames} 2s ease-in-out infinite;
  ${props => props.$styles && props.$styles.join(";")};
`;
