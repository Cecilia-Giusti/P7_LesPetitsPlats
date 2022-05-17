import { GetTags } from "../models/GetTags.js";
import { ListTag } from "../templates/ListTag.js";

/** Création des tags
 * @param  {array} recipes - Les recettes disponibles
 */
export function tags(recipes) {
  //Instanciation des Class
  const tagsGet = new GetTags(recipes);
  const template = new ListTag(tagsGet);
  return template;
}
