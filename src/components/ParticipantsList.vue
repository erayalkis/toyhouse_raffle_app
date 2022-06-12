<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="participants-wrapper">
    <div class="participants-list">
      <template v-for="(details, username) in participants.list" :key="username">
        <div class="participant">
          <img class="participant-image" :src="details.image" />
          <p>Name: {{username}}</p>
          <p>Tickets: {{details.ticket_count}}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { participants } from '@/state/participants';
</script>

<style scoped>

  .participants-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  .participants-list {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    flex-shrink: 5;
  }

  .participant {
    margin: 30px;
    text-align: center;
    border: 1px solid lightblue;
  }

  .participant-image {
    border-bottom: 1px solid lightblue;
    width: 200px;
    height: 200px;
  }
</style>
