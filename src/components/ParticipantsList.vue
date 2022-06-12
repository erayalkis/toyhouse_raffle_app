<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="participants-list">
    <template v-for="(details, username) in participants.list" :key="username">
      <div class="participant">
        <p>Name: {{username}}</p>
        <p>Tickets: {{details.ticket_count}}</p>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { participants } from '@/state/participants';
</script>

<style scoped>
  .participants-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
