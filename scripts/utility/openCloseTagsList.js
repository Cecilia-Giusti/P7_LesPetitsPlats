import { classAdd } from "/data/classAdd.js";
import { tagClose, crossCloseList } from "./closeTagsList.js";
import { tagItemChoose } from "./openTagsList.js";
import { tags, searchTag } from "./tags.js";
import { gallery } from "./gallery.js";

/** Fonction pour initialiser les tags
 * @param
 * @param {array} recipes - Les recettes
 */
export function initTagsList(button, recipes) {
  const Template = tags(recipes);

  //Ouverture
  button.innerHTML = "";
  if (button.getAttribute("class") != "tags__button open") {
    openList(button, Template, recipes);
  }
  //Fermeture
  else {
    closeList(button);
  }
}

/** Fonction pour ouvrir les listes
 * @param
 * @param {object} Template - Html à intégrer dans les listes
 * @param {array} recipes - Les recettes
 */
export function openList(button, Template, recipes) {
  console.log(button);
  //DOM
  const ingredientsTags = document.getElementById("ingredients__form");
  const ustensilsTags = document.getElementById("ustensils__form");
  const applianceTags = document.getElementById("appliance__form");
  const ingredientsInput = document.getElementById("ingredients");
  const ustensilsInput = document.getElementById("ustensils");
  const applianceInput = document.getElementById("appliances");
  let TagList;

  // Changement de l'icone
  const arrowUp = document.createElement("i");
  arrowUp.setAttribute("class", "fi fi-bs-angle-up");
  button.appendChild(arrowUp);
  button.setAttribute("class", "tags__button open");

  // Ouverture des listes
  switch (button.id) {
    case "ingredients__button":
      //Ajout de la liste des ingrédients
      ingredientsTags.appendChild(Template.createListIngredients());
      ingredientsInput.setAttribute("class", classAdd.ingredient.tagInputOpen);
      // Changement de bootstrap
      ingredientsTags.parentNode.setAttribute(
        "class",
        "col-sm-12 col-lg-6 z-index--100"
      );

      // Choix d'un ingrédient
      TagList = document.querySelectorAll(".ingredient__item");
      TagList.forEach((item) =>
        item.addEventListener("click", function () {
          let ingredient = item.dataset.ingredient;
          // Si l'ingrédient n'a pas déjà été choisi
          if (item.getAttribute("class") != classAdd.ingredient.listItemOpen) {
            // Affichage de l'ingrédient
            tagItemChoose(
              item,
              ingredient,
              classAdd.ingredient.tagItem,
              classAdd.ingredient.listItemOpen
            );
            // Recherche avec le tag choisi
            const newRecipes = searchTag(recipes, ingredient);
            gallery(newRecipes);
          } else {
            // Enlever l'ingrédient choisi
            tagClose(
              item,
              classAdd.ingredient.listItemClose,
              recipes,
              ingredient
            );
          }
        })
      );
      break;
    case "ustensils__button":
      //Ajout de la liste des ustensils
      ustensilsTags.appendChild(Template.createListUstensils());
      ustensilsInput.setAttribute("class", classAdd.ustensil.tagInputOpen);
      // Changement de bootstrap
      ustensilsTags.parentNode.setAttribute(
        "class",
        "col-sm-4 col-lg-4 z-index--100"
      );
      // Choix d'un ustensil
      TagList = document.querySelectorAll(".ustensil__item");
      TagList.forEach((item) =>
        item.addEventListener("click", function () {
          let ustensil = item.dataset.ustensil;
          // Si l'ustensil n'a pas déjà été choisi
          if (item.getAttribute("class") != classAdd.ustensil.listItemOpen) {
            //Affichage de l'ustensil
            tagItemChoose(
              item,
              ustensil,
              classAdd.ustensil.tagItem,
              classAdd.ustensil.listItemOpen
            );
            // Recherche avec le tag choisi
            const newRecipes = searchTag(recipes, ustensil);
            gallery(newRecipes);
          }
          // Enlever l'ustensil choisi
          tagClose(item, classAdd.ustensil.listItemClose, recipes, ustensil);
        })
      );

      break;
    case "appliance__button":
      //Ajout de la liste des appareils
      applianceTags.appendChild(Template.createListAppliance());
      applianceInput.setAttribute("class", classAdd.appliance.tagInputOpen);
      // Changement de bootstrap
      applianceTags.parentNode.setAttribute(
        "class",
        "col-sm-4 col-lg-2 z-index--100"
      );
      // Choix d'un appareil
      TagList = document.querySelectorAll(".appliance__item");
      TagList.forEach((item) =>
        item.addEventListener("click", function () {
          let appliance = item.dataset.appliance;
          // Si l'appareil n'a pas déjà été choisi
          if (item.getAttribute("class") != classAdd.appliance.listItemOpen) {
            //Affichage de l'appareil
            tagItemChoose(
              item,
              appliance,
              classAdd.appliance.tagItem,
              classAdd.appliance.listItemOpen
            );
            // Recherche avec le tag choisi
            const newRecipes = searchTag(recipes, appliance);
            gallery(newRecipes);
          }
          // Enlever l'appareil choisi
          tagClose(item, classAdd.appliance.listItemClose, recipes, appliance);
        })
      );
      break;
  }
}

/**Fonction pour fermer les listes
 * @param
 */
export function closeList(button) {
  //DOM
  const ingredientsTags = document.getElementById("ingredients__form");
  const ustensilsTags = document.getElementById("ustensils__form");
  const applianceTags = document.getElementById("appliance__form");
  const ingredientsInput = document.getElementById("ingredients");
  const ustensilsInput = document.getElementById("ustensils");
  const applianceInput = document.getElementById("appliances");
  const classAddListClose = {
    ingredient: "background-primary p-3 border-radius--full tags__input",
    ustensil: "background-tertiary p-3 border-radius--full tags__input",
    appliance: "background-secondary p-3 border-radius--full tags__input",
  };

  // Changement de l'icone
  const arrowDown = document.createElement("i");
  arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
  button.appendChild(arrowDown);
  button.setAttribute("class", "tags__button");

  // Fermeture de la liste
  switch (button.id) {
    case "ingredients__button":
      crossCloseList(
        ingredientsTags,
        ingredientsInput,
        classAddListClose.ingredient
      );
      break;
    case "ustensils__button":
      crossCloseList(ustensilsTags, ustensilsInput, classAddListClose.ustensil);
      break;
    case "appliance__button":
      crossCloseList(
        applianceTags,
        applianceInput,
        classAddListClose.appliance
      );
      break;
  }
}
