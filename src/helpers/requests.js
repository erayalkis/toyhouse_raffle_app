import { addPathToUrl, makeQueryFromOptions } from "./queryBuilder";

export const get = async (url) => {
  let res = await fetch(url);
  let json = await res.json();

  return json;
};

export const getCharacter = async (characterId) => {
  let url = addPathToUrl(`/character/${characterId}`);
  let json = get(url);
  return json;
};

export const getCharacterDetails = async (characterId) => {
  let url = addPathToUrl(`/character/${characterId}/details`);
  let json = get(url);
  return json;
};

export const getRaffleTickets = async (options) => {
  let url = makeQueryFromOptions(options);
  let json = get(url);
  return json;
};
