import styled, { keyframes } from "styled-components";

export const DogContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 195px;
  height: 253px;
  z-index: 100;
  transform: scale(0.9);
`;

export const FrontLeftLeg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 32px;
  height: 126px;
  background-color: #fa9028;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow: hidden;
`;

export const FrontLeftFoot = styled.div`
  position: absolute;
  right: -1px;
  bottom: -10px;
  width: 35px;
  height: 22px;
  background-color: #f1f1f1;
  border-radius: 50%;
  transform: skew(20deg) rotate(-22deg);
`;

export const DogBackTorso = styled.div`
  position: absolute;
  bottom: 0;
  right: 70px;
  width: 100px;
  height: 60%;
  background-color: #ff9a29;
  border-top-left-radius: 180px;
  transform: skew(-10deg);
`;

export const DogHeadContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100%;
  background-color: #ff9a29;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 120px;
`;

const DogHeadEar = styled.div`
  position: absolute;
  top: -18px;
  width: 25px;
  height: 80px;
  background-color: #ff9a29;
`;

export const DogHeadLeftEar = styled(DogHeadEar)`
  left: 0;
  border-top-right-radius: 40px;
`;

export const DogHeadRightEar = styled(DogHeadEar)`
  right: 0;
  border-top-left-radius: 40px;
`;

const dogEyeFrames = keyframes`
  from {
    right: -2px;
    transform: rotatex(3deg);
  }
  50% {
    right: 22px;
    transform: rotatex(59deg);
  }
  to {
    right: -2px;
    transform: rotatex(3deg);
  }
`;

const DogHeadAnimation = styled.div<{ $duration: number }>`
  position: absolute;
  ${props => `animation-duration: ${props.$duration}s`};
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
`;

export const DogEyesContainer = styled(DogHeadAnimation)`
  top: 25px;
  right: -2px;
  width: 100%;
  height: 9px;
  transform: rotatex(9deg);
  animation-name: ${dogEyeFrames};
`;

const DogEye = styled.div`
  position: absolute;
  width: 12px;
  height: 100%;
  background-color: #111;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const DogEyeLeft = styled(DogEye)`
  left: 30px;
`;

export const DogEyeRight = styled(DogEye)`
  left: 75px;
`;

export const DogFace = styled.div`
  position: absolute;
  top: 44px;
  width: 100%;
  height: 42px;
`;

const dogFaceFrames = keyframes`
  from {
    border-radius: 20px 20px 42px 38px;
    right: -10px;
  }
  20% {
    border-radius: 20px 20px 42px 38px;
  }
  25% {
    border-radius: 20px 20px 42px 38px;
    width: 64px;
  }
  30% {
    border-radius: 20px 20px 42px 42px;
    width: 65px;
  }
  45% {
    border-radius: 20px 20px 42px 42px;
  }
  50% {
    border-radius: 20px 20px 42px 42px;
    right: 46px;
  }
  55% {
    border-radius: 20px 20px 42px 42px;
  }
  70% {
    border-radius: 20px 20px 42px 42px;
    width: 64px;
  }
  75% {
    border-radius: 20px 20px 42px 42px;
  }
  90% {
    border-radius: 20px 20px 42px 42px;
  }
  to {
    border-radius: 20px 20px 42px 38px;
    right: -10px;
    width: 65px;
  }
`;

export const DogFaceWhite = styled(DogHeadAnimation)`
  right: -10px;
  width: 65px;
  height: 100%;
  background: #fff7ee;
  border-radius: 20px 20px 42px 38px;
  animation-name: ${dogFaceFrames};
`;

const dogNoseFrames = keyframes`
  from {
    border-radius: 0 0 0 38px;
    right: 0;
    width: 17px;
  }
  5% {
    border-bottom-left-radius: 38px;
    border-bottom-right-radius: 38px;
  }
  25% {
    width: 23px;
  }
  30% {
    width: 17px;
  }
  45% {
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 38px;
  }
  50% {
    border-radius: 0 0 38px 0;
    right: 79%;
  }
  65% {
    border-radius: 0 0 18px 18px;
  }
  95% {
    border-radius: 0 0 0 38px;
  }
  to {
    border-radius: 0 0 0 38px;
    right: 0;
  }
`;

export const DogNose = styled(DogHeadAnimation)`
  right: 0;
  top: 0;
  width: 17px;
  height: 14px;
  background: #000;
  border-radius: 0 0 0 38px;
  animation-name: ${dogNoseFrames};
`;

export const DogCollar = styled.div`
  position: absolute;
  top: 92px;
  width: 100%;
  height: 10px;
  background-color: #c64f3c;
`;

export const DogTailContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 24.5px;
  height: 114px;
  background-color: #ff9a29;
`;

const DogTail = styled.div`
  position: absolute;
`;

export const DogTailRight = styled(DogTail)`
  top: -38px;
  left: -28px;
  width: 12px;
  height: 70px;
  border-radius: 0 32px 0 0;
  border: 22px solid transparent;
  border-right-color: #ff9a29;
  transform: skew(0deg) rotate(-1deg) rotatey(1deg) skewy(-26deg);
`;

const dogTailMiddleFrames = keyframes`
  from {
    top: -23px;
  }
  50% {
    top: -27px;
  }
  to {
    top: -23px;
  }
`;

export const DogTailMiddle = styled(DogTail)`
  top: -23px;
  left: -27px;
  width: 14px;
  height: 9px;
  border-radius: 1000px;
  border: 12px solid transparent;
  border-right-color: #ff9a29;
  transform: skew(-7deg) rotate(-74deg) rotatey(1deg) skewy(-2deg) scale(2);
  animation: ${dogTailMiddleFrames} 150ms linear infinite;
`;

export const DogTailLeft = styled(DogTail)`
  top: -34px;
  left: -15px;
  width: 0;
  height: 14px;
  border-radius: 0 32px 0 0;
  border: 15px solid transparent;
  border-right-color: #ff9a29;
`;

const dogTailTopFrames = keyframes`
  from {
    top: -43px;
  }
  50% {
    top: -48px;
  }
  to {
    top: -43px;
  }
`;

export const DogTailTop = styled(DogTail)`
  top: -43px;
  left: -27px;
  width: 20px;
  height: 24px;
  background-color: #f1f1f2;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  transform: skew(-2deg) rotate(-12deg);
  animation: ${dogTailTopFrames} 150ms linear infinite;
`;

export const BackLeg = styled(DogTail)`
  position: absolute;
  left: 41px;
  bottom: 9px;
  width: 31px;
  height: 41px;
  background-color: #ff9a29;
  border: 4px solid transparent;
  border-top-color: #e48121;
  border-top-right-radius: 54px;
  transform: skew(10deg) rotate(41deg);
`;

export const BackLegFoot = styled(DogTail)`
  position: absolute;
  left: 4px;
  bottom: -14px;
  width: 46px;
  height: 29px;
  background-color: #f1f1f1;
  border-radius: 50%;
  transform: skew(-15deg) skewx(18deg) rotate(-49deg);
`;

export const FrontRightLeg = styled.div`
  position: absolute;
  right: 39px;
  bottom: 0;
  width: 32px;
  height: 89px;
  background-color: #fa9028;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  overflow: hidden;
`;

export const FrontRightFoot = styled.div`
  position: absolute;
  left: -1px;
  bottom: -10px;
  width: 35px;
  height: 22px;
  background-color: #f1f1f1;
  border-radius: 50%;
  transform: skew(20deg) rotate(-22deg);
`;
