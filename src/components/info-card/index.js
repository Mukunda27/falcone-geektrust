import React from "react";

import styled from "styled-components";

import { VerFlexContainer } from "../../styles/Utils";

const CardWrapper = styled.div`
  align-self: stretch;
  background-color: var(--color-blurred-background);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  transition: box-shadow 0.2s ease-in;

  &:hover {
    box-shadow: 0px 0px 6px var(--color-secondary);
  }
`;

const CardDetails = styled(VerFlexContainer)`
  height: auto;
  gap: 1rem;
  align-items: center;

  svg {
    width: 70%;
    height: auto;
  }

  h2 {
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    text-align: center;
  }

  span {
    text-align: center;
    font-size: 0.85rem;
  }
`;

function InfoCard({ children }) {
  return (
    <CardWrapper>
      <CardDetails>{children}</CardDetails>
    </CardWrapper>
  );
}

export default InfoCard;
