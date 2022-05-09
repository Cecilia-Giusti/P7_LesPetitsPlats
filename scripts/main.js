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

  // Ouvrir les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const tagsGet = new GetTags(recipes);
      const Template = new ListTag(tagsGet);
      const ingredientsTags = document.getElementById("ingredients__form");
      const ustensilsTags = document.getElementById("ustensils__form");
      const applianceTags = document.getElementById("appliance__form");
      const ingredientsInput = document.getElementById("ingredients");
      const ustensilsInput = document.getElementById("ustensils");
      const applianceInput = document.getElementById("appliances");

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
            ingredientsTags.appendChild(Template.createListIngredients());
            ingredientsInput.setAttribute(
              "class",
              "background-primary p-3 border-radius--top tags__input tags__input--open"
            );
            break;
          case "ustensils__button":
            ustensilsTags.appendChild(Template.createListUstensils());
            ustensilsInput.setAttribute(
              "class",
              "background-tertiary p-3 border-radius--top tags__input tags__input--open"
            );
            break;
          case "appliance__button":
            applianceTags.appendChild(Template.createListAppliance());
            applianceInput.setAttribute(
              "class",
              "background-secondary p-3 border-radius--top tags__input tags__input--open"
            );
            break;
        }
      } else {
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
            break;
          case "ustensils__button":
            ustensilsTags.lastChild.innerHTML = "";
            ustensilsInput.setAttribute(
              "class",
              "background-tertiary p-3 tags__input border-radius--full"
            );
            break;
          case "appliance__button":
            applianceTags.lastChild.innerHTML = "";
            applianceInput.setAttribute(
              "class",
              "background-secondary p-3 border-radius--full tags__input "
            );
            break;
        }
      }
    })
  );

  // Fermer les onglets lors que click sur la flèche
}

init();
