import { TagInput } from "../Class/TagInput.js";
import { showTagsInput } from "./showTagsInput.js";

export function searchTagsInput() {
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
          Template = new TagInput(ingredientsTags, input.value);
          ingredientsArrayList = Template.listIngredient();

          showTagsInput(
            input,
            ingredientsArrayList,
            ingredientsTagsList,
            ingredientBtn
          );

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
