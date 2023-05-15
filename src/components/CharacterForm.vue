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
      <ProfileLoad />
      <FormOptions />
    </template>
    <template v-else>
      <WinnersDiv />
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
import IntroductionText from "./IntroductionText.vue";
import ProfileLoad from "./ProfileLoad.vue";
import WinnersDiv from "./WinnersDiv.vue";
import FormOptions from "./FormOptions.vue";
</script>
