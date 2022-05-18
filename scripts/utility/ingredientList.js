import { tagItemChoose } from "./tagOpen.js";
import { tagClose } from "./tagClose.js";
import { classAdd } from "/data/classAdd.js";
import { searchTag } from "./tags.js";
import { gallery } from "./gallery.js";

const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");

export function createListe(Template) {
  ingredientsTags.appendChild(Template.createListIngredients());
  ustensilsTags.appendChild(Template.createListUstensils());
  applianceTags.appendChild(Template.createListAppliance());
}

/** Fonction pour créer la liste des ingrédients
 * @param {object} Template - Objet créé par la class ListTag
 * @param {array} recipes - Les recettes
 */
export function ingredientList(Template, recipes) {
  ingredientsTags.appendChild(Template.createListIngredients());

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

        //Réinitialisation de la liste
        ingredientsTags.querySelector("ul").remove();
      }
      // Enlever l'ustensil choisi
      tagClose(item, classAdd.ingredient.listItemClose, recipes);
    })
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
      tagClose(item, classAdd.ustensil.listItemClose, recipes);
    })
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
      tagClose(item, classAdd.appliance.listItemClose, recipes);
    })
  );
}
