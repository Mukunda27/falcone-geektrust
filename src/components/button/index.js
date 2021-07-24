import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  border-radius: calc(var(--border-radius) / 2);
  align-self: center;
  margin: 2rem 0;

  &::after {
    background-color: var(--color-secondary);
    transition: transform 0.25s ease-in;
    content: "";
    position: absolute;
    border-radius: calc(var(--border-radius) / 2);

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1.02);
  }
`;

const StyledLink = styled(NavLink)`
  color: var(--color-text);
  text-decoration: none;

  display: inline-block;
  padding: 1rem 2rem;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function Button({ to, children, ...delegated }) {
  return (
    <Wrapper>
      <StyledLink to={to} {...delegated}>
        {children}
      </StyledLink>
    </Wrapper>
  );
}

export default Button;
