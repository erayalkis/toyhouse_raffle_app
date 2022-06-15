<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="participant">
    <img class="participant-image" :src="details.image" @dblclick="participants.remove(username)" />
    <p>Name: {{username}}</p>
    <div class="participant-tickets">
      <p class="participant-ticket-count">Tickets: {{details.ticket_count}}</p>
      <div class="ticket-buttons">
        <button class="ticket-button increment" @click="addTicket(username)">+</button>
       <button class="ticket-button decrement" @click="removeTicket(username)">-</button>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { participants } from '@/state/participants';
  import { defineProps } from 'vue';
  const props = defineProps(['username', 'details']);
  const addTicket = (key) => {
    let data = {}
    data[props.username] = props.details;
    participants.changed.push(data);
    participants.increment(key);

  }

  const removeTicket = (key) => {    
    let data = {}
    data[props.username] = props.details;
    participants.changed.push(data);
    participants.decrement(key);
  }

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
    cursor: pointer;
  }

  .participant-tickets {
    display: flex;
    justify-content: center;
  }

  .ticket-buttons {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .ticket-button {
    align-self: center;
    width: 20px;
  }
</style>
