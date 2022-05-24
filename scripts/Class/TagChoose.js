/**Class pour la création d'une galerie en fonction de la recherche*/
export class TagChoose {
  /** Création de la recherche
   * @param {Array} recipes - Toutes les recettes
   * @param {string} research - Valeur de la barre de recherche
   */
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.toLowerCase();
  }

  /**Recherche des recettes correspondantes et ajout dans un tableau
   * @return {array} Un tableau des recettes correspondant à la recherche
   */
  tagChoosen() {
    let recipesArray = this._recipes.filter((recipe) => {
      let ingredientArray = recipe.ingredients.map((item) =>
        item.ingredient.toLowerCase()
      );

      let ustensilsArray = recipe.ustensils.map((ustensil) =>
        ustensil.toLowerCase()
      );

      return (
        recipe.appliance.toLowerCase().includes(this._research) ||
        ustensilsArray.includes(this._research) ||
        ingredientArray.includes(this._research)
      );
    });

    return recipesArray;
  }
}
