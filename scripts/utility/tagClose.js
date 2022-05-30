import { gallery } from "../modules/gallery.js";
import { tagDataset, crossClose } from "./utils.js";
import { closeList } from "./openCloseTagsList.js";
import { recipes } from "../../data/recipes.js";
import { Research } from "../Class/Research.js";
import { searchTag } from "./tagsUtils.js";

/** Fermer une liste de tags
 * @param {HTMLElement} tagsList - L'endroit où ajouter le css
 * @param {HTMLElement} input - l'input en interaction
 * @param {string} classAddListClose - css à ajouter
 */
export function crossCloseList(tagsList, input, classAddListClose) {
  input.setAttribute("class", classAddListClose);
  // Changement de bootstrap
  tagsList.parentNode.setAttribute("class", "col-sm-4 col-lg-2");
}

/** Fermer un tag
 * @param {string} classAddTagItemClose - css à ajouter lors de la fermeture du tag
 * @param {HTMLElement} button - Le bouton cliqué
 */
export function tagClose(classAddTagItemClose, button) {
  let tagsCross = document.querySelectorAll(".svg__close");

  // Pour chaque croix
  tagsCross.forEach((cross) =>
    cross.addEventListener("click", function (event) {
      event.preventDefault();

      // Récupération des tags
      let item = cross.parentNode;
      tagsCross = document.querySelectorAll(".svg__close");

      cross.parentNode.remove();
      item.setAttribute("class", classAddTagItemClose);

      button.querySelector("i").remove();
      closeList(button);
      crossClose(button);

      let searchbarValue = document.getElementById("searchBar").value;

      // S'il y a plus de 2 tags
      if (tagsCross.length > 1) {
        // S'il y a une valeur dans la barre de recherche
        if (searchbarValue) {
          // Vérification de la condition de 3 lettres
          const regexSup3letters = new RegExp(
            "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
          );

          if (regexSup3letters.test(searchbarValue)) {
            // Récupérer les recettes correspondant à la recherche
            const recipesResearch = new Research(recipes, searchbarValue);

            //Recherche avec la barre de recherche
            let newRecipes = recipesResearch.researchSort();
            let recipesAfterTag = newRecipes;

            // Recherche avec les tags restants
            tagsCross.forEach((cross) => {
              let tag = tagDataset(item);
              let tagShow = tagDataset(cross.parentNode);
              if (tagShow != tag) {
                recipesAfterTag = searchTag(recipesAfterTag, tagShow);
                return recipesAfterTag;
              }
            });

            gallery(recipesAfterTag);
          }
          event.stopImmediatePropagation();
        } else {
          //Recherche avec les tags restants
          let recipesAfterTag = recipes;
          tagsCross.forEach((cross) => {
            let tag = tagDataset(item);
            let tagShow = tagDataset(cross.parentNode);
            if (tagShow != tag) {
              recipesAfterTag = searchTag(recipesAfterTag, tagShow);
              return recipesAfterTag;
            }
          });

          gallery(recipesAfterTag);
          event.stopImmediatePropagation();
        }

        // S'il n'y a aucun tag et une valeur dans la barre de recherche
      } else if (tagsCross.length <= 1 && searchbarValue) {
        // Vérification de la condition de 3 lettres
        const regexSup3letters = new RegExp(
          "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
        );

        if (regexSup3letters.test(searchbarValue)) {
          // Récupérer les recettes correspondant à la recherche
          const recipesResearch = new Research(recipes, searchbarValue);
          let newRecipes = recipesResearch.researchSort();
          gallery(newRecipes);
          event.stopImmediatePropagation();
        }

        // Si aucun tag et aucune valeur dans la barre de recherche
      } else {
        gallery(recipes);
        event.stopImmediatePropagation();
      }
    })
  );
}
