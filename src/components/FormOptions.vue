<template>
  <div class="options-wrapper">
    <div class="shouldComment">
      <div>
        <label for="shouldComment">Comments give extra tickets?</label>
        <input
          type="checkbox"
          id="shouldComment"
          v-model="form.shouldComment"
        />
      </div>
      <div class="shouldCommentInput">
        <label for="commentCount"
          ><abbr
            title="Amount of tickets users can earn by commenting on the raffle character."
            >Comment ticket count</abbr
          ></label
        >
        <br />
        <input
          :disabled="!form.shouldComment"
          type="number"
          min="1"
          v-model="form.commentCount"
        />
      </div>
    </div>
    <div class="shouldSub">
      <div>
        <label for="shouldSubscribe">Subscriptions give extra tickets?</label>
        <input type="checkbox" id="shouldSubscribe" v-model="form.shouldSub" />
      </div>
      <div class="shouldSubInput">
        <label for="subCount"
          ><abbr
            title="Amount of tickets users can earn by subscribing to raffle host. (Requires host's subscribers to be public)"
            >Subscription ticket count</abbr
          ></label
        >
        <br />
        <input
          :disabled="!form.shouldSub"
          type="number"
          min="1"
          v-model="form.subCount"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { form } from "../state/form";
</script>
