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

  /** Création de la liste des ingrédients */
  createListIngredients() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none ingredients__list border-radius--bottom col-sm-12"
    );

    const ingredientList = `
      ${this._ingredients}
            `;

    $wrapper.innerHTML = ingredientList;
    return $wrapper;
  }

  /** Création de la liste des appareils */
  createListAppliance() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none appliances__list border-radius--bottom col-sm-12 "
    );

    const applianceList = `
      ${this._appliance}
            `;

    $wrapper.innerHTML = applianceList;
    return $wrapper;
  }

  /** Création de la liste des ustensils */
  createListUstensils() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none ustensils__list border-radius--bottom col-sm-12"
    );

    const ustensilsList = `
      ${this._ustensils}
            `;

    $wrapper.innerHTML = ustensilsList;
    return $wrapper;
  }
}
