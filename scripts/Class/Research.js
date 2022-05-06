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
      if (element.name.toLowerCase().indexOf(this._research) >= 0) {
        recipesArray.push(element);
      }

      if (element.description.toLowerCase().indexOf(this._research) >= 0) {
        recipesArray.push(element);
      }
      element.ingredients.forEach((ingredient) => {
        if (ingredient.ingredient.toLowerCase().indexOf(this._research) >= 0) {
          recipesArray.push(element);
        }
      });
    });

    return this.setSort(recipesArray);
  }

  /** Suppression des doublons
   * @param {array} array - Tableau à trier
   */
  setSort(array) {
    if (array.length <= 1) {
      return array;
    } else {
      return [...new Set([...array])];
    }
  }
}
