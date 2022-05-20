/**Constructor Pattern - Pour les listes de tags*/
export class GetTags {
  /**Créer un tableau de recettes
   * @param {array} recipes - Toutes les recettes
   */
  constructor(recipes) {
    this._recipes = recipes;
  }

  /** Get the appliance
   * @return {string} La liste des appareils disponibles
   */
  get appliances() {
    let applianceArray = [];
    let applianceArraySort = [];
    let applianceArraySortLi = [];

    this._recipes.forEach((recipe) => {
      if (!applianceArray.includes(recipe.appliance)) {
        applianceArray.push(recipe.appliance);
      }
    });

    applianceArraySort = applianceArray.sort(function (a, b) {
      return a.localeCompare(b);
    });

    applianceArraySort.forEach((applianceName) => {
      const applianceItem = `
      <li data-appliance="${applianceName}" class ="list-group-item background-secondary col-4 col-sm-6 col-lg-12 display-inline appliance__item"> ${applianceName} </li>`;
      applianceArraySortLi.push(applianceItem);
    });

    return applianceArraySortLi.join(" ");
  }

  /** Get the ustensil
   * @return {string} La liste des ustensils disponibles
   */
  get ustensils() {
    let ustensilArray = [];
    let ustensilsArraySort = [];
    let ustensilsArraySortLi = [];

    this._recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        if (!ustensilArray.includes(ustensil)) {
          ustensilArray.push(ustensil);
        }
      });
    });

    ustensilsArraySort = ustensilArray.sort(function (a, b) {
      return a.localeCompare(b);
    });

    ustensilsArraySort.forEach((ustensilName) => {
      const ustensilItem = `
      <li data-ustensil="${ustensilName}" class ="list-group-item background-tertiary col-4 col-sm-6 col-lg-6 display-inline ustensil__item"> ${ustensilName} </li>`;
      ustensilsArraySortLi.push(ustensilItem);
    });

    return ustensilsArraySortLi.join(" ");
  }

  /** Get the ingredient
   * @return {string} La liste des ingredients disponibles
   */
  get ingredients() {
    let ingredientsArray = [];
    let ingredientsArraySort = [];
    let ingredientsArraySortLi = [];

    this._recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredientName) => {
        if (!ingredientsArray.includes(ingredientName.ingredient)) {
          ingredientsArray.push(ingredientName.ingredient);
        }
      });
    });

    ingredientsArraySort = ingredientsArray.sort(function (a, b) {
      return a.localeCompare(b);
    });

    ingredientsArraySort.forEach((ingredientName) => {
      const ingredientItem = `
      <li data-ingredient="${ingredientName}" class ="list-group-item background-primary ingredient__item col-4 col-sm-4 display-inline"> ${ingredientName} </li>`;
      ingredientsArraySortLi.push(ingredientItem);
    });

    return ingredientsArraySortLi.join(" ");
  }
}
