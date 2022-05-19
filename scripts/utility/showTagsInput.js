import { openList, closeList } from "./openCloseTagsList.js";
import { crossClose, crossOpen } from "./utils.js";

export function showTagsInput(input, arrayList, tagsList, btn) {
  if (input.value != "") {
    if (arrayList.length >= 1) {
      console.log(tagsList);
      tagsList.innerHTML = "";
      tagsList.innerHTML = arrayList;
      openList(btn);
      btn.innerHTML = "";
      crossOpen(btn);
    } else {
      tagsList.remove();
    }
  } else {
    closeList(btn);
    btn.innerHTML = "";
    crossClose(btn);
  }
}
