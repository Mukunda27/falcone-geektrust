import React, { useState, useLayoutEffect } from "react";

import Navbar from "../../components/navbar";
import FlexGrid from "../../components/flex-grid";
import DestinationCard from "../../components/destimation-card";

import upperFirst from "lodash/upperFirst";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearSelection } from "../../redux/selectionSlice";
import { FIND_TOKEN_API, FIND_CHECK_API } from "../../api-endpoint";
import {
  PLANETS_SECTION,
  VEHICLES_SECTION,
} from "../../components/destimation-card/selection-service";

import {
  MissionTitle,
  ButtonGroup,
  Button,
  TimeIndicator,
  createLoadingIndicator,
  createErrorIndicator,
  createFailureIndicator,
  createSuccessIndicator,
} from "./styles";

import { VerFlexContainer } from "../../styles/Utils";

const TOTAL_DESTINATIONS = 4;
const destinations = new Array(TOTAL_DESTINATIONS)
  .fill({})
  .map((item, index) => ({
    id: index + 1,
  }));

function Mission() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ done: false, success: false });
  const [error, setError] = useState(false);
  const selectionInfo = useSelector((state) => state.selection);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, [loading, result, error]);

  const destinationCards = destinations.map((des) => (
    <DestinationCard id={des.id} key={des.id} />
  ));

  // resets the selection for all destinations
  const resetSelection = () => {
    dispatch(clearSelection());
  };

  // resets the selection for all destinations
  const restartMission = () => {
    setError(false);
    setLoading(false);
    setResult({ done: false, success: false });
    dispatch(clearSelection());
  };

  // perform API call to check if the selection is successful
  const launchMission = async () => {
    try {
      setLoading(true);
      const authToken = await getAuthToken();
      const searchResult = await findFalcone(selectionInfo, authToken);
      setLoading(false);

      //validate the search response and set result accordinglr
      if (searchResult.status === "success") {
        setResult({ done: true, success: true });
      } else {
        setResult({ done: true, success: false });
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  // check if the selection is complete for all destinations
  const isValidSelection = checkSelectionValidity(selectionInfo);
  const restartBtn = (
    <ButtonGroup>
      <Button onClick={restartMission}> Restart </Button>
    </ButtonGroup>
  );

  return (
    <VerFlexContainer style={flexContainerStyles}>
      <Navbar></Navbar>
      {loading && createLoadingIndicator()}
      {error && (
        <>
          {createErrorIndicator()} {restartBtn}
        </>
      )}
      {result.done && !result.success && (
        <>
          {createFailureIndicator()} {restartBtn}
        </>
      )}
      {result.done && result.success && (
        <>
          {createSuccessIndicator()} {restartBtn}
        </>
      )}

      {/* show selection cards if no error, launch button is not clicked and result
      is not available */}
      {!loading && !error && !result.done && (
        <>
          <MissionTitle>
            Select the planets that you want to search
          </MissionTitle>
          <FlexGrid style={gridStyles}>{destinationCards} </FlexGrid>
          <TimeIndicator>
            <h2>Time Taken: {getTotalTime(selectionInfo)} hours </h2>
          </TimeIndicator>

          <ButtonGroup>
            <Button onClick={launchMission} disabled={!isValidSelection}>
              Launch
            </Button>
            <Button onClick={resetSelection}> Reset </Button>
          </ButtonGroup>
        </>
      )}
    </VerFlexContainer>
  );
}

function checkSelectionValidity(selectionInfo) {
  // check if all destination is complete
  if (Object.entries(selectionInfo).length !== TOTAL_DESTINATIONS) {
    return false;
  }

  let selectionValues = Object.values(selectionInfo);
  const sections = [PLANETS_SECTION, VEHICLES_SECTION];
  for (let sec of sections) {
    //check is each section is present in the selection info object
    let available = isSectionPresent(selectionValues, sec);
    if (!available) {
      return false;
    }
  }

  // selection is complete
  return true;
}

function isSectionPresent(selectionValues, sec) {
  let isPresent = true;
  for (let value of selectionValues) {
    isPresent = sec in value;
    if (!isPresent) {
      break;
    }
  }

  return isPresent;
}

async function getAuthToken() {
  const response = await fetch(FIND_TOKEN_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    const authToken = await response.json();
    return authToken.token;
  } else {
    throw Error("Failed while fetching auth token");
  }
}

async function findFalcone(selectionInfo, token) {
  const reqBody = {
    token,
    planet_names: getAllSelectedItems(selectionInfo, PLANETS_SECTION),
    vehicle_names: getAllSelectedItems(selectionInfo, VEHICLES_SECTION),
  };

  const response = await fetch(FIND_CHECK_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw Error("Failed while checking if search was successful");
  }
}

function getAllSelectedItems(selectionInfo, section) {
  let names = [];
  const selectionValues = Object.values(selectionInfo);
  for (let value of selectionValues) {
    if (value[section]) {
      names.push(upperFirst(value[section].name));
    }
  }

  return names;
}

function getTotalTime(selectionInfo) {
  let time = 0;
  const selectionValues = Object.values(selectionInfo);
  for (let value of selectionValues) {
    if (value[PLANETS_SECTION] && value[VEHICLES_SECTION]) {
      time += parseFloat(
        (
          value[PLANETS_SECTION].distance / value[VEHICLES_SECTION].speed
        ).toFixed(2)
      );
    }
  }

  return time;
}

const flexContainerStyles = {
  minHeight: "100vh",
};

const gridStyles = {
  flexGrow: 1,
  width: "100%",
};

export default Mission;
