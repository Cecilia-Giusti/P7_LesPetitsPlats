import { TagInput } from "../Class/TagInput.js";
import { showTagsInput } from "./showTagsInput.js";
import { closeList } from "./openCloseTagsList.js";
import { crossClose } from "./utils.js";
import { gallery } from "./gallery.js";
import { htmlAdd } from "/data/htmlAdd.js";

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
          } else {
            gallery(recipes);
            closeList(ingredientBtn);
            ingredientBtn.innerHTML = "";
            crossClose(ingredientBtn);
          }

          break;
        case "appliances":
          Template = new TagInput(applianceTags, input.value);
          appliancesArrayList = Template.listAppliance();

          showTagsInput(
            input,
            appliancesArrayList,
            applianceTagsList,
            applianceBtn
          );

          break;
        case "ustensils":
          Template = new TagInput(ustensilsTags, input.value);
          ustensilsArrayList = Template.listUstensils();

          showTagsInput(
            input,
            ustensilsArrayList,
            ustensilsTagsList,
            ustensilBtn
          );

          break;
      }
    })
  );
}
