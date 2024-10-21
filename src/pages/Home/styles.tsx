import styled from "styled-components";

export const BreedFilterContainer = styled.div<{ $showOnTop: boolean }>`
  display: flex;
  justify-content: center;
  padding-top: ${props => (props.$showOnTop ? "20px" : "33vh")};
`;
