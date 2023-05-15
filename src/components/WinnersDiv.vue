<template>
  <div>
    <div class="winners">
      <template :key="user" v-for="user in participants.winners">
        <div class="winner">
          <img class="winner-img" :src="user[Object.keys(user)[0]].image" />
          {{ Object.keys(user)[0] }}
          {{ user.ticket_count }}
        </div>
      </template>
    </div>
    <button
      @click="participants.deleteParticipants"
      class="delete-participants"
    >
      Restart
    </button>
  </div>
</template>
<script setup>
import { participants } from "@/state/participants";
</script>
