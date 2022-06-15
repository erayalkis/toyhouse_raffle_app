<template>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link class="router-link" to="/">Go to Home</router-link>
      <router-link class="router-link" to="/participants">Go to Participants</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(185, 185, 185);
  width: 100vw;
  height: 100vh;
}

.router-link {
  margin: 5px;
}
</style>
