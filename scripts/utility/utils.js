//UTILS

/** Afficher un message d'erreur
 * @param {string} errorMessage - Message d'erreur à afficher
 */
export function errorMessage(errorMessage) {
  const recipesSection = document.querySelector("#recipes");

  const errorSearch = document.createElement("p");
  errorSearch.setAttribute("class", "errorSearch");
  errorSearch.innerHTML = errorMessage;
  recipesSection.appendChild(errorSearch);
}

/** Fonction pour changer le sens de la flèche à l'ouverture de la liste
 * @param {string} button - Le bouton cliqué
 */
export function crossOpen(button) {
  const arrowUp = document.createElement("i");
  arrowUp.setAttribute("class", "fi fi-bs-angle-up");
  button.appendChild(arrowUp);
  button.setAttribute("class", "tags__button open");
}

/** Fonction pour changer le sens de la flèche à la fermture de la liste
 * @param {string} button - Le bouton cliqué
 */
export function crossClose(button) {
  const arrowDown = document.createElement("i");
  arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
  button.appendChild(arrowDown);
  button.setAttribute("class", "tags__button");
}

/** Fonction pour récupérer le dataset en fonction de l'item
 * @return {string} dataset.ingredient || dataset.ustensil || dataset.appliance
 */
export function tagDataset(item) {
  if (item.dataset.ingredient) {
    return item.dataset.ingredient;
  } else if (item.dataset.ustensil) {
    return item.dataset.ustensil;
  } else {
    return item.dataset.appliance;
  }
}
