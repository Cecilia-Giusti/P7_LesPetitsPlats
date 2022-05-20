/**Constructor Pattern - Pour les recettes*/
export class GetRecipes {
  /** Créer une recette
   * @param {object} recipe - Une recette
   */
  constructor(recipe) {
    this._recipe = recipe;
    this._name = recipe.name;
    this._time = recipe.time;
    this._ingredients = recipe.ingredients;
    this._description = recipe.description;
  }

  /** Get the recipe
   * @return {object} La recette
   */
  get recipe() {
    return this._recipe;
  }

  /** Get the name
   * @return {string} Le nom de la recette
   */
  get name() {
    return this._name;
  }

  /** Get the time
   * @return {string} Le temps pour faire la recette
   */
  get time() {
    return this._time;
  }

  /** Get the name
   * @return {string} La liste des ingrédients de la recette
   */
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

  /** Get the description
   * @return {string} La description de la recette
   */
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
