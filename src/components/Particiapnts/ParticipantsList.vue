<template>
  <div class="flex flex-col justify-center items-center p-1 mt-2">
    <template v-if="chunked.length">
      <ParticipantsListPaginator
        :chunked="chunked"
        :current-index="currentIndex"
        @increment="incrementIndex"
        @decrement="decrementIndex"
        @set="setIndex"
      />
      <ParticipantsCard :chunked="chunked" :current-index="currentIndex" />
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
import ParticipantsCard from "./ParticipantsCard.vue";
import ParticipantsListPaginator from "./ParticipantsListPaginator.vue";

const pStore = useParticipantsStore();
const { list } = storeToRefs(pStore);
const chunked = computed(() => chunkArray(Object.keys(list.value), 30));
const currentIndex = ref(0);

const incrementIndex = () => (currentIndex.value += 1);
const decrementIndex = () => (currentIndex.value -= 1);
const setIndex = (idx) => (currentIndex.value = idx);
</script>
