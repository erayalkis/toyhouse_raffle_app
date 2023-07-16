import { addPathToUrl, makeQueryFromOptions } from "./queryBuilder";

export const get = async (url) => {
  let res = await fetch(url);
  let json = await res.json();

  return json;
};

export const getCharacter = async (character) => {
  let url = addPathToUrl(`/character/${character.id}`);
  let json = get(url);
  return json;
};

export const getCharacterDetails = async (character) => {
  let url = addPathToUrl(`/character/${character.id}`);
  let json = get(url);
  return json;
};

export const getRaffleTickets = async (options) => {
  let url = makeQueryFromOptions(options);
  let json = get(url);
  return json;
};
