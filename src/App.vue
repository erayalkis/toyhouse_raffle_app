<template>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <UpdateWarning />
  <NavbarComponent />
  <router-view></router-view>
</template>
<script setup>
import NavbarComponent from "@/components/Navbar/NavbarComponent.vue";
import UpdateWarning from "./components/UpdateWarning.vue";
</script>
