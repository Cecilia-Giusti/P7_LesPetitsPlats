/** Class pour créer une carte dans la page d'accueil*/
export class RecipeCard {
  /** Créer une recette
   * @param {object} recipe - une recette
   */
  constructor(recipe) {
    this._recipe = recipe;
    this._name = recipe.name;
    this._time = recipe.time;
    this._ingredients = recipe.ingredients;
    this._description = recipe.description;
  }

  /**  Méthode pour créer une carte de photographe
   * @return {HTMLDivElement} - un article representant une carte de recette
   */
  createRecipeCard() {
    const $wrapper = document.createElement("div");
    $wrapper.setAttribute("class", "col-sm-6 col-lg-4 ");

    const recipeCard = `
              <article class="container p-0 recipe overflow">
                  <!-- Image -->
                  <div class="row">
                    <div class="gris"></div>
                  </div>
                  <!-- Contenu de la recette -->
                  <div class="row">
                    <div class="recipe__content">
                      <div class="container p-4">
                        <!-- Titre et temps -->
                        <div class="row">
                          <div class="col-6 col-sm-7 ps-2 pe-0">
                            <h1>${this._name}</h1>
                          </div>
                          <div
                            class="offset-2 col-4  col-sm-5 offset-md-1 col-md-4 offset-lg-0 col-lg-5 text-end offset-xl-1 col-xl-4"
                          >
                            <i class="fi fi-rr-clock"></i>
                            <h2 class="d-inline ms-2">${this._time} min</h2>
                          </div>
                        </div>
                        <!-- Ingrédients -->
                        <div class="row mt-2 pt-2">
                          <div class="col-lg-6 p-0 pe-2">
                            <ul class="ps-2">
                              ${this._ingredients}
                            </ul>
                          </div>
                          <!-- Etapes à suivre -->
                          <div class=" col-lg-6 p-0 ">
                            <p class="recipe__description">
                              ${this._description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
              </article>

            `;

    $wrapper.innerHTML = recipeCard;
    return $wrapper;
  }
}
