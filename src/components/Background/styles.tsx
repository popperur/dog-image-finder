import styled, { keyframes } from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: #2b333f;
`;

export const BackgroundBlock = styled.div`
  position: relative;
  top: 0;
  height: 91%;
  width: 90%;
  max-width: 820px;
  padding-top: 5%;
  margin: auto;
  transform: scale(1);
  transition: all 1s;
`;

export const ShootingStarContainer = styled.div`
  position: absolute;
  top: 0;
  height: 51%;
  width: 55%;
`;

const shootingStarFrames = keyframes`
  from {
    height: 20px;
    opacity: 1;
    top: -20%;
    left: -20%;
    transform: rotate(130deg) scale(1);
  }
  25% {
    height: 120px;
    transform: rotate(130deg) scale(1);
  }
  30% {
    height: 0;
    top: 110%;
    left: 100%;
  }
  35% {
    height: 0;
    transform: rotate(130deg) scale(1);
  }
  50% {
    height: 0;
    top: 110%;
    left: 100%;
    transform: rotate(130deg) scale(0);
  }
  to {
    opacity: 0;
  }
`;

export const ShootingStar = styled.div<{ $duration?: number }>`
  position: relative;
  top: -20%;
  left: -20%;
  height: 80px;
  width: 2px;
  background-color: #fff;
  box-shadow: 0 0 30px #fff;
  transform-origin: 10% 0;
  transform: rotate(130deg) scale(0);
  animation: ${shootingStarFrames} ease-in;
  ${props => props.$duration && `animation-duration: ${props.$duration}s`};
`;

export const DogHouseContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 27%;
  width: 344px;
  height: 271px;
  z-index: 90;
`;

export const RoofLeft = styled.div`
  position: absolute;
  top: 0;
  left: -16px;
  width: 253px;
  height: 141px;
  background-color: #1e4857;
  transform: skew(-33deg);
  border-right: 8px solid #4d4a55;
  border-bottom: 8px solid #4d4a55;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const RoofRight = styled.div`
  position: absolute;
  top: 0;
  left: 37px;
  width: 292px;
  height: 140px;
  background-color: #1a3140;
  transform: skew(30deg);
  border-top-left-radius: 100%;
  border-top-right-radius: 12px;
  border-right: 8px solid #4d4a55;
  border-top: 8px solid #4d4a55;
`;

export const RoofRightWall = styled.div`
  position: absolute;
  top: 0;
  left: 32px;
  width: 240px;
  height: 140px;
  background-color: #8c2c1f;
  transform: skew(0deg);
  border-bottom-right-radius: 16px;
`;

export const WallLeft = styled.div`
  position: absolute;
  bottom: 0;
  width: 180px;
  height: 83%;
  background-color: #622224;
  border-top-left-radius: 5px;
`;

export const WallRight = styled.div`
  position: absolute;
  bottom: 0;
  right: -1px;
  width: 165px;
  height: 49%;
  background-color: #8c2c1f;
`;

export const WallRightDoor = styled.div`
  position: absolute;
  top: 6%;
  left: 25px;
  height: 81%;
  width: 70%;
  background-color: #642220;
  border-radius: 50%;
  box-shadow: -14px 0 0 #5e2c2d inset;
`;

export const Ground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12px;
  background-color: #020303;
  border-radius: 20px;
  z-index: 110;
`;
