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
 * @param {Element} button - Le bouton cliqué
 */
export function crossOpen(button) {
  const arrowUp = document.createElement("i");
  arrowUp.setAttribute("class", "fi fi-bs-angle-up");
  button.appendChild(arrowUp);
  button.setAttribute("class", "tags__button open");
}

/** Fonction pour changer le sens de la flèche à la fermture de la liste
 * @param {Element} button - Le bouton cliqué
 */
export function crossClose(button) {
  const arrowDown = document.createElement("i");
  arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
  button.appendChild(arrowDown);
  button.setAttribute("class", "tags__button");
}

/** Fonction pour récupérer le dataset en fonction de l'item
 * @return {ParentNode} dataset.ingredient || dataset.ustensil || dataset.appliance
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

/** Fonction pour empêcher le même tag ingredient d'etre rajouter
 * @param {string} htmlAddListItemOpen - class à ajouter pour retirer l'ingredient de la liste
 */
export function updateTagsListIngredient(htmlAddListItemOpen) {
  let tagsChoosenIngredient = Array.from(
    document.querySelectorAll(".tag__item--ingredient")
  );
  let tagsListIngredient = Array.from(
    document.querySelectorAll(".ingredient__item")
  );
  if (tagsChoosenIngredient.length >= 1) {
    for (let i = 0; i < tagsChoosenIngredient.length; i++) {
      for (let y = 0; y < tagsListIngredient.length; y++) {
        if (
          tagsListIngredient[y].dataset.ingredient.includes(
            tagsChoosenIngredient[i].dataset.ingredient
          )
        ) {
          tagsListIngredient[y].setAttribute("class", htmlAddListItemOpen);
        }
      }
    }
  }
}

/** Fonction pour empêcher le même tag ustensil d'etre rajouter
 * @param {string} htmlAddListItemOpen - class à ajouter pour retirer l'ustensil de la liste
 */
export function updateTagsListUstensil(htmlAddListItemOpen) {
  let tagsChoosenUstensil = Array.from(
    document.querySelectorAll(".tag__item--ustensil")
  );
  let tagsListUstensil = Array.from(
    document.querySelectorAll(".ustensil__item")
  );
  if (tagsChoosenUstensil.length >= 1) {
    for (let i = 0; i < tagsChoosenUstensil.length; i++) {
      for (let y = 0; y < tagsListUstensil.length; y++) {
        if (
          tagsListUstensil[y].dataset.ustensil.includes(
            tagsChoosenUstensil[i].dataset.ustensil
          )
        ) {
          tagsListUstensil[y].setAttribute("class", htmlAddListItemOpen);
        }
      }
    }
  }
}

/** Fonction pour empêcher le même tag appareil d'etre rajouter
 * @param {string} htmlAddListItemOpen - class à ajouter pour retirer l'appareil de la liste
 */
export function updateTagsListAppliance(htmlAddListItemOpen) {
  let tagsChoosenAppliance = Array.from(
    document.querySelectorAll(".tag__item--appliance")
  );
  let tagsListAppliance = Array.from(
    document.querySelectorAll(".appliance__item")
  );
  if (tagsChoosenAppliance.length >= 1) {
    for (let i = 0; i < tagsChoosenAppliance.length; i++) {
      for (let y = 0; y < tagsListAppliance.length; y++) {
        if (
          tagsListAppliance[y].dataset.appliance.includes(
            tagsChoosenAppliance[i].dataset.appliance
          )
        ) {
          tagsListAppliance[y].setAttribute("class", htmlAddListItemOpen);
        }
      }
    }
  }
}
