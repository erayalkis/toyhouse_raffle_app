<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="app">
    <form id="load-user-form" @submit.prevent="loadCharacter">
      <input name="load-user-input" placeholder="Enter raffle character URL..." v-model="urlInput" />
      <button type="submit">Load Characters</button>
    </form>

    <ul>
      <li>
        <label for="shouldComment">User should comment?</label>
        <input type="checkbox" id="shouldComment" v-model="shouldComment" />
      </li>
      <li>
        <label for="shouldSubscribe">User should subscribe?</label>
        <input type="checkbox" id="shouldSubscribe" v-model="shouldSub" />
      </li>
    </ul>

    <p v-if="messages.error">{{messages.error}}</p>
    <p v-if="messages.loading">{{messages.loading}}</p>

  </div>
</template>

<script setup>  
  import { messages } from '@/state/messages';
  import { participants } from '@/state/participants';
  import { ref } from 'vue';
  
  const urlInput = ref('');
  const shouldComment = ref(false);
  const shouldSub = ref(false);

  const loadCharacter = async () => {
    messages.clearError();

    const characterUrl = urlInput.value;
    if(!characterUrl || !characterUrl.startsWith("https://toyhou.se")) {
      messages.setError("Please enter a valid Toyhou.se link!");
      return;
    }
    
    const characterId = parseCharacterUrl(characterUrl);
    console.log(characterId);

    const users = await fetchTickets(characterId);
    participants.setParticipants(users);
    urlInput.value = '';
  }

  const parseCharacterUrl = (url) => {
    const characterId = url.split("/")[3];
    return characterId
  }

  const fetchTickets = async (id) => {
    messages.loading = "Fetching participant data..."
    if(shouldSub.value) messages.loading += " (this might take a while...)";

    const users = await fetch(`https://toyhouse-rails-api.herokuapp.com/raffle/${id}?`);
    console.log(users.json);
    messages.loading = ""

    return await users.json();
  }


</script>
