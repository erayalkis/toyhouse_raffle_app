<template>
  <nav
    class="flex w-full p-2 pl-3 bg-toyhouse-main-dark text-white justify-between items-center"
  >
    <h1 class="hidden text-xl md:block">TOYHOU.RF</h1>
    <div class="flex items-center mr-auto gap-5 md:ml-5">
      <router-link class="flex items-center gap-1" to="/">
        <HomeIcon />
        Home
      </router-link>
      <router-link class="flex items-center gap-1" to="/participants">
        <PeopleIcon />
        Participants
      </router-link>
    </div>
    <div class="flex justify-between text-xl">
      <h3 class="hidden mr-2 text-toyhouse-text-secondary md:block">
        App Status:
      </h3>
      <h3
        :class="{
          'text-green-600': isOnline,
          'text-red-600': !isFetching && !isOnline,
        }"
      >
        {{ isFetching ? "..." : isOnline ? "Online" : "Offline" }}
      </h3>
    </div>
  </nav>
</template>
<script setup>
import HomeIcon from "../../assets/components/HomeIcon.vue";
import PeopleIcon from "../../assets/components/PeopleIcon.vue";
import { onMounted, ref } from "vue";

const isOnline = ref(false);
const isFetching = ref(true);
onMounted(async () => {
  console.log("hi");
  fetch("https://toyhouse-api.onrender.com/app_status").then(async (res) => {
    console.log(await res.json());
    if (res.ok) {
      isOnline.value = true;
    }
    isFetching.value = false;
  });
});
</script>
