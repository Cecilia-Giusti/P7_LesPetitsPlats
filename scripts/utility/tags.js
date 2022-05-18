import { TagChoose } from "../Class/TagChoose.js";
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

/**Fonction de recherche par tags
 * @param  {array} recipes - Les recettes disponibles
 * @param {string} tag - Tag à chercher dans les recettes
 */
export function searchTag(recipes, tag) {
  const recipesResearch = new TagChoose(recipes, tag);
  const newRecipes = recipesResearch.tagChoosen();
  return newRecipes;
}

/**Fonction pour enlever la recherche d'un tag
 * @param  {array} recipes - Les recettes disponibles
 * @param {string} tag - Tag à chercher dans les recettes
 */
export function searchTagDelete(recipes, tag) {
  const recipesResearch = new TagChoose(recipes, tag);
  const newRecipes = recipesResearch.tagDelete();
  return newRecipes;
}
