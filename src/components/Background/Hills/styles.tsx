import styled from "styled-components";

export const HillContainer = styled.div``;

export const HillHolder = styled.div<{ $styles?: string[] }>`
  position: absolute;
  background-color: #1f2731;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: perspective(164px) rotatex(78deg) translate3d(0px, 18px, -42px);
  ${props => props.$styles && props.$styles.join(";")};
`;

export const BackHill = styled.div`
  position: absolute;
  bottom: 0;
  right: 5%;
  height: 250px;
  width: 400px;
  background-color: #1f2731;
  border-top-left-radius: 500px;
  border-top-right-radius: 500px;
`;
