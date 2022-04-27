// Fonction pour récuperer les données du json

/** Récupération des recettes */
async function getRecipes() {
  return fetch("./data/recipes.json")
    .then((file) => file.json())
    .then((data) => data.recipes);
}
