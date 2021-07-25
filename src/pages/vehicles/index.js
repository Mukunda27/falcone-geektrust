import React from "react";
import Navbar from "../../components/navbar";
import FlexGrid from "../../components/flex-grid";
import Button from "../../components/button";
import startCase from "lodash/startCase";

import { ReactComponent as Vehicle1 } from "../../assets/rocket-1.svg";
import { ReactComponent as Vehicle2 } from "../../assets/rocket-2.svg";
import { ReactComponent as Vehicle3 } from "../../assets/spacecraft.svg";
import { ReactComponent as Vehicle4 } from "../../assets/ufo.svg";

import { VerFlexContainer } from "../../styles/Utils";

import { useSelector } from "react-redux";
import InfoCard from "../../components/info-card";

const vehicleImages = [Vehicle1, Vehicle2, Vehicle3, Vehicle4];

function Vehicles() {
  const vehicles = useSelector((state) => state.vehicles);
  const vehicleCards = vehicles.map((item, index) => {
    const VehicleSvg = vehicleImages[index];
    return (
      <InfoCard key={item.id}>
        <VehicleSvg />
        <h2> {startCase(item.name)} </h2>
        <span>Units: {item.total_no} </span>
        <span>Max Distance: {item.max_distance} megamiles</span>
        <span>Speed: {item.speed} megamiles/hour</span>
      </InfoCard>
    );
  });

  return (
    <VerFlexContainer style={flexContainerStyles}>
      <Navbar></Navbar>
      <FlexGrid style={gridStyles}>{vehicleCards}</FlexGrid>
      <Button to="mission"> Go to Mission </Button>
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

export default Vehicles;
