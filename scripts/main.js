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

  searchBar(recipes);
}

init();
