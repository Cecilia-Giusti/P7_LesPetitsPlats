import { tagOpen } from "../utility/tagOpen.js";
import { tagClose } from "../utility/tagClose.js";
import { searchTag } from "../utility/tags.js";
import { gallery } from "./gallery.js";
import { closeList } from "../utility/openCloseTagsList.js";
import {
  crossClose,
  updateTagsListIngredient,
  updateTagsListUstensil,
  updateTagsListAppliance,
} from "../utility/utils.js";
import { htmlAdd } from "../utility/htmlAdd.js";

const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");

/** Fonction pour initialiser les listes de Tags
 * @param {object} Template - Listes des tags créées
 */
export function createLists(Template) {
  ingredientsTags.appendChild(Template.createListIngredients());
  ustensilsTags.appendChild(Template.createListUstensils());
  applianceTags.appendChild(Template.createListAppliance());
}

/** Fonction pour mettre la liste des ingrédients à jour en fonction de l'ajout d'un tag
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
          ingredient,
          htmlAdd.ingredient.tagItem,
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

      // Enlever l'ingredient choisi
      tagClose(htmlAdd.ingredient.listItemClose, recipes);

      //Empecher le rajout du même tag
      updateTagsListIngredient(htmlAdd.ingredient.listItemOpen);
    })
  );
}

/** Fonction pour mettre la liste des ustensils à jour en fonction de l'ajout d'un tag
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
          ustensil,
          htmlAdd.ustensil.tagItem,
          htmlAdd.ustensil.classAddDataSet
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
      tagClose(htmlAdd.ustensil.listItemClose, recipes);

      //Empecher le rajout du même tag
      updateTagsListUstensil(htmlAdd.ustensil.listItemOpen);
    })
  );
}

/** Fonction pour mettre la liste des appareils à jour en fonction de l'ajout d'un tag
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
          appliance,
          htmlAdd.appliance.tagItem,
          htmlAdd.appliance.classAddDataSet
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
      tagClose(htmlAdd.appliance.listItemClose, recipes);

      //Empecher le rajout du même tag
      updateTagsListAppliance(htmlAdd.appliance.listItemOpen);
    })
  );
}
