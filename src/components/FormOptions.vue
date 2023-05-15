<template>
  <div class="options-wrapper">
    <div class="shouldComment">
      <div>
        <label for="shouldComment">Comments give extra tickets?</label>
        <input type="checkbox" id="shouldComment" v-model="shouldComment" />
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
          :disabled="!shouldComment"
          type="number"
          min="0"
          v-model="commentCount"
        />
      </div>
    </div>
    <div class="shouldSub">
      <div>
        <label for="shouldSubscribe">Subscriptions give extra tickets?</label>
        <input type="checkbox" id="shouldSubscribe" v-model="shouldSub" />
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
          :disabled="!shouldSub"
          type="number"
          min="0"
          v-model="subCount"
        />
      </div>
    </div>
  </div>
</template>
