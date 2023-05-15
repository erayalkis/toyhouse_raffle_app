<template>
  <form
    id="load-user-form"
    @submit.prevent="loadCharacter"
    v-if="!participants.loaded"
  >
    <input
      class="load-user-input"
      :disabled="participants.loaded"
      placeholder="Enter raffle character URL..."
      v-model="urlInput"
    />
    <button
      class="load-user-button"
      type="submit"
      :disabled="participants.loaded"
    >
      {{ buttonText }}
    </button>
  </form>
  <div class="winners-input" v-if="participants.loaded">
    <h3>How many winners should be picked?</h3>
    <input
      type="number"
      min="0"
      placeholder="Number of winners"
      v-model="winnersCount"
    />
  </div>
  <button class="pick-winners" v-if="participants.loaded" @click="pickWinners">
    Pick winners!
  </button>
  <button
    class="delete-participants"
    v-if="participants.loaded"
    @click="participants.deleteParticipants"
  >
    Delete current participants list?
  </button>
</template>
<script setup>
import { participants } from "@/state/participants";
import { messages } from "@/state/messages";
import { computed, watch, ref } from "vue";
import { form } from "../state/form";

const buttonText = computed(() => {
  return participants.loaded ? "Ready" : "Load";
});

const winnersCount = ref(1);

const urlInput = ref("");

watch(urlInput, () => {
  messages.clearError();
});

const loadCharacter = async () => {
  messages.clearError();

  const characterUrl = urlInput.value;
  if (!characterUrl || !characterUrl.startsWith("https://toyhou.se")) {
    messages.setError("Please enter a valid Toyhou.se link!");
    return;
  }

  const characterId = parseCharacterUrl(characterUrl);
  const users = await fetchTickets(characterId);
  if (!users) return;

  participants.setParticipants(users);
  urlInput.value = "";
};

const parseCharacterUrl = (url) => {
  const characterId = url.split("/")[3];
  return characterId;
};

const fetchTickets = async (id) => {
  messages.loading = "Fetching participant data...";
  if (form.shouldSub) messages.loading += " (this might take a while...)";

  let users;
  try {
    users = await fetch(createApiUrl(id));
  } catch (e) {
    console.log(e);
    messages.setError("Invalid character link or subscribers hidden!");
  }
  messages.loading = "";

  if (!users.ok) {
    participants.deleteParticipants(false);
    messages.setError("Invalid character link or subscribers hidden!");

    console.log(messages.error);
    return;
  }
  participants.loaded = true;
  return await users.json();
};

const createApiUrl = (id) => {
  let base = `https://toyhouse-api.onrender.com/raffle/${id}?`;

  if (form.shouldComment) {
    base += "must_comment=true&";
    base += `comment_ticket_count=${form.commentCount}&`;
  }

  if (form.shouldSub) {
    base += "must_subscribe=true&";
    base += `subscribe_ticket_count=${form.subCount}&`;
  }

  return base;
};

const pickWinners = () => {
  participants.winnersArray(winnersCount.value);
};
</script>
