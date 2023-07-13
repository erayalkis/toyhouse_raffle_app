<template>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <NavbarComponent />
  <router-view></router-view>
  <FooterComponent />
</template>
<script setup>
import FooterComponent from "@/components/Footer/FooterComponent.vue";
import NavbarComponent from "@/components/Navbar/NavbarComponent.vue";
</script>
