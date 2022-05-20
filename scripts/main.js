import { recipes } from "../data/recipes.js";
import { crossOpen, crossClose } from "./utility/utils.js";
import { searchBar } from "./modules/searchBar.js";
import { gallery } from "./modules/gallery.js";
import { openList, closeList } from "./utility/openCloseTagsList.js";

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  const tagsBtn = document.querySelectorAll(".tags__button");

  // Initiation de la galerie des recettes
  gallery(recipes);

  // Ouvrir et fermer les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      button.innerHTML = "";
      if (button.getAttribute("class") != "tags__button open") {
        crossOpen(button);
        openList(button);
      } else {
        crossClose(button);
        closeList(button);
      }
    })
  );

  // DON'T - Cheminement

  searchBar(recipes);

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
