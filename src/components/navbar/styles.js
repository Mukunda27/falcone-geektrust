import styled from "styled-components";
import { HorFlexContainer } from "../../styles/Utils";
import { Link } from "react-router-dom";

export const Nav = styled(HorFlexContainer)`
  padding: 1rem 2rem;
  color: var(--color-text);
  width: 100%;
`;

export const NavTitle = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  span {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  padding: 0 0.25rem;
  margin: 0 0.75rem;
  color: var(--color-text);
  text-decoration: none;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: var(--color-primary);
    opacity: 0.7;

    transition: height 0.2s ease-out;
  }

  &:hover {
    &::after {
      height: 10%;
    }
  }
`;
