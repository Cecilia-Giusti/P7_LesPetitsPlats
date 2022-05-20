/**Fonction pour afficher le tag choisi
 * @param {string} item - L'item qui reçoit le nouveau css
 * @param {string} item_dataset - tag choisi
 * @param {string} classAddTagItem - class à ajouter au tag à l'ouverture
 * @param {string} classAddTagItemOpen - class à ajouter au tag à la fermeture
 * @param {string} classAddDataSet - nom du dataset à ajouter
 */
export function tagOpen(
  item,
  item_dataset,
  classAddTagItem,
  classAddTagItemOpen,
  classAddDataSet
) {
  const tagsListChoose = document.getElementById("tags");

  const tagsItemChoose = document.createElement("li");
  tagsItemChoose.setAttribute("class", classAddTagItem);

  tagsItemChoose.setAttribute(classAddDataSet, item_dataset);
  const tagItemChoose = `
            ${item_dataset}
            <svg class="svg__close" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" 
fill="white"/>
</svg>
            `;
  tagsItemChoose.innerHTML = tagItemChoose;

  tagsListChoose.appendChild(tagsItemChoose);
  item.setAttribute("class", classAddTagItemOpen);
}