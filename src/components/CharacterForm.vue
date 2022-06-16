<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="form-wrapper">
    <div class="title">
      <h3>Raffle</h3>
      <hr />
    </div>
      <form id="load-user-form" @submit.prevent="loadCharacter">
        <input class="load-user-input" :disabled="participants.loaded" 
          placeholder="Enter raffle character URL..." v-model="urlInput" />
        <button class="load-user-button" type="submit" :disabled="participants.loaded">{{buttonText}}</button>
      </form>
    <button v-if="participants.loaded" @click="participants.deleteParticipants">
      Delete current participants list?
    </button>
    <template v-if="!participants.loaded">
      <div class="options-wrapper">
        <div class="shouldComment">
          <div>
            <label for="shouldComment">Comments give extra tickets?</label>
            <input type="checkbox" id="shouldComment" v-model="shouldComment" />
          </div>
              <div class="shouldCommentInput">
                <label for="commentCount"><abbr title="Amount of tickets users can earn by commenting on the raffle character.">Comment ticket count</abbr></label>
                <br />
                <input :disabled="!shouldComment" type="number" min="0" v-model="commentCount" />
              </div>
        </div>
        <div class="shouldSub">
          <div>
            <label for="shouldSubscribe">Subscriptions give extra tickets?</label>
            <input type="checkbox" id="shouldSubscribe" v-model="shouldSub" />
          </div>
              <div class="shouldSubInput">
                <label for="subCount"><abbr title="Amount of tickets users can earn by subscribing to raffle host.">Subscription ticket count</abbr></label>
                <br />
                <input :disabled="!shouldSub" type="number" min="0" v-model="subCount" />
              </div>
        </div>
      </div>
    </template>

    <div v-if="messages.error || messages.loading" class="messages">
      <h3 class="errorMsg">{{messages.error}}</h3>
      <h3 class="loadingMsg">{{messages.loading}}</h3>
    </div>
    </div>

    <div class="text">
      <h1>Hi there!</h1>
      <hr />
      <h3 class="text-sm">This is a free tool for Toyhou.se for picking raffle winners efficiently!</h3>
    </div>
  </template>

<script setup>  
  import { messages } from '@/state/messages';
  import { participants } from '@/state/participants';
  import { ref, computed, watch } from 'vue';
  
  const urlInput = ref('');
  const shouldComment = ref(false);
  const shouldSub = ref(false);
  const subCount = ref(1);
  const commentCount = ref(1);
  const buttonText = computed(() => {
    return participants.loaded ? "Ready" : "Load";
  });

  watch(urlInput, () => {
    messages.clearError();
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
  .load-user-input {
    width: 40em;
    height: 3.5em;
    padding: 10px;
    font-size: 17px;
    border-radius: 5px 0 0 5px;
    border-width: 1px 0px 1px 1px;
    border-color: #e3e3e3;
    border-style: solid;
    box-sizing: border-box;
    outline: none;
    transition-property: border, box-shadow;
    transition-duration: 200ms;
    border: 1px solid #d7d7d7;
    box-shadow: 0px 0px 3px #008bba00;
  }

  .load-user-input:focus {
    border: 1px solid #008bba8a;
    box-shadow: 0px 0px 4px #008bba8a;
  }
  
  .load-user-input::placeholder {
    padding-left: 5px;
  }
  .load-user-button {
    height: 4.5em;
    width: 5em;
    border: 0;
    border-radius: 0 5px 5px 0;
    background-color: #008cba;
    color: white;
    cursor: pointer;
    transition: background-color, 200ms;
  }

  .load-user-button:hover {
    background-color: #006687
  }

  .form-wrapper {
    border: 1px solid #e3e3e3;
    height: 20em;
    width: 50em;
    background-color: rgba(247,247,247,255);
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .options-wrapper {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .shouldComment {
    margin-top: 30px;
    width: 500px;
    user-select: none;
  }


  input#shouldComment {
    margin-left: 10px;
    margin-bottom: 25px;
  }

  input#shouldComment:checked {
    background-color: #008cba;
  }

  input#shouldSubscribe {
    margin-left: 10px;
    margin-bottom: 25px;
  }

  .shouldSub {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    width: 500px;
    user-select: none;
  }

  .title {
    width: 100%;
    text-align: left;
    margin-left: 50px;
    margin-bottom: 20px;
  }

  .title hr {
    margin-top: 10px;
    border: 0;
    height: 1px;
    color: #e2e2e2;
    background-color: #e2e2e2;
    width: 95%;
  }

  .messages {
    padding-top: 50px;
  }

  .errorMsg {
    color: rgb(255, 46, 46);
  }

  .text {
    margin-top: 50px;
  }

  .text-sm {
    color: #2c3e50;
  }

  div.shouldCommentInput > label {
    cursor: help;
  }

  div.shouldSubInput > label {
    cursor: help;
  }
</style>