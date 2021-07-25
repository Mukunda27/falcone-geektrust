import { configureStore } from "@reduxjs/toolkit";

import planetsReducer from "./planetsSlice";
import vehiclesReducer from "./vehiclesSlice";
import selectionReducer from "./selectionSlice";

const store = configureStore({
  reducer: {
    planets: planetsReducer,
    vehicles: vehiclesReducer,
    selection: selectionReducer,
  },
});

export default store;
