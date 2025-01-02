const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * GET request to a specific endpoint
 * @param {string} endpoint
 * @returns {Promise<any>}
 */
const apiCall = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API Call Error:", error.message);
    throw error;
  }
};

export const getCategories = () => apiCall("list.php?c=list");
export const searchMeals = (searchTerm) =>
  apiCall(`search.php?s=${searchTerm}`);
export const getMealsByCategory = (category) =>
  apiCall(`filter.php?c=${category}`);
export const getMealDetails = (idMeal) => apiCall(`lookup.php?i=${idMeal}`);
