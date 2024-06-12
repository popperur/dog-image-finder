import styled, { keyframes } from "styled-components";

export const MoonGlowContainer = styled.div``;

const moonGlowFrames = keyframes`
   from {
     transform: scale(1);
   }
   50% {
     transform: scale(1.1);
   }
   to {
     transform: scale(1);
   }
`;

export const MoonGlowHolder = styled.div<{ $styles?: string[] }>`
  position: absolute;
  background-color: #f1f1f1;
  border-radius: 50%;
  opacity: 0.1;
  transition: opacity 0.3s;
  animation: ${moonGlowFrames} infinite;
  ${props => props.$styles && props.$styles.join(";")};
`;
