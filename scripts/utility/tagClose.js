//import { searchTagDelete } from "./tags.js";
import { gallery } from "./gallery.js";

/** Fermer une liste de tags
 * @param {} //Don't
 * @param {}
 */
export function crossCloseList(tagsList, input, classAddListClose) {
  input.setAttribute("class", classAddListClose);
  // Changement de bootstrap
  tagsList.parentNode.setAttribute("class", "col-sm-4 col-lg-2");
}

/** Fermer un tag
 * @param
 * @param {string} classAddTagItemClose - class à ajouter lors de la fermeture du tag
 * @param {Array} recipes - Les recettes
 * @param {string} tag - Le tag à enlever
 */
export function tagClose(item, classAddTagItemClose, recipes) {
  let tagsClose = document.querySelectorAll(".svg__close");
  tagsClose.forEach((cross) =>
    cross.addEventListener("click", function (e) {
      e.preventDefault();
      cross.parentNode.remove();
      item.setAttribute("class", classAddTagItemClose);
      gallery(recipes);
    })
  );
}
