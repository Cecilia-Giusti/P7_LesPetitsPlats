/**Template - Pour les tags
 * @constructor
 * @param {object} recipes - Toutes les recettes
 */
export class ListTag {
  constructor(recipes) {
    this._recipes = recipes;
    this._ingredients = recipes.ingredients;
    this._appliance = recipes.appliance;
    this._ustensils = recipes.ustensils;
  }

  createListIngredients() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-block flex-fill ingredients__list border-radius--bottom"
    );

    const applianceList = `
      ${this._ingredients}
            `;

    $wrapper.innerHTML = applianceList;
    return $wrapper;
  }

  createListAppliance() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-block appliances__list border-radius--bottom"
    );

    const applianceList = `
      ${this._appliance}
            `;

    $wrapper.innerHTML = applianceList;
    return $wrapper;
  }

  createListUstensils() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-block ustensils__list border-radius--bottom"
    );

    const ustensilsList = `
      ${this._ustensils}
            `;

    $wrapper.innerHTML = ustensilsList;
    return $wrapper;
  }
}
