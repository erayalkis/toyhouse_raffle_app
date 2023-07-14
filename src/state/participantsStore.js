import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useParticipantsStore = defineStore("participants", () => {
  const list = ref([]);
  const winners = ref([]);
  const winnersDuped = ref([]);
  const loaded = computed(() => list.value.length === 0);

  const setParticipants = (arr) => (list.value = arr);

  const deleteParticipants = () => {
    list.value = [];
    winners.value = [];
  };

  const remove = (u) =>
    (list.value = list.value.filter((user) => user.id != u.id));

  const increment = (u) => {
    const user = list.value.find((user) => (user.id = u.id));
    user.ticket_count += 1;
  };

  const decrement = (u) => {
    const user = list.value.find((user) => (user.id = u.id));
    user.ticket_count -= 1;
  };

  const pickWinners = (winnersCount) => {
    setDupedWinners();

    // Set of usernames
    let seenUsers = new Set();
    let winners = [];

    for (winnersCount; winnersCount > 0; winnersCount--) {
      const idx = getRandomIndex(winnersDuped.value.length);
      const selectedUser = winnersDuped.value[idx];

      const username = selectedUser.profile.name;
      let inSeen = seenUsers.has(username);
      if (!inSeen) {
        seenUsers.add(username);
        winners.push(selectedUser);
      }
    }

    return winners;
  };

  const setDupedWinners = () => {
    winnersDuped.value = [];

    const usersDupedByTicketCount = [];

    list.value.forEach((user) => {
      let i = user.ticket_count;
      for (i; i > 0; i--) {
        usersDupedByTicketCount.push(user.profile);
      }
    });

    winnersDuped.value = usersDupedByTicketCount;
  };

  const getRandomIndex = (length) => Math.floor(Math.random() * length);
  const rerollWinner = (username) => {
    const targetIdx = winners.value.findIndex(
      (user) => user.profile.name === username
    );

    const dupedWinnersWithoutTarget = winnersDuped.value.filter(
      (user) => user.profile.name != username
    );

    const newWinnerIndex = getRandomIndex(
      dupedWinnersWithoutTarget.value.length
    );

    winners.value[targetIdx] = dupedWinnersWithoutTarget[newWinnerIndex];
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
  };
});
