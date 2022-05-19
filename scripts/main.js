import { recipes } from "../data/recipes.js";
import { errorMessage, crossOpen, crossClose } from "./utility/utils.js";
import { searchBar } from "./utility/searchBar.js";
import { clearGallery, gallery, displayData } from "./utility/gallery.js";
import { openList, closeList } from "./utility/openCloseTagsList.js";
import { TagInput } from "./Class/TagInput.js";

//DOM
const tagsInput = document.querySelectorAll(".tags__input");
const tagsBtn = document.querySelectorAll(".tags__button");
let appliancesArrayList;
let ustensilsArrayList;
let ingredientsArrayList;
let Template;
let ingredientsTagsList;
let ingredientsTags;
let ustensilsTagsList;
let applianceTagsList;
let ustensilsTags;
let applianceTags;
let ingredientBtn;
let ustensilBtn;
let appliancetBtn;

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Initiation de la galerie des recettes
  gallery(recipes);

  // Ouvrir et fermer les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      button.innerHTML = "";
      if (button.getAttribute("class") != "tags__button open") {
        crossOpen(button);
        openList(button);
      } else {
        crossClose(button);
        closeList(button);
      }
    })
  );

  ingredientsTagsList = document.querySelector(".ingredients__list");
  ustensilsTagsList = document.querySelector(".ustensils__list");
  applianceTagsList = document.querySelector(".appliances__list");

  ingredientsTags = ingredientsTagsList.querySelectorAll("li");
  ustensilsTags = ustensilsTagsList.querySelectorAll("li");
  applianceTags = applianceTagsList.querySelectorAll("li");

  ingredientBtn = document.getElementById("ingredients__button");
  appliancetBtn = document.getElementById("appliance__button");
  ustensilBtn = document.getElementById("ustensils__button");

  // Evenement lors de la recherche d'un tags
  tagsInput.forEach((input) =>
    input.addEventListener("input", function (e) {
      e.preventDefault();
      console.log(input.value); // Valeur de l'input pour la recherche
      // initiation des listes de tags

      switch (e.target.id) {
        case "ingredients":
          if (input.value != "") {
            Template = new TagInput(ingredientsTags, input.value);
            ingredientsArrayList = Template.listIngredient();

            if (ingredientsArrayList.length > 1) {
              ingredientsTagsList.innerHTML = "";
              ingredientsTagsList.innerHTML = ingredientsArrayList;
              openList(ingredientBtn);
              ingredientBtn.innerHTML = "";
              crossOpen(ingredientBtn);
            } else {
              ingredientsTagsList.innerHTML = "";
              const errorMessage = `<li class="ingredients__error"> Aucun ingrédient ne correspond à votre recherche</li>`;
              ingredientsTagsList.innerHTML = errorMessage;
            }
          } else {
            closeList(ingredientBtn);
            ingredientBtn.innerHTML = "";
            crossClose(ingredientBtn);
          }
          break;
        case "appliances":
          if (input.value != "") {
            Template = new TagInput(applianceTags, input.value);
            appliancesArrayList = Template.listAppliance();

            if (appliancesArrayList.length > 1) {
              applianceTagsList.innerHTML = "";
              applianceTagsList.innerHTML = appliancesArrayList;
              openList(appliancetBtn);
              appliancetBtn.innerHTML = "";
              crossOpen(appliancetBtn);
            } else {
              applianceTagsList.innerHTML = "";
              const errorMessage = `<li class="appliances__error"> Aucun appareil ne correspond à votre recherche</li>`;
              applianceTagsList.innerHTML = errorMessage;
            }
          } else {
            closeList(appliancetBtn);
            appliancetBtn.innerHTML = "";
            crossClose(appliancetBtn);
          }
          break;
        case "ustensils":
          if (input.value != "") {
            Template = new TagInput(ustensilsTags, input.value);
            ustensilsArrayList = Template.listUstensils();

            if (ustensilsArrayList.length > 1) {
              ustensilsTagsList.innerHTML = "";
              ustensilsTagsList.innerHTML = ustensilsArrayList;
              openList(ustensilBtn);
              ustensilBtn.innerHTML = "";
              crossOpen(ustensilBtn);
            } else {
              ustensilsTagsList.innerHTML = "";
              const errorMessage = `<li class="ustensils__error"> Aucun ustensil ne correspond à votre recherche</li>`;
              ustensilsTagsList.innerHTML = errorMessage;
            }
          } else {
            closeList(ustensilBtn);
            ustensilBtn.innerHTML = "";
            crossClose(ustensilBtn);
          }
          break;
      }
    })
  );

  // DON'T - Cheminement

  // Si l-utilisateur cherche dans la barre de recherche en premier
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Evenement à l'envoi de la recherche
  researchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //Valeur de la recherche
    const research = researchInput.value;

    // Vérification de la condition de 3 lettres
    const regexSup3letters = new RegExp(
      "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
    );

    if (regexSup3letters.test(research)) {
      // Récupérer les recettes correspondant à la recherche
      const newRecipes = searchBar(recipes, research);
      gallery(newRecipes);
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
      displayData(recipes);
    }
  });

  //Si la barre de recherche est vide, on réinitialise
  researchForm.addEventListener("input", (e) => {
    e.preventDefault();
    if (e.data == null || e.data == undefined) {
      gallery(recipes);
    }
  });

  // S'il choisit un tag

  // S'il écrit dans un tag

  // Si l'utilisateur tape dans les tags
  // Et qu'il fait la recherche ensuite ou choisit un tag
  // Et choisit l'autre option ensuite

  // Si l'utilsateur choisit un tag
  // Et qu'il fait la recherche ensuite ou tape un tag
  // Et choisit l'autre option ensuite
}

init();
