import React from "react";
import Navbar from "../../components/navbar";
import FlexGrid from "../../components/flex-grid";
import Button from "../../components/button";

import { ReactComponent as Planet1 } from "../../assets/planet-1.svg";
import { ReactComponent as Planet2 } from "../../assets/planet-2.svg";
import { ReactComponent as Planet3 } from "../../assets/planet-3.svg";
import { ReactComponent as Planet4 } from "../../assets/planet-4.svg";
import { ReactComponent as Planet5 } from "../../assets/planet-5.svg";
import { ReactComponent as Planet6 } from "../../assets/planet-6.svg";

import { VerFlexContainer } from "../../styles/Utils";

import { useSelector } from "react-redux";
import InfoCard from "../../components/info-card";

const flexContainerStyles = {
  minHeight: "100vh",
};

const gridStyles = {
  flexGrow: 1,
  width: "100%",
};

const planetImages = [Planet1, Planet2, Planet3, Planet4, Planet5, Planet6];

function Planets() {
  const planets = useSelector((state) => state.planets).planets;
  const planetCards = planets.map((pl, index) => {
    const PlanetSvg = planetImages[index];
    return (
      <InfoCard>
        <PlanetSvg />
        <h2> {pl.name} </h2>
        <span>Distance: {pl.distance} megamiles</span>
      </InfoCard>
    );
  });

  return (
    <VerFlexContainer style={flexContainerStyles}>
      <Navbar></Navbar>
      <FlexGrid style={gridStyles}>{planetCards}</FlexGrid>
      <Button to="mission"> Back to Mission </Button>
    </VerFlexContainer>
  );
}

export default Planets;
