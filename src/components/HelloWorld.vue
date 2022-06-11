<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="app">
    <form id="load-user-form" @submit.prevent="loadCharacter">
      <input name="load-user-input" placeholder="Enter raffle character URL..." />
    </form>

    <p v-if="messages.error">{{messages.error}}</p>
    <p v-if="messages.loading">{{messages.loading}}</p>
  </div>
</template>

<script setup>
  import { messages } from '@/state/messages';

  const loadCharacter = (e) => {
    messages.clearError();

    const characterUrl = e.target.elements[0].value;
    if(!characterUrl || !characterUrl.startsWith("https://toyhou.se")) {
      messages.setError("Please enter a valid Toyhou.se link!");
      return;
    }
    
    const characterId = parseCharacterUrl(characterUrl);
    console.log(characterId);

    const attendees = fetchTickets(characterId);
    console.log(attendees)
  }

  const parseCharacterUrl = (url) => {
    const characterId = url.split("/")[3];
    return characterId
  }

  const fetchTickets = (id) => {
    fetch(`https://toyhouse-rails-api.herokuapp.com/raffle/${id}`);
  }

</script>
