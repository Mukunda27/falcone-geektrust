import { configureStore } from "@reduxjs/toolkit";

import planetsReducer from "./planetsSlice";
import vehiclesReducer from "./vehiclesSlice";

const store = configureStore({
  reducer: {
    planets: planetsReducer,
    vehicles: vehiclesReducer,
  },
});

export default store;