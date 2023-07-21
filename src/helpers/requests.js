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
  console.log(url);
  let json = get(url);
  return json;
};

export const getRaffleTicketsForAll = async (optsArray) => {
  let list = {};

  for (let idx = 0; idx < optsArray.length; idx++) {
    const opt = optsArray[idx];
    const res = await getRaffleTickets(opt);

    if (idx === 0) {
      list = res;
    } else {
      Object.keys(res).forEach((user) => {
        let userObj = res[user];

        if (Object.hasOwn(list, user)) {
          list[user].ticket_count += userObj.ticket_count;
        }
      });
    }
  }

  return list;
};

export const chunkArray = (arr, size) => {
  const mainArr = [];

  for (let i = 0; i < arr.length; i += size) {
    mainArr.push(arr.slice(i, i + size));
  }

  return mainArr;
};
