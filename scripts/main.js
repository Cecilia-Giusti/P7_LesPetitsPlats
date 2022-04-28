import { recipes } from "../data/recipes.js";

/**Fonction pour créer le tableaux des photographes
 * @param {Array} recipes - Toutes les recettes
 */
function displayData(recipes) {
  const recipesSection = document.querySelector("#recipes");

  //Utilisation du constructor pattern pour récupérer les différents items
  recipes.forEach((recipe) => {
    const getRecipe = new GetRecipes(recipe);
    const Template = new RecipeCard(getRecipe);
    recipesSection.appendChild(Template.createRecipeCard());
  });
}

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Création du tableau des recettes
  displayData(recipes);
}

init();
