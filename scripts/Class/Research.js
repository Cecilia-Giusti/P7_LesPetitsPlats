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
    // Recherche dans le nom des recettes
    let nameLoop = 0;
    let nameIndex = 0;
    let nameArray = [];

    while (nameLoop < this._recipes.length) {
      for (let i = 0; i < this._recipes.length; i++) {
        if (this._recipes[i].name.toLowerCase().indexOf(this._research) >= 0) {
          nameArray[nameIndex] = this._recipes[i].id;
          nameLoop++;
          nameIndex++;
        } else {
          nameLoop++;
        }
      }
    }

    // Recherche dans la description des recettes
    let descriptionLoop = 0;
    let descriptionIndex = 0;
    let descriptionArray = [];

    while (descriptionLoop < this._recipes.length) {
      for (let i = 0; i < this._recipes.length; i++) {
        if (
          this._recipes[i].description.toLowerCase().indexOf(this._research) >=
          0
        ) {
          descriptionArray[descriptionIndex] = this._recipes[i].id;
          descriptionLoop++;
          descriptionIndex++;
        } else {
          descriptionLoop++;
        }
      }
    }

    // Recherche dans les ingrédients des recettes
    let ingredientsLoop = 0;
    let ingredientIndex = 0;
    let ingredientsArray = [];

    while (ingredientsLoop < this._recipes.length) {
      for (let i = 0; i < this._recipes.length; i++) {
        for (let y = 0; y < this._recipes[i].ingredients.length; y++) {
          if (
            this._recipes[i].ingredients[y].ingredient
              .toLowerCase()
              .indexOf(this._research) >= 0
          ) {
            ingredientsArray[ingredientIndex] = this._recipes[i].id;
            ingredientsLoop++;
            ingredientIndex++;
            break;
          }
        }
        ingredientsLoop++;
      }
    }

    // Rassemblement des tableaux
    let concatArray = [...nameArray, ...descriptionArray, ...ingredientsArray];

    // Tri du tableau
    let resultResearchId = this.quickSort(concatArray);

    // Création du nouveau tableau de recette
    return this.searchRecipes(resultResearchId);
  }

  /** Tri rapide
   * @param {array} Tableau - Tableau à trier
   */
  quickSort(array) {
    let pivot;
    let researchArrayInf = [];
    let researchArraySup = [];
    let researchIndexInf = 0;
    let researchIndexSup = 0;

    if (array.length <= 1) {
      return array;
    } else {
      pivot = array[array.length - 1];

      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] != pivot && array[i] < pivot) {
          researchArrayInf[researchIndexInf] = array[i];
          researchIndexInf++;
        } else if (array[i] != pivot && array[i] > pivot) {
          researchArraySup[researchIndexSup] = array[i];
          researchIndexSup++;
        }
      }
      return [
        ...this.quickSort(researchArrayInf),
        pivot,
        ...this.quickSort(researchArraySup),
      ];
    }
  }

  /** Methode pour récupérer les recettes en fonction de leur id
   * @param {array} Tableau - Tableau des id des recettes recherchées
   */
  searchRecipes(array) {
    if (array.length >= 1) {
      for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < this._recipes.length; y++) {
          if (array[i] == this._recipes[y].id) {
            array[i] = this._recipes[y];
          }
        }
      }
    } else {
      return array;
    }
    return array;
  }
}
