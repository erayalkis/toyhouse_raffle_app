<template>
  <div
    class="bg-gray-200 w-full p-2 flex gap-2 overflow-x-auto rounded-md rounded-b-none"
  >
    <template v-for="opt in opts.slice(1)" :key="opt.character.id">
      <div class="flex-col border border-toyhouse-border-primary w-32 p-1">
        <img
          :src="opt.character.image"
          class="border border-toyhouse-border-primary p-1 bg-white rounded-md w-12 mx-auto md:w-20"
        />
        <h4 class="text-center">
          {{ truncateNameIfTooLong(opt.character.name) }}
        </h4>
        <div class="flex justify-center gap-5 md:gap-3">
          <div class="flex-col">
            <div class="flex">
              <SubscribeIcon class="w-5 mx-auto" />
              <input type="checkbox" />
            </div>
            <input
              v-model="opt.subscribe_points"
              type="number"
              class="w-10 outline-0"
            />
          </div>

          <div class="flex-col">
            <div class="flex">
              <CommentIcon class="w-5 mx-auto" />
              <input type="checkbox" />
            </div>
            <input v-model="opt.comment_points" type="number" class="w-10" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useOptionsStore } from "@/state/optionsStore.js";
import { storeToRefs } from "pinia";
import SubscribeIcon from "@/assets/components/SubscribeIcon.vue";
import CommentIcon from "@/assets/components/CommentIcon.vue";

const optionsStore = useOptionsStore();
let { opts } = storeToRefs(optionsStore);

const truncateNameIfTooLong = (name) => {
  if (name.length > 12) return name.slice(0, 9) + "...";
  return name;
};
</script>
