import styled from "styled-components";

export const DogImagesContainer = styled.div`
  padding: 40px;
`;

export const DogImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 40vh;
  min-height: 400px;
  border: white solid 10px;
  border-radius: 8px;
  aspect-ratio: 16/9;

  @media (max-width: 576px), (max-height: 500px) {
    height: auto;
    border-width: 7px;
  }
`;
