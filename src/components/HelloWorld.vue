<template>
  <!--https://toyhouse-rails-api.herokuapp.com/raffle/10868863.-yui- -->
  <div class="app">
    <form id="load-user-form" @submit.prevent="loadCharacter">
      <input name="load-user-input" placeholder="Enter raffle character URL..." />
    </form>
  </div>
</template>

<script setup>

  const loadCharacter = (e) => {
    const characterUrl = e.target.elements[0].value;
    const characterId = parseCharacterUrl(characterUrl);
    console.log(characterId);
  }

  const parseCharacterUrl = (url) => {
    const characterId = url.split("/")[3];
    return characterId
  }

</script>
