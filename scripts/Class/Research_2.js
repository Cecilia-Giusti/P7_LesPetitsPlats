/**Class pour la création d'une galerie en fonction de la recherche
 * @param {Array} recipes - Toutes les recettes
 * @param {string} research - Valeur de la barre de recherche
 */
export class Research_2 {
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.trim().toLowerCase();
  }

  // /**Recherche des recettes correspondantes et ajout dans un tableau */
  // researchSort() {
  //   let recipesArray = this._recipes.filter((recipe) => {
  //     let ingredientArray = recipe.ingredients.map((item) =>
  //       item.ingredient.toLowerCase()
  //     );
  //     return (
  //       recipe.name.toLowerCase().includes(this._research) ||
  //       recipe.description.toLowerCase().includes(this._research) ||
  //       ingredientArray.includes(this._research)
  //     );
  //   });
  //   console.log(recipesArray);
  //   return recipesArray;
  // }

  /**Recherche des recettes correspondantes et ajout dans un tableau */
  researchSort() {
    let recipesArray = this._recipes.filter((recipe) => {
      if (
        recipe.name.toLowerCase().includes(this._research) ||
        recipe.description.toLowerCase().includes(this._research)
      ) {
        return (
          recipe.name.toLowerCase().includes(this._research) ||
          recipe.description.toLowerCase().includes(this._research)
        );
      } else {
        let ingredientArray = recipe.ingredients.map((item) =>
          item.ingredient.toLowerCase()
        );
        return ingredientArray.includes(this._research);
      }
    });
    console.log(recipesArray);
    return recipesArray;
  }
}
