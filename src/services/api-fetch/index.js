/*
 * this module provides utility functions for making API calls to the backend REST API
 */

export async function fetchItems(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      return { data: [] };
    }
  } catch (err) {
    console.error(err);
  }
}
