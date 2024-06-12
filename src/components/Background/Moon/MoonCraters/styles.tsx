import styled, { keyframes } from "styled-components";

export const MoonCraterContainer = styled.div``;

export const MoonCraterHolder = styled.div<{ $styles?: string[] }>`
  position: absolute;
  background-color: #cadad6;
  border-radius: 50%;
  ${props => props.$styles && props.$styles.join(";")};
`;

export const MoonSignalPlayerContainer = styled.div`
  position: relative;
  top: 54px;
  left: 17px;
  color: #888;
`;

const moonSignalPlayerPulseFrames = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const MoonSignalPlayerButton = styled.div.attrs({
  role: "button",
  tabIndex: 0,
})`
  cursor: pointer;
  width: 20px;
  animation: ${moonSignalPlayerPulseFrames} 2s infinite;
`;
