import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchItems } from "../../services/api-fetch";
import { VEHICLES_API } from "../../api-endpoint";

export const getAllVehiclesAsync = createAsyncThunk(
  "vehicles/getAllVehiclesAsync",
  async () => {
    const data = await fetchItems(VEHICLES_API);
    return { data };
  }
);

const vehiclesSlice = createSlice({
  name: "planets",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getAllVehiclesAsync.fulfilled]: (state, action) => {
      return action.payload.data;
    },
  },
});

export default vehiclesSlice.reducer;
