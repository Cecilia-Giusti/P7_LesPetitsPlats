/**Class pour la création d'une galerie en fonction de la recherche
 * @param {Array} recipes - Toutes les recettes
 * @param {string} research - Valeur de la barre de recherche
 */
export class Research {
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.trim().toLowerCase();
    this.$mainWrapper = document.getElementById("recipes");
  }

  /**Recherche des recettes correspondantes et ajout dans un tableau */
  researchSort() {
    let recipesArray = [];

    this._recipes.forEach((element) => {
      if (
        element.name.toLowerCase().includes(this._research) ||
        element.description.toLowerCase().includes(this._research)
      ) {
        recipesArray.push(element);
      }

      element.ingredients.forEach((ingredient) => {
        if (ingredient.ingredient.toLowerCase().indexOf(this._research) >= 0) {
          recipesArray.push(element);
        }
      });
    });

    return [...new Set([...recipesArray])];
  }
}
