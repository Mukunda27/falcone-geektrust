import React from "react";

import styled from "styled-components";

function SelectionItem(props) {
  const { children, clicked, ...delegatted } = props;

  return (
    <ItemWrapper onClick={clicked} {...delegatted}>
      {children}
    </ItemWrapper>
  );
}

export const ItemWrapper = styled.span`
  font-size: 0.9rem;
  padding: 10px;

  background-color: ${(props) =>
    props.selected ? "var(--color-secondary)" : "transparent"};
  border: ${(props) =>
    props.selected ? "none" : "1px solid var(--color-primary)"};
  color: var(--color-text);
  cursor: pointer;
`;

export default SelectionItem;
