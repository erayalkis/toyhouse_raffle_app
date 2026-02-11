<template>
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
</template>
<script setup>
import { ref, onMounted } from "vue";
import { API_URL } from "@/helpers/constants";

const isOnline = ref(false);
const isFetching = ref(true);

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/app_status`);
    if (res.ok) {
      isOnline.value = true;
    }
  } catch (error) {
    isOnline.value = false;
  } finally {
    isFetching.value = false;
  }
});
</script>
