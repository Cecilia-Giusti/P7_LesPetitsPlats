import { tagOpen } from "../utility/tagOpen.js";
import { tagClose } from "../utility/tagClose.js";
import { htmlAdd } from "/data/htmlAdd.js";
import { searchTag } from "../utility/tags.js";
import { gallery } from "./gallery.js";
import { closeList } from "../utility/openCloseTagsList.js";
import { crossClose } from "../utility/utils.js";

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
      if (item.getAttribute("class") != htmlAdd.ingredient.listItemOpen) {
        // Affichage de l'ingrédient
        tagOpen(
          item,
          ingredient,
          htmlAdd.ingredient.tagItem,
          htmlAdd.ingredient.listItemOpen,
          htmlAdd.ingredient.classAddDataSet
        );
        // Recherche avec le tag choisi
        const newRecipes = searchTag(recipes, ingredient);
        gallery(newRecipes);
        const ingredientButton = document.getElementById("ingredients__button");
        if (ingredientButton.getAttribute("class") == "tags__button open") {
          ingredientButton.querySelector("i").remove();
          closeList(ingredientButton);
          crossClose(ingredientButton);
        }

        ingredientsTags.reset();
      }
      // Enlever l'ustensil choisi
      tagClose(htmlAdd.ingredient.listItemClose, recipes);
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
      if (item.getAttribute("class") != htmlAdd.ustensil.listItemOpen) {
        //Affichage de l'ustensil
        tagOpen(
          item,
          ustensil,
          htmlAdd.ustensil.tagItem,
          htmlAdd.ustensil.listItemOpen
        );
        // Recherche avec le tag choisi
        const newRecipes = searchTag(recipes, ustensil);
        gallery(newRecipes);
        const ustensilsButton = document.getElementById("ustensils__button");
        if (ustensilsButton.getAttribute("class") == "tags__button open") {
          ustensilsButton.querySelector("i").remove();
          closeList(ustensilsButton);
          crossClose(ustensilsButton);
        }

        ustensilsTags.reset();
      }
      // Enlever l'ustensil choisi
      tagClose(item, htmlAdd.ustensil.listItemClose, recipes, ustensil);
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
      if (item.getAttribute("class") != htmlAdd.appliance.listItemOpen) {
        //Affichage de l'appareil
        tagOpen(
          item,
          appliance,
          htmlAdd.appliance.tagItem,
          htmlAdd.appliance.listItemOpen
        );
        // Recherche avec le tag choisi
        const newRecipes = searchTag(recipes, appliance);
        gallery(newRecipes);
        const appliancetButton = document.getElementById("appliance__button");
        if (appliancetButton.getAttribute("class") == "tags__button open") {
          appliancetButton.querySelector("i").remove();
          closeList(appliancetButton);
          crossClose(appliancetButton);
        }

        applianceTags.reset();
      }
      // Enlever l'appareil choisi
      tagClose(item, htmlAdd.appliance.listItemClose, recipes, appliance);
    })
  );
}