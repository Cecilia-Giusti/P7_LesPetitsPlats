// BARRE DE RECHERCHE
import { Research } from "../Class/Research.js";

export function searchBar(recipes, research) {
  // Récupérer les recettes de la recherche
  const recipesResearch = new Research(recipes, research);
  const newRecipes = recipesResearch.researchSort();
  return newRecipes;
}
