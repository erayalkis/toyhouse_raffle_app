<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="app">
    <form id="load-user-form" @submit.prevent="loadCharacter">
      <input name="load-user-input" placeholder="Enter raffle character URL..." v-model="urlInput" />
    </form>

    <p v-if="messages.error">{{messages.error}}</p>
    <p v-if="messages.loading">{{messages.loading}}</p>
  </div>
</template>

<script setup>
  import { messages } from '@/state/messages';
  import { ref } from 'vue';
  
  const urlInput = ref('');

  const loadCharacter = async () => {
    messages.clearError();

    const characterUrl = urlInput.value;
    if(!characterUrl || !characterUrl.startsWith("https://toyhou.se")) {
      messages.setError("Please enter a valid Toyhou.se link!");
      return;
    }
    
    const characterId = parseCharacterUrl(characterUrl);
    console.log(characterId);

    const attendees = await fetchTickets(characterId);
    console.log(attendees)
    urlInput.value = '';
  }

  const parseCharacterUrl = (url) => {
    const characterId = url.split("/")[3];
    return characterId
  }

  const fetchTickets = async (id) => {
    const users = await fetch(`https://toyhouse-rails-api.herokuapp.com/raffle/${id}`);
    return users.json();
  }

</script>
