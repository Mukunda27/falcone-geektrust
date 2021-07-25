import React from "react";

import styled from "styled-components";
import { VerFlexContainer } from "../../styles/Utils";

function InfoCard({ children }) {
  return <CardWrapper>{children}</CardWrapper>;
}

const CardWrapper = styled(VerFlexContainer)`
  align-self: flex-start;
  background-color: var(--color-blurred-background);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  transition: box-shadow 0.2s ease-in;
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

  &:hover {
    box-shadow: 0px 0px 8px var(--color-secondary);
  }
`;

export default InfoCard;
