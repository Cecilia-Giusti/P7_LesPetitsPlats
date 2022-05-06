//UTILS
import { GetRecipes } from "../models/GetRecipes.js";
import { RecipeCard } from "../templates/RecipeCard.js";

/**Fonction pour créer le tableaux des photographes
 * @param {Array} recipes - Toutes les recettes
 */
export function displayData(recipes) {
  const recipesSection = document.querySelector("#recipes");
  //Utilisation du constructor pattern pour récupérer les différents items
  if (recipes.length >= 1) {
    recipes.forEach((recipe) => {
      const getRecipe = new GetRecipes(recipe);
      const Template = new RecipeCard(getRecipe);
      recipesSection.appendChild(Template.createRecipeCard());
    });
  } else {
    errorMessage(
      `Aucune recette ne correspond à votre critère... Vous pouvez chercher "tartes aux pommes", "poisson", etc...`
    );
  }
}

/**  Réinitialisation de la galerie*/
export function clearGallery() {
  const recipesSection = document.querySelector("#recipes");
  recipesSection.innerHTML = "";
}

/** Afficher un message d'erreur
 * @param {string} errorMessage - Message d'erreur à afficher
 */
export function errorMessage(errorMessage) {
  const recipesSection = document.querySelector("#recipes");

  const errorSearch = document.createElement("p");
  errorSearch.setAttribute("class", "errorSearch");
  errorSearch.innerHTML = errorMessage;
  recipesSection.appendChild(errorSearch);
}
