import { tagItemChoose } from "./tagOpen.js";
import { tagClose } from "./tagClose.js";
import { classAdd } from "/data/classAdd.js";
import { searchTag } from "./tags.js";
import { gallery } from "./gallery.js";
import { closeList } from "./openCloseTagsList.js";

const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");

export function createLists(Template) {
  ingredientsTags.appendChild(Template.createListIngredients());
  ustensilsTags.appendChild(Template.createListUstensils());
  applianceTags.appendChild(Template.createListAppliance());
}

/** Fonction pour créer la liste des ingrédients
 * @param {object} Template - Objet créé par la class ListTag
 * @param {array} recipes - Les recettes
 */
export function ingredientList(recipes) {
  // Choix d'un ingrédient
  let TagList = document.querySelectorAll(".ingredient__item");
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
        const ingredientButton = document.getElementById("ingredients__button");
        if (ingredientButton.getAttribute("class") == "tags__button open") {
          ingredientButton.querySelector("i").remove();
          closeList(ingredientButton);
        }
      }
      // Enlever l'ustensil choisi
      tagClose(item, classAdd.ingredient.listItemClose, recipes);
    })
  );
}

/** Fonction pour créer la liste des ingrédients
 * @param {object} Template - Objet créé par la class ListTag
 * @param {array} recipes - Les recettes
 */
export function ustensilsList(recipes) {
  // Choix d'un ustensil
  let TagList = document.querySelectorAll(".ustensil__item");
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
        const ustensilsButton = document.getElementById("ustensils__button");
        if (ustensilsButton.getAttribute("class") == "tags__button open") {
          ustensilsButton.querySelector("i").remove();
          closeList(ustensilsButton);
        }
      }
      // Enlever l'ustensil choisi
      tagClose(item, classAdd.ustensil.listItemClose, recipes);
    })
  );
}

/** Fonction pour créer la liste des ingrédients
 * @param {object} Template - Objet créé par la class ListTag
 * @param {array} recipes - Les recettes
 */
export function applianceList(recipes) {
  // Choix d'un appareil
  let TagList = document.querySelectorAll(".appliance__item");
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
        const appliancetButton = document.getElementById("appliance__button");
        if (appliancetButton.getAttribute("class") == "tags__button open") {
          appliancetButton.querySelector("i").remove();
          closeList(appliancetButton);
        }
      }
      // Enlever l'appareil choisi
      tagClose(item, classAdd.appliance.listItemClose, recipes);
    })
  );
}
