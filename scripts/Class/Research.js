/**Class pour la création d'une galerie en fonction de la recherche
 * @param {Array} recipes - Toutes les recettes
 * @param {string} research - Valeur de la barre de recherche
 */
class Research {
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.toLowerCase();
    this.$mainWrapper = document.getElementById("recipes");
  }

  researchSort() {
    console.log(this._recipes[0].ingredients.length);
    let recipesArray = [];
    let recipesIndex = 0;

    for (let i = 0; i < this._recipes.length; i++) {
      if (this._recipes[i].name.includes(this._research)) {
        recipesArray[recipesIndex] = this._recipes[i];
        recipesIndex++;
      }

      if (this._recipes[i].description.includes(this._research)) {
        recipesArray[recipesIndex] = this._recipes[i];
        recipesIndex++;
      }

      for (let y = 0; y < this._recipes[i].ingredients.length; y++) {
        if (
          this._recipes[i].ingredients[y].ingredient.includes(this._research)
        ) {
          recipesArray[recipesIndex] = this._recipes[i];
          recipesIndex++;
        }
      }
    }

    return recipesArray;
  }
}
