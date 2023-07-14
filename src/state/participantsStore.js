import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useParticipantsStore = defineStore("participants", () => {
  const list = ref([]);
  const winners = ref([]);
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
    const usersDupedByTicketCount = [];

    list.value.forEach((user) => {
      let i = user.ticket_count;
      for (i; i > 0; i--) {
        usersDupedByTicketCount.push(user.profile);
      }
    });

    // Set of usernames
    let seenUsers = new Set();
    let winners = [];

    for (winnersCount; winnersCount > 0; winnersCount--) {
      const idx = getRandomIndex(usersDupedByTicketCount.value.length);
      const selectedUser = usersDupedByTicketCount[idx];

      const username = selectedUser.profile.name;
      let inSeen = seenUsers.has(username);
      if (!inSeen) {
        seenUsers.add(username);
        winners.push(selectedUser);
      }
    }

    return winners;
  };

  const getRandomIndex = (length) => Math.floor(Math.random() * length);
  const rerollWinner = () => {};

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
