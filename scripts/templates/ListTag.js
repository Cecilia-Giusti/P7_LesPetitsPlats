/**Class pour générer les listes de tags*/
export class ListTag {
  /** Créer un tableau de recette
   * @param {Array} recipes - Toutes les recettes
   */
  constructor(recipes) {
    this._recipes = recipes;
    this._ingredients = recipes.ingredients;
    this._appliances = recipes.appliances;
    this._ustensils = recipes.ustensils;
  }

  /** Création de la liste des ingrédients
   * @return {string} - Liste des ingrédients
   */
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

  /** Création de la liste des appareils
   * @return {string} - Liste des appareils
   */
  createListAppliance() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none appliances__list border-radius--bottom col-sm-12 "
    );

    const applianceList = `
      ${this._appliances}
            `;

    $wrapper.innerHTML = applianceList;
    return $wrapper;
  }

  /** Création de la liste des ustensils
   * @return {string} - Liste des ustensils
   */
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
