<template>
  <div class="app">
    <form id="load-user-form" @submit.prevent="loadCharacter">
      <input name="load-user-input" placeholder="Enter raffle character URL..." />
    </form>
  </div>
</template>

<script setup>

  const loadCharacter = (e) => {
    const characterUrl = e.target.elements[0].value;
    console.log(characterUrl);
  }

</script>
