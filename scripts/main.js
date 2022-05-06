import { recipes } from "../data/recipes.js";

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Création du tableau des recettes
  displayData(recipes);

  // BARRE DE RECHERCHE

  //Recherche des recettes via la barre de recherche
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Evenement à l'envoi de la recherche
  researchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //Valeur de la recherche
    const research = researchInput.value;

    // Vérification de la condition de 3 lettres
    const regexSup3letters = new RegExp(
      "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°]{3,}$"
    );

    if (regexSup3letters.test(research)) {
      // Récupérer les recettes de la recherche
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();

      //Création de la nouvelle galerie à partir de la recherche
      clearGallery();
      displayData(newRecipes);
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
    }
  });

  // TAGS
  const tagsInput = document.querySelectorAll(".tags__input");
  const tagsBtn = document.querySelectorAll(".tags__button");

  // Ouvrir les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(button);

      button.innerHTML = "";
      if (button.getAttribute("class") != "tags__button open") {
        // Changement de l'icone
        const arrowUp = document.createElement("i");
        arrowUp.setAttribute("class", "fi fi-bs-angle-up");
        button.appendChild(arrowUp);
        button.setAttribute("class", "tags__button open");

        // Ouverture de la liste
      } else {
        // Changement de l'icone
        const arrowDown = document.createElement("i");
        arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
        button.appendChild(arrowDown);
        button.setAttribute("class", "tags__button");

        // Fermeture de la liste
      }
    })
  );

  // Fermer les onglets lors que click sur la flèche
}

init();
