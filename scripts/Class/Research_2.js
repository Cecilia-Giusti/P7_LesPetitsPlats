/**Class pour la création d'une galerie en fonction de la recherche
 * @param {Array} recipes - Toutes les recettes
 * @param {string} research - Valeur de la barre de recherche
 */
export class Research_2 {
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.toLowerCase();
  }

  /**Recherche des recettes correspondantes et ajout dans un tableau */
  researchSort() {
    let recipesArray = this._recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(this._research) ||
        recipe.description.toLowerCase().includes(this._research) ||
        recipe.ingredients.filter((ingredientName) => {
          return ingredientName.ingredient
            .toLowerCase()
            .includes(this._research);
        })
      );
    });
    return recipesArray;
  }
}
