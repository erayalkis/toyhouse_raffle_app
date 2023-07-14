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

  const pickWinners = () => {};

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
