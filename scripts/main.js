import { recipes } from "../data/recipes.js";
import { errorMessage } from "./utility/utils.js";
import { searchBar } from "./utility/searchBar.js";
import { clearGallery, gallery, displayData } from "./utility/gallery.js";
import { initTagsList } from "./utility/openCloseTagsList.js";

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Initiation de la galerie des recettes
  displayData(recipes);

  // initiation des listes de tags
  const tagsInput = document.querySelectorAll(".tags__input");
  const tagsBtn = document.querySelectorAll(".tags__button");

  // Ouvrir et fermer les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      initTagsList(button, recipes);
    })
  );

  // Evenement lors de la recherche d'un tags
  tagsInput.forEach((input) =>
    input.addEventListener("input", function (e) {
      e.preventDefault();
      console.log(input.value); // Valeur de l'input pour la recherche
    })
  );

  // DON'T - Cheminement

  // Si l-utilisateur cherche dans la barre de recherche en premier
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Evenement à l'envoi de la recherche
  researchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //Valeur de la recherche
    const research = researchInput.value;

    // Vérification de la condition de 3 lettres
    const regexSup3letters = new RegExp(
      "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
    );

    if (regexSup3letters.test(research)) {
      // Récupérer les recettes correspondant à la recherche
      const newRecipes = searchBar(recipes, research);
      gallery(newRecipes);
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
      displayData(recipes);
    }
  });

  //Si la barre de recherche est vide, on réinitialise
  researchForm.addEventListener("input", (e) => {
    e.preventDefault();
    if (e.data == null || e.data == undefined) {
      gallery(recipes);
    }
  });

  // S'il choisit un tag

  // S'il écrit dans un tag

  // Si l'utilisateur tape dans les tags
  // Et qu'il fait la recherche ensuite ou choisit un tag
  // Et choisit l'autre option ensuite

  // Si l'utilsateur choisit un tag
  // Et qu'il fait la recherche ensuite ou tape un tag
  // Et choisit l'autre option ensuite
}

init();
