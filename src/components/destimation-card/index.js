import React from "react";
import SelectionItem from "../selection-item";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import startCase from "lodash/startCase";

import {
  PLANETS_SECTION,
  VEHICLES_SECTION,
  getAvailableItems,
  getCurrentSelectedItem,
} from "./selection-service";

import { selectItem } from "../../redux/selectionSlice";

import styled from "styled-components";
import { HorFlexContainer, VerFlexContainer } from "../../styles/Utils";

const DESTINATION_PREFIX = "destination";

function DestinationCard({ id }) {
  const planets = useSelector((state) => state.planets);
  const vehicles = useSelector((state) => state.vehicles);
  const selectionInfo = useSelector((state) => state.selection);
  const dispatch = useDispatch();
  const destNum = id;
  id = DESTINATION_PREFIX + id;

  const planetsSection =
    planets &&
    selectionInfo &&
    createCardSection(planets, PLANETS_SECTION, selectionInfo, id, dispatch);
  const vehiclesSection =
    vehicles &&
    selectionInfo &&
    createCardSection(vehicles, VEHICLES_SECTION, selectionInfo, id, dispatch);

  return (
    <VerFlexContainer>
      <CardWrapper>
        <h2>Destination {destNum}</h2>
        {planetsSection}
        {vehiclesSection}
      </CardWrapper>
    </VerFlexContainer>
  );
}

function createCardSection(list, sectionName, selectionInfo, id, dispatch) {
  let availableItems = getAvailableItems(list, sectionName, selectionInfo, id);
  let selectedItem = getCurrentSelectedItem(sectionName, selectionInfo, id);
  let sectionSelectable = true;
  if (sectionName === VEHICLES_SECTION) {
    //we can pick a space vehicle only if the planet has been picked for that destination
    let selectedPlanet = getCurrentSelectedItem(
      PLANETS_SECTION,
      selectionInfo,
      id
    );
    sectionSelectable = typeof selectedPlanet !== "undefined";
  }

  return (
    <CardSection sectionSelectable={sectionSelectable}>
      <h3>Pick a {sectionName}</h3>
      {!sectionSelectable && <p> (select a planet first) </p>}
      {availableItems &&
        availableItems.map((item) => {
          // handle selection item click
          const handleItemSelection = () => {
            dispatch(
              selectItem({ destinationId: id, item, section: sectionName })
            );
          };

          const isSelectedItem =
            typeof selectedItem !== "undefined" &&
            selectedItem.name === item.name;

          return (
            <SelectionItem
              selected={isSelectedItem}
              clicked={handleItemSelection}
              key={item.id}
            >
              {startCase(item.name)}
            </SelectionItem>
          );
        })}
    </CardSection>
  );
}

const CardWrapper = styled(VerFlexContainer)`
  align-self: stretch;
  background-color: var(--color-blurred-background);
  padding: 2.5rem 1.5rem;
  border-radius: var(--border-radius);
  height: auto;
  gap: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  transition: box-shadow 0.2s ease-in;

  h2 {
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    text-align: center;
  }

  &:hover {
    box-shadow: 0px 0px 8px var(--color-secondary);
  }
`;

const CardSection = styled(HorFlexContainer)`
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  pointer-events: ${(props) => (props.sectionSelectable ? "initial" : "none")};

  h3 {
    flex-basis: 100%;
    font-size: 1rem;
    font-weight: var(--font-weight-bold);
  }

  p {
    flex-basis: 100%;
    font-size: 0.7rem;
    margin-top: -1rem;
    font-weight: var(--font-weight-light);
  }
`;

export default DestinationCard;
