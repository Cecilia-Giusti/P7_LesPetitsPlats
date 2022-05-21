import { searchTagDelete } from "./tags.js";
import { gallery } from "../modules/gallery.js";
import { tagDataset } from "./utils.js";

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
 * @param {Array} recipes - Les recettes
 */
export function tagClose(classAddTagItemClose, recipes) {
  let tagsCross = document.querySelectorAll(".svg__close");

  tagsCross.forEach((cross) =>
    cross.addEventListener("click", function (event) {
      event.preventDefault();

      let item = cross.parentNode;
      tagsCross = document.querySelectorAll(".svg__close");
      console.log(item);

      cross.parentNode.remove();
      item.setAttribute("class", classAddTagItemClose);
      if (tagsCross.length > 1) {
        let tag = tagDataset(item);
        console.log(tag);
        const newRecipes = searchTagDelete(recipes, tag);
        gallery(newRecipes);
      } else {
        gallery(recipes);
        event.stopImmediatePropagation();
      }
    })
  );
}
