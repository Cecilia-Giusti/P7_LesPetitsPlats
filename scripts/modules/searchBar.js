import { Research } from "../Class/Research.js";
import { gallery, displayData } from "./gallery.js";
import { clearGallery } from "./gallery.js";
import { errorMessage } from "../utility/utils.js";

/** Fonction pour initialiser la recherche dans la barre de recherche
 * @param {Array} recipes - Les recettes
 */
export function searchBar(recipes) {
  // Si l'utilisateur cherche dans la barre de recherche en premier
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
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();
      gallery(newRecipes);
      return newRecipes;
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
      displayData(recipes);
    }
  });

  // Evenement à l'envoi de la recherche
  researchForm.addEventListener("input", (event) => {
    event.preventDefault();

    //Valeur de la recherche
    const research = researchInput.value;

    if (research.length >= 3) {
      // Récupérer les recettes correspondant à la recherche
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();
      gallery(newRecipes);
      return newRecipes;
    } else {
      gallery(recipes);
    }
  });
}
