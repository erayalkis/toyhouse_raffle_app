import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useParticipantsStore = defineStore("participants", () => {
  const list = ref({});
  const searchResults = ref({});
  const winners = ref({});
  const usersByTicketCount = ref([]);
  const loaded = computed(() => Object.keys(list.value).length === 0);

  const setParticipants = (obj) => (list.value = obj);
  const setSearchResults = (obj) => (searchResults.value = obj);

  const deleteParticipants = () => {
    list.value = {};
    winners.value = {};
  };

  const deleteSearchResults = () => (searchResults.value = {});

  const remove = (user) => delete list.value[user];

  const increment = (user) => {
    list.value[user].ticket_count += 1;
  };

  const decrement = (user) => {
    list.value[user].ticket_count -= 1;
  };

  const pickWinners = (winnersCount) => {
    setDupedUsers();

    // Set of usernames
    let seenUsers = new Set();
    let winners = {};

    for (winnersCount; winnersCount > 0; winnersCount--) {
      const idx = getRandomIndex(usersByTicketCount.value.length);
      const selectedUser = usersByTicketCount.value[idx];

      const username = selectedUser.profile.name;
      let inSeen = seenUsers.has(username);
      if (!inSeen) {
        seenUsers.add(username);
        winners[username] = selectedUser;
      }
    }

    return winners;
  };

  const setDupedUsers = () => {
    usersByTicketCount.value = [];

    const usersDupedByTicketCount = [];

    Object.keys(list.value).forEach((username) => {
      let user = list.value[username];
      usersDupedByTicketCount.push(user);
    });

    usersByTicketCount.value = usersDupedByTicketCount;
  };

  const getRandomIndex = (length) => Math.floor(Math.random() * length);
  const rerollWinner = (username) => {
    const dupedWinnersWithoutTarget = usersByTicketCount.value.filter(
      (user) => user.profile.name != username
    );

    const newWinnerIndex = getRandomIndex(
      dupedWinnersWithoutTarget.value.length
    );

    winners.value[username] = dupedWinnersWithoutTarget[newWinnerIndex];
  };

  const getUsersWithMatchingName = (username) => {
    let matches = {};
    let usernames = Object.keys(list.value).filter((userKey) => {
      console.log(userKey, username);
      return userKey.toLowerCase().includes(username.toLowerCase());
    });

    usernames.forEach((username) => (matches[username] = list.value[username]));

    return matches;
  };

  return {
    list,
    winners,
    loaded,
    setParticipants,
    deleteParticipants,
    remove,
    increment,
    decrement,
    pickWinners,
    getRandomIndex,
    rerollWinner,
    getUsersWithMatchingName,
    searchResults,
    setSearchResults,
    deleteSearchResults,
  };
});
