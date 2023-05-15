<template>
  <div class="form-wrapper">
    <div class="title">
      <h3>
        {{
          participants.winners.length > 0
            ? `Winners | ${new Date().toLocaleDateString()}`
            : "Raffle"
        }}
      </h3>
      <small v-if="participants.winners.length > 0"
        ><em>{{ Date.now() }}</em></small
      >
      <hr />
    </div>
    <template v-if="!participants.winners.length">
      <template v-if="!participants.loaded"> </template>
    </template>
    <template v-else>
      <ProfileLoad />
    </template>

    <div class="messages">
      <h3 class="errorMsg">{{ messages.error }}</h3>
      <h3 class="loadingMsg">{{ messages.loading }}</h3>
    </div>
  </div>

  <IntroductionText />
</template>

<script setup>
import { messages } from "@/state/messages";
import { participants } from "@/state/participants";
import { ref } from "vue";
import IntroductionText from "./IntroductionText.vue";
import ProfileLoad from "./ProfileLoad.vue";

const shouldComment = ref(false);
const shouldSub = ref(false);
const subCount = ref(1);
const commentCount = ref(1);
</script>
