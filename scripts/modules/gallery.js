import { Recipes } from "../models/Recipes.js";
import { RecipeCard } from "../templates/RecipeCard.js";
import { errorMessage } from "../utility/utils.js";
import { tagsUtils, clearTagsLists } from "../utility/tagsUtils.js";
import {
  applianceList,
  createLists,
  ingredientList,
  ustensilsList,
} from "./Lists.js";
import { searchTagsInput } from "../utility/searchTagsInput.js";

/**Fonction pour créer le tableaux des photographes
 * @param {Array} recipes - Toutes les recettes
 */
export function displayData(recipes) {
  const recipesSection = document.querySelector("#recipes");
  //Utilisation du constructor pattern pour récupérer les différents items
  if (recipes.length >= 1) {
    recipes.forEach((recipe) => {
      const getRecipe = new Recipes(recipe);
      const Template = new RecipeCard(getRecipe);
      recipesSection.appendChild(Template.createRecipeCard());
    });
  } else {
    clearGallery();
    errorMessage(
      `Aucune recette ne correspond à votre critère... Vous pouvez chercher "tarte aux pommes", "poisson", etc...`
    );
  }
}

/**  Réinitialisation de la galerie*/
export function clearGallery() {
  const recipesSection = document.querySelector("#recipes");
  recipesSection.innerHTML = "";
}

/**Fonction pour créer la galerie des recettes
 * @param {array} recipes - Les recettes qui sont à afficher
 */
export function gallery(recipes) {
  clearGallery();
  displayData(recipes);

  // initiation des listes de tags
  clearTagsLists();

  const Template = tagsUtils(recipes);
  createLists(Template);

  ingredientList(recipes);
  ustensilsList(recipes);
  applianceList(recipes);

  searchTagsInput(recipes);
}
