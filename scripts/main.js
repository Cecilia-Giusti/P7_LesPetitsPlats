import { recipes } from "../data/recipes.js";

/** FONCTION D INITIATION DE LA PAGE D ACCUEIL */
async function init() {
  // Création du tableau des recettes
  displayData(recipes);

  // BARRE DE RECHERCHE

  //Recherche des recettes via la barre de recherche
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Vider la barre de recherche lors du click
  researchInput.addEventListener("click", () => {
    researchInput.defaultValue = "";
  }); // Don't - remettre une valeur lors d'un click ailleurs

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

  // Vider les champs  lors du click
  tagsInput.forEach((input) =>
    input.addEventListener("click", function () {
      input.defaultValue = "";
      console.log(input.id);
    })
  );

  // Ouvrir les onglets lors du click sur la flèche
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(button);

      // Changement de l'icone
      button.innerHTML = "";
      arrow(button);
    })
  );

  /**Fonction pour le changement d'icone en fonction de l'ouverture d'un tag
   * @param {}
   */
  function arrow(button) {
    if (button.getAttribute("class") != "tags__button open") {
      const arrowUp = document.createElement("i");
      arrowUp.setAttribute("class", "fi fi-bs-angle-up");
      button.appendChild(arrowUp);
      button.setAttribute("class", "tags__button open");
    } else {
      const arrowDown = document.createElement("i");
      arrowDown.setAttribute("class", "fi fi-bs-angle-down ");
      button.appendChild(arrowDown);
      button.setAttribute("class", "tags__button");
    }
  }

  // Fermer les onglets lors que click sur la flèche
}

init();
