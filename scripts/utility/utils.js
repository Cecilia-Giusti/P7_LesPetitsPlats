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
