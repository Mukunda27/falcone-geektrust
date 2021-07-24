import React from "react";

import { Nav, NavLink, NavTitle } from "./styles";
import { HorFlexContainer } from "../../styles/Utils";

function Navbar() {
  return (
    <Nav as="nav" justify="space-between">
      <NavTitle href="/">
        <span>Mission</span>
        <span>Falcone</span>
      </NavTitle>
      <HorFlexContainer>
        <NavLink to="planets">Planets</NavLink>
        <NavLink to="vehicles">Vehicles</NavLink>
      </HorFlexContainer>
    </Nav>
  );
}

export default Navbar;
