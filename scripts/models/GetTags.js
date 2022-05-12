/**Constructor Pattern - Pour les recettes
 * @constructor
 * @param {object} recipes - Toutes les recettes
 */
export class GetTags {
  constructor(recipes) {
    this._recipes = recipes;
  }

  get recipe() {
    return this._recipe;
  }

  get appliance() {
    let applianceArray = [];
    let applianceArraySort = [];

    this._recipes.forEach((recipe) => {
      if (!applianceArray.includes(recipe.appliance)) {
        applianceArray.push(recipe.appliance);
      }
    });

    applianceArray.forEach((applianceName) => {
      const applianceItem = `
      <li data-appliance="${applianceName}" class ="list-group-item background-secondary col-4 col-sm-6 col-lg-12 display-inline appliance__item"> ${applianceName} </li>`;
      applianceArraySort.push(applianceItem);
    });

    return applianceArraySort.join(" ");
  }

  get ustensils() {
    let ustensilArray = [];
    let ustensilsArraySort = [];

    this._recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        if (!ustensilArray.includes(ustensil)) {
          ustensilArray.push(ustensil);
        }
      });
    });

    ustensilArray.forEach((ustensilName) => {
      const ustensilItem = `
      <li data-ustensil="${ustensilName}" class ="list-group-item background-tertiary col-4 col-sm-6 col-lg-6 display-inline ustensil__item"> ${ustensilName} </li>`;
      ustensilsArraySort.push(ustensilItem);
    });

    return ustensilsArraySort.join(" ");
  }

  get ingredients() {
    let ingredientsArray = [];
    let ingredientsArraySort = [];

    this._recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredientName) => {
        if (!ingredientsArray.includes(ingredientName.ingredient)) {
          ingredientsArray.push(ingredientName.ingredient);
        }
      });
    });

    ingredientsArray.forEach((ingredientName) => {
      const ingredientItem = `
      <li data-ingredient="${ingredientName}" class ="list-group-item background-primary ingredient__item col-4 col-sm-4 display-inline"> ${ingredientName} </li>`;
      ingredientsArraySort.push(ingredientItem);
    });

    return ingredientsArraySort.join(" ");
  }
}
