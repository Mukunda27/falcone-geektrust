/*
 * this module provides helper functions for items displayed in each destination card
 */

export const PLANETS_SECTION = "planet";
export const VEHICLES_SECTION = "space-vehicle";

export function getAvailableItems(list, sectionName, selectionInfo, id) {
  let allSelectedItems = getAllSelectedItems(sectionName, selectionInfo);
  let currentSelectedItem = getCurrentSelectedItem(
    sectionName,
    selectionInfo,
    id
  );

  let availableItems;
  // get all items that are not currently selected for the current destination
  if (sectionName === PLANETS_SECTION) {
    availableItems = list.filter(
      (item) =>
        (currentSelectedItem && currentSelectedItem.name === item.name) ||
        !allSelectedItems.some((selected) => selected.name === item.name)
    );
  } else if (sectionName === VEHICLES_SECTION) {
    availableItems = list.filter((item) => {
      //check if the distance to a planet is supported  and number of vehcles of a particular type excceds the total units available
      let count = allSelectedItems.filter(
        (sel) => sel.name === item.name
      ).length;
      let selectedPlanet = getCurrentSelectedItem(
        PLANETS_SECTION,
        selectionInfo,
        id
      );

      if (selectedPlanet) {
        return (
          selectedPlanet.distance <= item.max_distance &&
          (count <= item.total_no || currentSelectedItem?.name === item.name)
        );
      } else {
        return count < item.total_no;
      }
    });
  }

  return availableItems;
}

export function getCurrentSelectedItem(sectionName, selectionInfo, id) {
  let currentSelectedItem;
  if (id in selectionInfo) {
    currentSelectedItem = selectionInfo[id][sectionName];
  }

  return currentSelectedItem;
}

function getAllSelectedItems(sectionName, selectionInfo) {
  let allSelectedItems = [];
  for (let key in selectionInfo) {
    if (sectionName in selectionInfo[key]) {
      allSelectedItems.push(selectionInfo[key][sectionName]);
    }
  }

  return allSelectedItems;
}
