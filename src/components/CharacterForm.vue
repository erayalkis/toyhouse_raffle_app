<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="app">
    <form id="load-user-form" @submit.prevent="loadCharacter">
      <input class="load-user-input" :disabled="participants.loaded" 
        placeholder="Enter raffle character URL..." v-model="urlInput" />
      <button class="load-user-button" type="submit" :disabled="participants.loaded">{{buttonText}}</button>
    </form>
    <button v-if="participants.loaded" @click="participants.deleteParticipants">
      Delete current participants list?
    </button>
    <template v-if="!participants.loaded">
      <ul>
        <li>
          <label for="shouldComment">User should comment?</label>
          <input type="checkbox" id="shouldComment" v-model="shouldComment" />
        </li>
        <template v-if="shouldComment">
            <li>
              <label for="commentCount">For how many extra tickets?</label>
              <br />
              <input type="number" min="0" v-model="commentCount" />
            </li>
        </template>
        <li>
          <label for="shouldSubscribe">User should subscribe?</label>
          <input type="checkbox" id="shouldSubscribe" v-model="shouldSub" />
        </li>
        <template v-if="shouldSub">
            <li>
              <label for="subCount">For how many extra tickets?</label>
              <br />
              <input type="number" min="0" v-model="subCount" />
            </li>
        </template>
      </ul>
    </template>

    <p v-if="messages.error">{{messages.error}}</p>
    <p v-if="messages.loading">{{messages.loading}}</p>
    <p v-if="participants.removed.length > 0">{{participants.removed}}</p>
  </div>
</template>

<script setup>  
  import { messages } from '@/state/messages';
  import { participants } from '@/state/participants';
  import { ref, computed } from 'vue';
  
  const urlInput = ref('');
  const shouldComment = ref(false);
  const shouldSub = ref(false);
  const subCount = ref(1);
  const commentCount = ref(1);
  const buttonText = computed(() => {
    return participants.loaded ? "Participants loaded" : "Load users";
  });

  const loadCharacter = async () => {
    messages.clearError();

    const characterUrl = urlInput.value;
    if(!characterUrl || !characterUrl.startsWith("https://toyhou.se")) {
      messages.setError("Please enter a valid Toyhou.se link!");
      return;
    }
    
    const characterId = parseCharacterUrl(characterUrl);
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

    const users = await fetch(createApiUrl(id));
    messages.loading = ""

    participants.loaded = true;
    return await users.json();
  }

  const createApiUrl = (id) => {
    let base = `https://toyhouse-rails-api.herokuapp.com/raffle/${id}?`;

    if(shouldComment.value) { 
      base += 'must_comment=true&';
      base += `comment_ticket_count=${subCount.value}&`
    }

    if(shouldSub.value) {
      base += 'must_subscribe=true&';
      base += `subscribe_ticket_count=${commentCount.value}&`;
    }

    return base;
  }
</script>

<style scoped>
</style>