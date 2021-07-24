import React from "react";
import Navbar from "../../components/navbar";
import FlexGrid from "../../components/flex-grid";
// import { useSelector } from "react-redux";

import { VerFlexContainer } from "../../styles/Utils";

function Mission() {
  return (
    <VerFlexContainer style={flexContainerStyles}>
      <Navbar></Navbar>
      <FlexGrid style={gridStyles}>Mission Falcone </FlexGrid>
    </VerFlexContainer>
  );
}

const flexContainerStyles = {
  minHeight: "100vh",
};

const gridStyles = {
  flexGrow: 1,
  width: "100%",
};

export default Mission;
