<template>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <NavbarComponent />
  <router-view></router-view>
</template>
<script setup>
import NavbarComponent from "@/components/Navbar/NavbarComponent.vue";
</script>
