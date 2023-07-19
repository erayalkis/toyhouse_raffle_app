<template>
  <div class="flex flex-col justify-center items-center p-1 mt-2">
    <template v-if="chunked.length">
      <div>
        <h1>
          Showing page {{ currentIndex + 1 }} of
          {{ chunked.length }}
        </h1>
        <div class="flex items-center justify-between">
          <button @click="prevPage">back</button>
          <template v-for="(arr, idx) in chunked" :key="idx">
            <p @click="currentIndex = idx">{{ idx + 1 }}</p>
          </template>
          <button @click="nextPage">forward</button>
        </div>
      </div>

      <div class="flex flex-wrap gap-5 p-2 mx-5 justify-center">
        <template v-for="key in chunked[currentIndex]" :key="key">
          <div>
            <img
              :src="list[key].profile.image"
              class="w-32 h-32 border border-toyhouse-border-primary p-2"
            />
            <div class="bg-gray-100 flex items-center p-0.5 rounded-sm">
              <UserIcon class="w-6 mr-1" />
              <p :title="key">{{ truncateName(key) }}</p>
            </div>

            <div class="flex items-center justify-between bg-gray-200 px-1">
              <button @click="incrementTicket(key)">+</button>
              <p>{{ list[key].ticket_count }}</p>
              <button @click="decrementTicket(key)">-</button>
            </div>
          </div>
        </template>
      </div>

      <div>
        <h1>
          Showing page {{ currentIndex + 1 }} of
          {{ chunked.length }}
        </h1>
        <div class="flex items-center justify-between">
          <button @click="prevPage">back</button>
          <template v-for="(arr, idx) in chunked" :key="idx">
            <p @click="currentIndex = idx">{{ idx + 1 }}</p>
          </template>
          <button @click="nextPage">forward</button>
        </div>
      </div>
    </template>
    <template v-else>
      <div>
        <h1 class="text-xl font-semibold text-center">
          No participants to show! <br />
          Please load participants from the Home page.
        </h1>
      </div>
    </template>
  </div>
</template>
<script setup>
import { useParticipantsStore } from "@/state/participantsStore";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue";
import { chunkArray } from "@/helpers/requests";
import UserIcon from "@/assets/components/UserIcon.vue";

const pStore = useParticipantsStore();
const { list } = storeToRefs(pStore);
const chunked = computed(() => chunkArray(Object.keys(list.value), 30));
const currentIndex = ref(0);

const truncateName = (name) => {
  if (name.length >= 12) {
    return name.slice(0, 9) + "...";
  }
  return name;
};
const incrementTicket = (username) => (list.value[username].ticket_count += 1);
const decrementTicket = (username) => {
  let user = list.value[username];

  if (user.ticket_count === 1) return;

  user.ticket_count -= 1;
};

const nextPage = () => {
  if (currentIndex.value < chunked.value.length - 1) {
    currentIndex.value += 1;
  }
};

const prevPage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};
</script>
