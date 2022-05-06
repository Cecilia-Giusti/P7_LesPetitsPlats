import { recipes } from "../data/recipes.js";

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Création du tableau des recettes
  displayData(recipes);

  //Recherche des recettes via la barre de recherche Algo 1
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Evenement à l'envoi de la recherche
  researchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //Valeur de la recherche
    const research = researchInput.value;

    // Vérification de la condition de 3 lettres
    const regexSup3letters = new RegExp(
      "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°]{3,}$"
    );

    if (regexSup3letters.test(research)) {
      // Récupérer les recettes de la recherche
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();

      //Création de la nouvelle galerie à partir de la recherche
      clearGallery();
      displayData(newRecipes);
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
    }
  });
}

init();
