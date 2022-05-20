import { openList } from "./openCloseTagsList.js";
import { crossOpen } from "./utils.js";

export function showTagsInput(arrayList, tagsList, btn, errorMessageInput) {
  if (arrayList.length >= 1) {
    console.log(tagsList);
    tagsList.innerHTML = "";
    tagsList.innerHTML = arrayList;
    openList(btn);
    btn.innerHTML = "";
    crossOpen(btn);
  } else {
    tagsList.innerHTML = "";
    tagsList.innerHTML = errorMessageInput;
  }
}
