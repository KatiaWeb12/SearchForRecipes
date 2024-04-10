import { API_URL } from "./api_config";
async function getAllCategories() {
   const response = await fetch(`${API_URL}categories.php`)
   return response.json()
}
async function getDishesByCategories(category){
   const response = await fetch(`${API_URL}/filter.php?c=${category}`)
   return response.json()
}
async function getRecipeById(dishId){
   const response = await fetch(`${API_URL}/lookup.php?i=${dishId}`)
   return response.json()
}
export { getAllCategories, getDishesByCategories, getRecipeById};
