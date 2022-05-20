/**Class pour la création d'une galerie en fonction de la recherche dans l'input*/
export class TagInput {
  /** Création de la recherche
   * @param {NodeList} list - Liste des items à trier
   * @param {string} research - Valeur de la barre de recherche
   */
  constructor(list, research) {
    this._list = list;
    this._research = research.trim().toLowerCase();
  }

  /**Recherche des ingrédients correspondants à la recherche
   * @return {} Liste des ingrédients correspondant à la recherche
   */
  listIngredient() {
    let listArray = [];
    let ingredientItem;

    this._list.forEach((li) => {
      if (li.dataset.ingredient.toLowerCase().includes(this._research)) {
        ingredientItem = `
        <li data-ingredient="${li.dataset.ingredient}" class ="list-group-item background-primary ingredient__item col-4 col-sm-4 display-inline"> ${li.dataset.ingredient} </li>`;

        listArray.push(ingredientItem);
      }
    });
    return listArray;
  }

  /**Recherche des ustensils correspondants à la recherche
   * * @return {string} Liste des ustensils correspondant à la recherche
   */
  listUstensils() {
    let listArray = [];
    let ustensilItem;
    this._list.forEach((li) => {
      if (li.dataset.ustensil.toLowerCase().includes(this._research)) {
        ustensilItem = `
        <li data-ustensil="${li.dataset.ustensil}" class ="list-group-item background-tertiary col-4 col-sm-6 col-lg-6 display-inline ustensil__item"> ${li.dataset.ustensil} </li>`;

        listArray.push(ustensilItem);
      }
    });

    return listArray;
  }

  /**Recherche des appareils correspondants à la recherche
   * * @return {} Liste des appareils correspondant à la recherche
   */
  listAppliance() {
    let listArray = [];
    let applianceItem;
    this._list.forEach((li) => {
      if (li.dataset.appliance.toLowerCase().includes(this._research)) {
        applianceItem = `
        <li data-appliance="${li.dataset.appliance}" class ="list-group-item background-secondary col-4 col-sm-6 col-lg-12 display-inline appliance__item"> ${li.dataset.appliance} </li>`;

        listArray.push(applianceItem);
      }
    });

    return listArray;
  }
}
