/**Class pour la création d'une galerie en fonction de la recherche
 * @param {Array} recipes - Toutes les recettes
 * @param {string} research - Valeur de la barre de recherche
 */
export class TagChoose {
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.toLowerCase();
  }

  /**Recherche des recettes correspondantes et ajout dans un tableau */
  tagChoosenIngredients() {
    let recipesArray = this._recipes.ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(this._research);
    });
    return recipesArray;
  }
}
