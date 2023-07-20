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
      <div class="flex flex-col items-center gap-2 md:flex-row">
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
      <div class="flex mt-2 text-sm md:m-0 lg:text-lg gap-1">
        <button
          class="bg-red-600 text-white p-2 rounded-md transition duration-300 ease-out hover:bg-red-700"
          @click="resetRaffle"
        >
          Reset raffle
        </button>
        <template v-if="Object.keys(list).length">
          <button
            class="bg-toyhouse-blue-primary text-white p-2 rounded-md transition duration-300 ease-out hover:bg-toyhouse-blue-secondary"
            @click="pickWinners"
          >
            Pick Winners
          </button>
        </template>
        <template v-else>
          <button
            class="bg-toyhouse-blue-primary text-white p-2 rounded-md transition duration-300 ease-out hover:bg-toyhouse-blue-secondary"
            @click="loadParticipants"
          >
            Load participants
          </button>
        </template>
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
import { useMessagesStore } from "@/state/messagesStore";

let optsStore = useOptionsStore();
let pStore = useParticipantsStore();
let mStore = useMessagesStore();
let { setParticipants } = pStore;
let { setLoading, setError, clearLoading, clearError } = mStore;
let { list } = storeToRefs(pStore);
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
  setLoading("Loading participants...");
  try {
    let json = await getRaffleTicketsForAll(opts.value);
    setParticipants(json);
  } catch (err) {
    setError(err);
    setTimeout(() => clearError(), 1500);
  }
  clearLoading();
};

const pickWinners = () => {};
</script>
<style>
.rotate {
  transform: rotate(-90deg);
  transition: transform 2s ease-out;
}
</style>
