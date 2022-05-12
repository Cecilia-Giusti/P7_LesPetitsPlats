//UTILS

import { GetTags } from "../models/GetTags.js";

import { ListTag } from "../templates/ListTag.js";

/** Afficher un message d'erreur
 * @param {string} errorMessage - Message d'erreur à afficher
 */
export function errorMessage(errorMessage) {
  const recipesSection = document.querySelector("#recipes");

  const errorSearch = document.createElement("p");
  errorSearch.setAttribute("class", "errorSearch");
  errorSearch.innerHTML = errorMessage;
  recipesSection.appendChild(errorSearch);
}

/** Création des tags */
export function tags(recipes) {
  //Instanciation des Class
  const tagsGet = new GetTags(recipes);
  const template = new ListTag(tagsGet);
  return template;
}
