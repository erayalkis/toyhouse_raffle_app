<template>
  <div>
    <CharacterOptions :show="showOptions" />

    <div class="flex justify-between">
      <h3 class="text-xl font-semibold">Toyhouse Raffle</h3>
      <CogIcon
        class="z-50 transition duration-900 ease-out sticky"
        :class="{ rotate: showOptions }"
        @click="toggleShowOpts"
      />
    </div>

    <hr class="my-2" />

    <div class="items-center flex-wrap md:flex md:justify-between">
      <div class="flex items-center gap-2">
        <img
          :src="mainCharacter.image"
          class="border border-toyhouse-border-primary p-2 bg-white rounded-md w-24 md:w-34 xl:w-44"
        />
        <div>
          <h3 class="font-light text-xl">{{ mainCharacter.name }}</h3>
          <div
            class="flex text-toyhouse-blue-primary transition duration-300 ease-out font-semibold hover:text-toyhouse-blue-secondary"
          >
            <UserIcon />
            <h3>
              <a
                :href="mainCharacter.owner.link"
                target="_blank"
                class="text-xl"
                >{{ mainCharacter.owner.name }}</a
              >
            </h3>
          </div>
        </div>
      </div>
      <div class="flex mt-2 text-sm md:m-0 lg:text-lg md:gap-1">
        <button
          class="bg-red-600 text-white p-2 rounded-md transition duration-300 ease-out hover:bg-red-700"
          @click="resetRaffle"
        >
          Reset raffle
        </button>
        <button
          class="bg-toyhouse-blue-primary text-white p-2 rounded-md transition duration-300 ease-out hover:bg-toyhouse-blue-secondary"
          @click="loadParticipants"
        >
          Load participants
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useOptionsStore } from "@/state/optionsStore";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import CogIcon from "@/assets/components/CogIcon.vue";
import UserIcon from "@/assets/components/UserIcon.vue";
import CharacterOptions from "./CharacterOptions.vue";
import { useParticipantsStore } from "@/state/participantsStore";
import { getRaffleTicketsForAll } from "@/helpers/requests";

let optsStore = useOptionsStore();
let { setParticipants } = useParticipantsStore();
let { opts } = storeToRefs(optsStore);
let mainOpt = computed(() => opts.value[0]);
let mainCharacter = computed(() => mainOpt.value.character);
let showOptions = ref(false);

const toggleShowOpts = () => (showOptions.value = !showOptions.value);
const resetRaffle = () => {
  let conf = confirm("Are you sure you wish to reset all data?");
  if (!conf) return;

  opts.value = [];
  setParticipants([]);
};
const loadParticipants = async () => {
  let json = await getRaffleTicketsForAll(opts.value);
  console.log(json);
};
</script>
<style>
.rotate {
  transform: rotate(-90deg);
  transition: transform 2s ease-out;
}
</style>