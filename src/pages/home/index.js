import React from "react";

import Navbar from "../../components/navbar";

import styled from "styled-components/macro";
import { HorFlexContainer, VerFlexContainer } from "../../styles/Utils";
import MissionDescription from "./mission-description";
import MissionGraphics from "./mission-graphics";

export const MissionIntro = styled(HorFlexContainer)`
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
`;

const flexContainerStyles = {
  minHeight: "100vh",
};

function Home() {
  return (
    <VerFlexContainer style={flexContainerStyles}>
      <Navbar></Navbar>
      <MissionIntro>
        <MissionGraphics />
        <MissionDescription />
      </MissionIntro>
    </VerFlexContainer>
  );
}

export default Home;
