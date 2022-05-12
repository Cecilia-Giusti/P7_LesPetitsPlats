import { recipes } from "../data/recipes.js";
import { displayData } from "./utility/utils.js";
import { clearGallery } from "./utility/utils.js";
import { errorMessage } from "./utility/utils.js";
import { Research } from "./Class/Research.js";
import { ListTag } from "./templates/ListTag.js";
import { GetTags } from "./models/GetTags.js";

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Création du tableau des recettes
  displayData(recipes);

  // BARRE DE RECHERCHE

  //Recherche des recettes via la barre de recherche
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Evenement à l'envoi de la recherche
  researchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //Valeur de la recherche
    const research = researchInput.value;

    // Vérification de la condition de 3 lettres
    const regexSup3letters = new RegExp(
      "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°]{3,}$"
    );

    if (regexSup3letters.test(research)) {
      // Récupérer les recettes de la recherche
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();

      //Création de la nouvelle galerie à partir de la recherche
      clearGallery();
      displayData(newRecipes);
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
    }
  });

  // TAGS
  // const tagsInput = document.querySelectorAll(".tags__input");
  const tagsBtn = document.querySelectorAll(".tags__button");

  // Ouvrir et fermer les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();

      //Instanciation des Class
      const tagsGet = new GetTags(recipes);
      const Template = new ListTag(tagsGet);

      //DOM
      const ingredientsTags = document.getElementById("ingredients__form");
      const ustensilsTags = document.getElementById("ustensils__form");
      const applianceTags = document.getElementById("appliance__form");
      const ingredientsInput = document.getElementById("ingredients");
      const ustensilsInput = document.getElementById("ustensils");
      const applianceInput = document.getElementById("appliances");
      const tagsListChoose = document.getElementById("tags");
      let TagList;
      let tagsClose;

      //Ouverture
      button.innerHTML = "";
      if (button.getAttribute("class") != "tags__button open") {
        // Changement de l'icone
        const arrowUp = document.createElement("i");
        arrowUp.setAttribute("class", "fi fi-bs-angle-up");
        button.appendChild(arrowUp);
        button.setAttribute("class", "tags__button open");

        // Ouverture de la liste
        switch (button.id) {
          case "ingredients__button":
            //Ajout de la liste des ingrédients
            ingredientsTags.appendChild(Template.createListIngredients());
            ingredientsInput.setAttribute(
              "class",
              "background-primary p-3 border-radius--top tags__input tags__input--open"
            );
            // Changement de bootstrap
            ingredientsTags.parentNode.setAttribute(
              "class",
              "col-sm-12 col-lg-6 z-index--100"
            );

            // Choix d'un tag
            TagList = document.querySelectorAll(".ingredient__item");
            TagList.forEach((item) =>
              item.addEventListener("click", function () {
                // Si le tag n'a pas déjà été choisi
                if (
                  item.getAttribute("class") ==
                  "list-group-item background-primary ingredient__item col-4 col-sm-4 display-inline"
                ) {
                  const tagsItemChoose = document.createElement("li");
                  tagsItemChoose.setAttribute(
                    "class",
                    "tag__item tag__item--ingredient display-inline"
                  );
                  tagsItemChoose.setAttribute(
                    "dataset",
                    item.dataset.ingredient
                  );
                  const tagItemChoose = `
                ${item.dataset.ingredient}
                <svg class="svg__close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" 
fill="white"/>
</svg>
                `;
                  tagsItemChoose.innerHTML = tagItemChoose;

                  tagsListChoose.appendChild(tagsItemChoose);
                  item.setAttribute(
                    "class",
                    "list-group-item background-primary ingredient__item ingredient__item--open col-4 col-sm-4 display-inline"
                  );
                }
                // Enlever les tags choisis
                tagsClose = document.querySelectorAll(".svg__close");
                console.log(tagsClose);
                tagsClose.forEach((cross) =>
                  cross.addEventListener("click", function (e) {
                    console.log(cross.parentNode);
                    e.preventDefault();
                    cross.parentNode.remove();
                  })
                );
              })
            );
            break;
          case "ustensils__button":
            //Ajout de la liste des ustensils
            ustensilsTags.appendChild(Template.createListUstensils());
            ustensilsInput.setAttribute(
              "class",
              "background-tertiary p-3 border-radius--top tags__input tags__input--open"
            );
            // Changement de bootstrap
            ustensilsTags.parentNode.setAttribute(
              "class",
              "col-sm-4 col-lg-4 z-index--100"
            );

            // Choix d'un tag
            TagList = document.querySelectorAll(".ustensil__item");
            TagList.forEach((item) =>
              item.addEventListener("click", function () {
                // Si le tag n'a pas déjà été choisi
                if (
                  item.getAttribute("class") ==
                  "list-group-item background-tertiary col-4 col-sm-6 col-lg-6 display-inline ustensil__item"
                ) {
                  const tagsItemChoose = document.createElement("li");
                  tagsItemChoose.setAttribute(
                    "class",
                    "tag__item tag__item--ustensil display-inline"
                  );
                  const tagItemChoose = `
                ${item.dataset.ustensil}
                <svg class="svg__close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" 
fill="white"/>
</svg>

                `;
                  tagsItemChoose.innerHTML = tagItemChoose;
                  tagsListChoose.appendChild(tagsItemChoose);
                  item.setAttribute(
                    "class",
                    "list-group-item background-tertiary col-4 col-sm-6 col-lg-6 display-inline ustensil__item ustensil__item--open"
                  );
                }
                // Enlever les tags choisis
                tagsClose = document.querySelectorAll(".svg__close");
                console.log(tagsClose);
                tagsClose.forEach((cross) =>
                  cross.addEventListener("click", function (e) {
                    console.log(cross.parentNode);
                    e.preventDefault();
                    cross.parentNode.remove();
                  })
                );
              })
            );

            break;
          case "appliance__button":
            //Ajout de la liste des appareils
            applianceTags.appendChild(Template.createListAppliance());
            applianceInput.setAttribute(
              "class",
              "background-secondary p-3 border-radius--top tags__input tags__input--open"
            );
            // Changement de bootstrap
            applianceTags.parentNode.setAttribute(
              "class",
              "col-sm-4 col-lg-2 z-index--100"
            );

            // Choix d'un tag
            TagList = document.querySelectorAll(".appliance__item");
            TagList.forEach((item) =>
              item.addEventListener("click", function () {
                // Si le tag n'a pas déjà été choisi
                if (
                  item.getAttribute("class") ==
                  "list-group-item background-secondary col-4 col-sm-6 col-lg-12 display-inline appliance__item"
                ) {
                  const tagsItemChoose = document.createElement("li");
                  tagsItemChoose.setAttribute(
                    "class",
                    "tag__item tag__item--appliance display-inline"
                  );
                  const tagItemChoose = `
                ${item.dataset.appliance}
                <svg class="svg__close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" 
fill="white"/>
</svg>

                `;
                  tagsItemChoose.innerHTML = tagItemChoose;
                  tagsListChoose.appendChild(tagsItemChoose);
                  item.setAttribute(
                    "class",
                    "list-group-item background-secondary col-4 col-sm-6 col-lg-12 display-inline appliance__item appliance__item--open"
                  );
                }
                // Enlever les tags choisis
                tagsClose = document.querySelectorAll(".svg__close");
                console.log(tagsClose);
                tagsClose.forEach((cross) =>
                  cross.addEventListener("click", function (e) {
                    console.log(cross.parentNode);
                    e.preventDefault();
                    cross.parentNode.remove();
                  })
                );
              })
            );
            break;
        }
      }
      //Fermeture
      else {
        // Changement de l'icone
        const arrowDown = document.createElement("i");
        arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
        button.appendChild(arrowDown);
        button.setAttribute("class", "tags__button");

        // Fermeture de la liste
        switch (button.id) {
          case "ingredients__button":
            ingredientsTags.lastChild.innerHTML = "";
            ingredientsInput.setAttribute(
              "class",
              "background-primary p-3 border-radius--full tags__input"
            );
            // Changement de bootstrap
            ingredientsTags.parentNode.setAttribute(
              "class",
              "col-sm-4 col-lg-2"
            );
            break;
          case "ustensils__button":
            ustensilsTags.lastChild.innerHTML = "";
            ustensilsInput.setAttribute(
              "class",
              "background-tertiary p-3 tags__input border-radius--full"
            );
            // Changement de bootstrap
            ustensilsTags.parentNode.setAttribute("class", "col-sm-4 col-lg-2");
            break;
          case "appliance__button":
            applianceTags.lastChild.innerHTML = "";
            applianceInput.setAttribute(
              "class",
              "background-secondary p-3 border-radius--full tags__input "
            );
            // Changement de bootstrap
            applianceTags.parentNode.setAttribute("class", "col-sm-4 col-lg-2");
            break;
        }
      }
    })
  );
}

init();
