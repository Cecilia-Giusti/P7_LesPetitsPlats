import { Research } from "../Class/Research.js";

/**Fonction pour instancier la Class de recherche
 * @param {array} recipes - Les recettes
 * @param {string} research - La recherche
 * @return {array} Les recettes correspondantes à la recherche
 */
export function searchBar(recipes, research) {
  const recipesResearch = new Research(recipes, research);
  const newRecipes = recipesResearch.researchSort();
  return newRecipes;
}
