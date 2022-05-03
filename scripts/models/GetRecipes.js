/**Constructor Pattern - Pour les recettes
 * @constructor
 * @param {object} recipe - Une recette
 */
class GetRecipes {
  constructor(recipe) {
    this._recipe = recipe;
    this._name = recipe.name;
    this._time = recipe.time;
    this._ingredients = recipe.ingredients;
    this._description = recipe.description;
  }

  get recipe() {
    return this._recipe;
  }

  get name() {
    return this._name;
  }

  get time() {
    return this._time;
  }

  get ingredients() {
    let ingredients = [];
    let i = 0;
    do {
      // Si Un ingrédient existe
      if (this._ingredients[i].ingredient) {
        // Si une quantité existe
        if (this._ingredients[i].quantity) {
          // Si une unité existe
          if (this._ingredients[i].unit) {
            ingredients.push(`<li>
            <p class="recipe__ingredient d-inline">
             ${this._ingredients[i].ingredient} :
            </p>
            <p class="recipe__quantity d-inline">${this._ingredients[i].quantity}${this._ingredients[i].unit}</p>
          </li>`);
            i++;
          } else {
            ingredients.push(`<li>
          <p class="recipe__ingredient d-inline">
           ${this._ingredients[i].ingredient} :
          </p>
          <p class="recipe__quantity d-inline">${this._ingredients[i].quantity}</p>
        </li>`);
            i++;
          }
        } else {
          ingredients.push(`<li>
        <p class="recipe__ingredient d-inline">
         ${this._ingredients[i].ingredient} 
        </p>
      </li>`);
          i++;
        }
      }
    } while (i < this._ingredients.length); // Tant que la liste d'ingrédients n'est pas completement ajoutée
    return ingredients.join(" ");
  }

  get description() {
    const regexInfWords = new RegExp("^\\s*\\S+(?:\\s+\\S+){0,40}\\s*$");

    const regexSupWords = new RegExp(
      "^([:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°]{0,}[\\s\\.]){0,40}"
    );

    if (regexInfWords.test(this._description)) {
      return this._description;
    } else {
      const description = this._description.match(regexSupWords);
      return description[0].concat("...");
    }
  }
}
