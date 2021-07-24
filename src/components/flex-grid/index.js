import React from "react";

import stylesConfig from "../../styles/config";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  max-width: ${stylesConfig.containerMaxWidth}px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 2rem auto;
  color: var(--color-text);
  gap: 2rem;
  padding: 0 2rem;
`;

function FlexGrid({ children, ...delegated }) {
  return <Wrapper {...delegated}> {children} </Wrapper>;
}

export default FlexGrid;
