/** Fermer une liste de tags
 * @param {} //Don't
 * @param {}
 */
export function crossCloseList(tagsList, input, classAddListClose) {
  tagsList.lastChild.innerHTML = "";
  input.setAttribute("class", classAddListClose);
  // Changement de bootstrap
  tagsList.parentNode.setAttribute("class", "col-sm-4 col-lg-2");
  console.log(tagsList.querySelector("ul"));
  tagsList.querySelector("ul").remove();
}

/** Fermer un tag */
export function tagClose(item, classAddTagItemClose) {
  let tagsClose = document.querySelectorAll(".svg__close");
  tagsClose.forEach((cross) =>
    cross.addEventListener("click", function (e) {
      e.preventDefault();
      cross.parentNode.remove();
      item.setAttribute("class", classAddTagItemClose);
    })
  );
}
