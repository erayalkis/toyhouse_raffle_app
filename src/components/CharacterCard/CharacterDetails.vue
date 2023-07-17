<template>
  <div>
    <div
      class="options-screen absolute bg-blue-500 w-full h-full top-0 left-0 p-10"
      :class="{ show: showOptions }"
    >
      <h1>Options</h1>
    </div>

    <div class="flex justify-between">
      <h3 class="text-xl font-semibold">Toyhouse Raffle</h3>
      <CogIcon
        class="z-50 transition duration-900 ease-out"
        :class="{ 'text-white': showOptions }"
        @click="toggleShowOpts"
      />
    </div>

    <hr class="my-2" />

    <div class="items-center flex-wrap md:flex md:justify-between">
      <div class="flex items-center">
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
        >
          Load new character
        </button>
        <button
          class="bg-toyhouse-blue-primary text-white p-2 rounded-md transition duration-300 ease-out hover:bg-toyhouse-blue-secondary"
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

let optsStore = useOptionsStore();
let { opts } = storeToRefs(optsStore);
let mainOpt = computed(() => opts.value[0]);
let mainCharacter = computed(() => mainOpt.value.character);
let showOptions = ref(false);
let toggleShowOpts = () => (showOptions.value = !showOptions.value);
</script>
<style>
.options-screen {
  margin-left: 2000px;
  opacity: 0%;
  transition-property: margin, opacity;
  transition-duration: 700ms;
  transition-timing-function: ease-out;
}

.options-screen.show {
  margin-left: 0px;
  opacity: 100%;
}
</style>
