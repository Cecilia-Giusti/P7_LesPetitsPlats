export const htmlAdd = {
  ingredient: {
    tagItem: "tag__item tag__item--ingredient display-inline",
    listItemOpen:
      "list-group-item background-primary ingredient__item ingredient__item--open col-4 col-sm-4 display-none",
    listItemClose:
      "list-group-item background-primary ingredient__item col-4 col-sm-4 display-inline",
    tagInputOpen:
      "background-primary p-3 border-radius--top tags__input tags__input--open",
    classAddListClose: "background-primary p-3 border-radius--full tags__input",
    classAddDataSet: "data-ingredient",
    errorMessageInput: `<li class="ingredients__error">Aucun ingrédient ne correspond à votre recherche</li>`,
  },
  ustensil: {
    tagItem: "tag__item tag__item--ustensil display-inline",
    listItemOpen:
      "list-group-item background-tertiary ustensil__item ustensil__item--open col-4 col-sm-6 col-lg-6 display-none",
    listItemClose:
      "list-group-item background-tertiary ustensil__item col-4 col-sm-6 col-lg-6 display-inline",
    tagInputOpen:
      "background-tertiary p-3 border-radius--top tags__input tags__input--open",
    classAddListClose:
      "background-tertiary p-3 border-radius--full tags__input",
    classAddDataSet: "data-ustensil",
    errorMessageInput: `<li class="ustensils__error">Aucun ustensil ne correspond à votre recherche</li>`,
  },
  appliance: {
    tagItem: "tag__item tag__item--appliance display-inline",
    listItemOpen:
      "list-group-item background-secondary appliance__item appliance__item--open col-4 col-sm-6 col-lg-12 display-none",
    listItemClose:
      "list-group-item background-secondary appliance__item col-4 col-sm-6 col-lg-12 display-inline",
    tagInputOpen:
      "background-secondary p-3 border-radius--top tags__input tags__input--open",
    classAddListClose:
      "background-secondary p-3 border-radius--full tags__input",
    classAddDataSet: "data-appliance",
    errorMessageInput: `<li class="appliances__error">Aucun appareil ne correspond à votre recherche</li>`,
  },
};
