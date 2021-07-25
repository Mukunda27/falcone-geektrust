/*
 * this module provides utility functions for making API calls to the backend REST API
 */

export async function fetchItems(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return data.map((item, index) => ({
        id: index,
        ...item,
        name: item.name.toLowerCase(),
      }));
    } else {
      throw Error(`Errored Response received from ${apiUrl}`);
    }
  } catch (err) {
    console.error(err);
  }
}
