import { TagInput } from "../Class/TagInput.js";
import { showTagsInput } from "./showTagsInput.js";
import { closeList } from "./openCloseTagsList.js";
import { crossClose } from "./utils.js";
import { gallery } from "../modules/gallery.js";
import { htmlAdd } from "./htmlAdd.js";
import { ingredientList } from "../modules/Lists.js";
import { applianceList } from "../modules/Lists.js";
import { ustensilsList } from "../modules/Lists.js";

/**Fonction pour réaliser une recheche via les tags inputs
 * @param {array} - Les recettes
 */
export function searchTagsInput(recipes) {
  const tagsInput = document.querySelectorAll(".tags__input");
  let Template;
  let ingredientsArrayList;
  let appliancesArrayList;
  let ustensilsArrayList;

  let ingredientsTagsList = document.querySelector(".ingredients__list");
  let ustensilsTagsList = document.querySelector(".ustensils__list");
  let applianceTagsList = document.querySelector(".appliances__list");

  let ingredientsTags = ingredientsTagsList.querySelectorAll("li");
  let ustensilsTags = ustensilsTagsList.querySelectorAll("li");
  let applianceTags = applianceTagsList.querySelectorAll("li");

  let ingredientBtn = document.getElementById("ingredients__button");
  let applianceBtn = document.getElementById("appliance__button");
  let ustensilBtn = document.getElementById("ustensils__button");

  // Evenement lors de la recherche d'un tags
  tagsInput.forEach((input) =>
    input.addEventListener("input", function (e) {
      e.preventDefault();

      switch (e.target.id) {
        case "ingredients":
          if (input.value != "") {
            Template = new TagInput(ingredientsTags, input.value);
            ingredientsArrayList = Template.listIngredient();

            showTagsInput(
              ingredientsArrayList,
              ingredientsTagsList,
              ingredientBtn,
              htmlAdd.ingredient.errorMessageInput
            );

            ingredientList(recipes);
          } else {
            gallery(recipes);
            closeList(ingredientBtn);
            ingredientBtn.innerHTML = "";
            crossClose(ingredientBtn);
            searchTagsInput(recipes);
          }

          break;
        case "appliances":
          if (input.value != "") {
            Template = new TagInput(applianceTags, input.value);
            appliancesArrayList = Template.listAppliance();

            showTagsInput(
              appliancesArrayList,
              applianceTagsList,
              applianceBtn,
              htmlAdd.appliance.errorMessageInput
            );

            applianceList(recipes);
          } else {
            gallery(recipes);
            closeList(applianceBtn);
            applianceBtn.innerHTML = "";
            crossClose(applianceBtn);
            searchTagsInput(recipes);
          }

          break;
        case "ustensils":
          if (input.value != "") {
            Template = new TagInput(ustensilsTags, input.value);
            ustensilsArrayList = Template.listUstensils();

            showTagsInput(
              ustensilsArrayList,
              ustensilsTagsList,
              ustensilBtn,
              htmlAdd.ustensil.errorMessageInput
            );

            ustensilsList(recipes);
          } else {
            gallery(recipes);
            closeList(ustensilBtn);
            ustensilBtn.innerHTML = "";
            crossClose(ustensilBtn);
            searchTagsInput(recipes);
          }

          break;
      }
    })
  );
}
