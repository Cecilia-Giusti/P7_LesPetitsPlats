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
      <li class ="list-group-item background-secondary appliance__item"> ${applianceName} </li>`;
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
      <li class ="list-group-item background-tertiary ustensil__item"> ${ustensilName} </li>`;
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
      <li class ="list-group-item background-primary ingredient__item"> ${ingredientName} </li>`;
      ingredientsArraySort.push(ingredientItem);
    });

    return ingredientsArraySort.join(" ");
  }
}
