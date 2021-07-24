import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchItems } from "../../services/api-fetch";
import { PLANETS_API } from "../../api-endpoint";

export const getAllPlanetsAsync = createAsyncThunk(
  "planets/getAllPlanetsAsync",
  async () => {
    const data = await fetchItems(PLANETS_API);
    return data;
  }
);

const planetsSlice = createSlice({
  name: "planets",
  initialState: {
    planets: [],
    selected: [],
  },
  reducers: {},
  extraReducers: {
    [getAllPlanetsAsync.fulfilled]: (state, action) => {
      state.planets = [...action.payload.data];
      return state;
    },
  },
});

export default planetsSlice.reducer;
