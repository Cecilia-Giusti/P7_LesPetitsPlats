import { classAdd } from "/data/classAdd.js";

//DOM
const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");
const ingredientsInput = document.getElementById("ingredients");
const ustensilsInput = document.getElementById("ustensils");
const applianceInput = document.getElementById("appliances");

/**Fonction pour afficher la liste des ingrédients
 * @param {} Template -
 */
export function listTagsOpenIngredient(Template) {
  //Ajout de la liste des ingrédients
  ingredientsTags.appendChild(Template.createListIngredients());
  ingredientsInput.setAttribute("class", classAdd.ingredient.tagInputOpen);
  // Changement de bootstrap
  ingredientsTags.parentNode.setAttribute(
    "class",
    "col-sm-12 col-lg-6 z-index--100"
  );
}

/**Fonction pour afficher la liste des ustensils
 * @param {} Template -
 */
export function listTagsOpenUstensils(Template) {
  //Ajout de la liste des ustensils
  ustensilsTags.appendChild(Template.createListUstensils());
  ustensilsInput.setAttribute("class", classAdd.ustensil.tagInputOpen);
  // Changement de bootstrap
  ustensilsTags.parentNode.setAttribute(
    "class",
    "col-sm-4 col-lg-4 z-index--100"
  );
}

/**Fonction pour afficher la liste des appareils
 * @param {} Template -
 */
export function listTagsOpenAppliances(Template) {
  //Ajout de la liste des appareils
  applianceTags.appendChild(Template.createListAppliance());
  applianceInput.setAttribute("class", classAdd.appliance.tagInputOpen);
  // Changement de bootstrap
  applianceTags.parentNode.setAttribute(
    "class",
    "col-sm-4 col-lg-2 z-index--100"
  );
}
