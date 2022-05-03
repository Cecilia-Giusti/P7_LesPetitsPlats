//UTILS

/**Fonction pour créer le tableaux des photographes
 * @param {Array} recipes - Toutes les recettes
 */
function displayData(recipes) {
  const recipesSection = document.querySelector("#recipes");

  //Utilisation du constructor pattern pour récupérer les différents items
  if (recipes != []) {
    recipes.forEach((recipe) => {
      const getRecipe = new GetRecipes(recipe);
      const Template = new RecipeCard(getRecipe);
      recipesSection.appendChild(Template.createRecipeCard());
    });
  } else {
    // Don't  - Message tableau vide
  }
}

/**  Réinitialisation de la galerie*/
function clearGallery() {
  const recipesSection = document.querySelector("#recipes");
  recipesSection.innerHTML = "";
}
