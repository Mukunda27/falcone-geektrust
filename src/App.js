import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Vehicles from "./pages/vehicles";
import Planets from "./pages/planets";
import Mission from "./pages/mission";

import { useDispatch } from "react-redux";
import { getAllPlanetsAsync } from "./redux/planetsSlice";
import { getAllVehiclesAsync } from "./redux/vehiclesSlice";

import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

const AppContainer = styled.section`
  min-height: 100vh;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlanetsAsync());
    dispatch(getAllVehiclesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContainer>
      <GlobalStyles />
      <Switch>
        <Route path="/mission" component={Mission} />

        <Route path="/planets" component={Planets} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="" exact component={Home} />
        <Route path="*">
          <Redirect to="" />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
