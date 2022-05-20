import { htmlAdd } from "/data/htmlAdd.js";
import { crossCloseList } from "./tagClose.js";

//DOM
const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");
const ingredientsInput = document.getElementById("ingredients");
const ustensilsInput = document.getElementById("ustensils");
const applianceInput = document.getElementById("appliances");

/** Fonction pour ouvrir les listes
 * @param {string} - le bouton utilisé
 */
export function openList(button) {
  // Ouverture des listes
  switch (button.id) {
    case "ingredients__button":
      //Affichage de la liste des ingrédients
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-block ingredients__list border-radius--bottom col-sm-12"
      );

      // Changement de bootstrap
      ingredientsInput.setAttribute("class", htmlAdd.ingredient.tagInputOpen);
      ingredientsTags.parentNode.setAttribute(
        "class",
        "col-sm-12 col-lg-6 z-index--100"
      );

      break;
    case "ustensils__button":
      //Affichage de la liste des ustensils
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-block ustensils__list border-radius--bottom col-sm-12"
      );
      // Changement de bootstrap
      ustensilsInput.setAttribute("class", htmlAdd.ustensil.tagInputOpen);
      ustensilsTags.parentNode.setAttribute(
        "class",
        "col-sm-4 col-lg-4 z-index--100"
      );

      break;
    case "appliance__button":
      //Affichage de la liste des appareils
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-block appliances__list border-radius--bottom col-sm-12 "
      );
      // Changement de bootstrap
      applianceInput.setAttribute("class", htmlAdd.appliance.tagInputOpen);
      applianceTags.parentNode.setAttribute(
        "class",
        "col-sm-4 col-lg-2 z-index--100"
      );
      break;
  }
}

/**Fonction pour fermer les listes
 * @param {string} - le bouton utilisé
 */
export function closeList(button) {
  // Fermeture de la liste
  switch (button.id) {
    case "ingredients__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-none ingredients__list border-radius--bottom col-sm-12"
      );
      crossCloseList(
        ingredientsTags,
        ingredientsInput,
        htmlAdd.ingredient.classAddListClose
      );

      break;
    case "ustensils__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-none ustensils__list border-radius--bottom col-sm-12"
      );

      crossCloseList(
        ustensilsTags,
        ustensilsInput,
        htmlAdd.ustensil.classAddListClose
      );

      break;
    case "appliance__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-none appliances__list border-radius--bottom col-sm-12 "
      );

      crossCloseList(
        applianceTags,
        applianceInput,
        htmlAdd.appliance.classAddListClose
      );

      break;
  }
}
