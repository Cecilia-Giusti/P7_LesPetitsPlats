/**Class pour la création d'une galerie en fonction de la recherche*/
export class Research {
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
  researchSort() {
    let recipesArray = [];
    let recipesIndex = 0;

    for (let i = 0; i < this._recipes.length; i++) {
      if (
        this._recipes[i].name.toLowerCase().includes(this._research) ||
        this._recipes[i].description.toLowerCase().includes(this._research)
      ) {
        recipesArray[recipesIndex] = this._recipes[i];
        recipesIndex++;
      } else {
        for (let y = 0; y < this._recipes[i].ingredients.length; y++) {
          if (
            this._recipes[i].ingredients[y].ingredient
              .toLowerCase()
              .includes(this._research)
          ) {
            recipesArray[recipesIndex] = this._recipes[i];
            recipesIndex++;
          }
        }
      }
    }

    return recipesArray;
  }
}
