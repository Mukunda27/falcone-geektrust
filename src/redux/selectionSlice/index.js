import { createSlice } from "@reduxjs/toolkit";

import {
  PLANETS_SECTION,
  VEHICLES_SECTION,
} from "../../components/destimation-card/selection-service";

const selectionSlice = createSlice({
  name: "selection",
  initialState: {},
  reducers: {
    selectItem: (state, action) => {
      const destinationId = action.payload.destinationId;
      updateSelectionInfo(
        state,
        destinationId,
        action.payload.section,
        action.payload.item
      );

      if (action.payload.section === PLANETS_SECTION) {
        // clear space vehice selected when the planet selection changes
        delete state[destinationId][VEHICLES_SECTION];
      }
    },
    clearSelection: (state, action) => {
      return {};
    },
  },
});

function updateSelectionInfo(state, destinationId, section, selectedItem) {
  state[destinationId] = state[destinationId] || {};
  if (
    section in state[destinationId] &&
    state[destinationId][section].id === selectedItem.id
  ) {
    //remove the selection if already selected
    delete state[destinationId][section];
  } else {
    state[destinationId][section] = selectedItem;
  }
}

export const { selectItem, clearSelection } = selectionSlice.actions;

export default selectionSlice.reducer;
