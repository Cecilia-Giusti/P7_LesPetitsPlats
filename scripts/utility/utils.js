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

export function crossOpen(button) {
  // Changement de l'icone
  const arrowUp = document.createElement("i");
  arrowUp.setAttribute("class", "fi fi-bs-angle-up");
  button.appendChild(arrowUp);
  button.setAttribute("class", "tags__button open");
}

export function crossClose(button) {
  // Changement de l'icone
  const arrowDown = document.createElement("i");
  arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
  button.appendChild(arrowDown);
  button.setAttribute("class", "tags__button");
}
