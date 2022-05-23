import { searchTagDelete } from "./tags.js";
import { gallery } from "../modules/gallery.js";
import { tagDataset, crossClose } from "./utils.js";
import { closeList } from "./openCloseTagsList.js";
import { recipes } from "../../data/recipes.js";
import { Research } from "../Class/Research.js";
import { searchTag } from "./tags.js";

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
 * @param {Array} recipesSearch - Les recettes qui ont été trié auparavant
 */
export function tagClose(classAddTagItemClose, recipesSearch, button) {
  let tagsCross = document.querySelectorAll(".svg__close");

  tagsCross.forEach((cross) =>
    cross.addEventListener("click", function (event) {
      event.preventDefault();

      let item = cross.parentNode;
      tagsCross = document.querySelectorAll(".svg__close");

      cross.parentNode.remove();
      item.setAttribute("class", classAddTagItemClose);

      button.querySelector("i").remove();
      closeList(button);
      crossClose(button);

      let searchbarValue = document.getElementById("searchBar").value;

      if (tagsCross.length > 1) {
        if (cross == tagsCross[tagsCross.length - 1]) {
          let tag = tagDataset(item);
          const newRecipes = searchTagDelete(recipesSearch, tag);
          gallery(newRecipes);
        } else if (searchbarValue) {
          // Vérification de la condition de 3 lettres
          const regexSup3letters = new RegExp(
            "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
          );

          if (regexSup3letters.test(searchbarValue)) {
            // Récupérer les recettes correspondant à la recherche
            const recipesResearch = new Research(recipes, searchbarValue);
            let newRecipes = recipesResearch.researchSort();
            let recipesAfterTag;
            tagsCross.forEach((cross) => {
              let tag = tagDataset(item);
              let tagShow = tagDataset(cross.parentNode);
              if (tagShow != tag) {
                recipesAfterTag = searchTag(newRecipes, tagShow);
                return recipesAfterTag;
              }
            });

            gallery(recipesAfterTag);
          }
          event.stopImmediatePropagation();
        } else {
          let recipesAfterTag;
          tagsCross.forEach((cross) => {
            let tag = tagDataset(item);
            let tagShow = tagDataset(cross.parentNode);
            if (tagShow != tag) {
              recipesAfterTag = searchTag(recipes, tagShow);
              return recipesAfterTag;
            }
          });

          gallery(recipesAfterTag);
          event.stopImmediatePropagation();
        }
      } else if (tagsCross.length <= 1 && !searchbarValue) {
        gallery(recipes);
        event.stopImmediatePropagation();
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
      } else {
        gallery(recipes);
        event.stopImmediatePropagation();
      }
    })
  );
}
