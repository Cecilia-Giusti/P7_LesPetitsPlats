import { openList } from "./openCloseTagsList.js";
import { crossOpen } from "./utils.js";

/** Fonction qui affiche les listes des tags en fonction de l'input
 * @param {array} arrayList - La liste à afficher
 * @param {string} tagsList - L'endroit où afficher la liste
 * @param {string} btn - Le bouton cliqué pour l'ouverture de la liste
 * @param {string} errorMessageInput - Message à afficher en cas d'erreur
 */
export function showTagsInput(arrayList, tagsList, btn, errorMessageInput) {
  if (arrayList.length >= 1) {
    tagsList.innerHTML = "";
    tagsList.innerHTML = arrayList;
    openList(btn);
    btn.innerHTML = "";
    crossOpen(btn);
  } else {
    tagsList.innerHTML = "";
    tagsList.innerHTML = errorMessageInput;
  }
}
