<template>
  <nav class="flex w-full bg-gray-300">
    <div class="flex">
      <router-link class="flex" to="/">
        <HomeIcon />
        Home
      </router-link>
      <router-link class="flex" to="/participants">
        <PeopleIcon />
        Participants
      </router-link>
    </div>
    <div class="app-status">
      <h3 :class="{ online: isOnline, offline: !isFetching && !isOnline }">
        {{ isFetching ? "Fetching..." : isOnline ? "Online" : "Offline" }}
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
