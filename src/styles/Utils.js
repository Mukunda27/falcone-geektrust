import styled from "styled-components";

export const HorFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
`;

export const VerFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify || "center"};
  height: 100%;
`;
