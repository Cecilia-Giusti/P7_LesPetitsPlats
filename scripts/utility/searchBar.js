import { Research } from "../Class/Research.js";

/**Fcontion pour instancier la Class de recherche
 * @param {array} recipes - Les recettes
 * @param {string} research - La recherche
 */
export function searchBar(recipes, research) {
  // Récupérer les recettes de la recherche
  const recipesResearch = new Research(recipes, research);
  const newRecipes = recipesResearch.researchSort();
  return newRecipes;
}
