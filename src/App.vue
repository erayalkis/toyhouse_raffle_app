<template>
    <nav class="navbar">
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <div class="nav-links">
        <router-link class="router-link" to="/">Home</router-link>
        <router-link class="router-link" to="/participants">Participants</router-link>
      </div>
      <div class="app-status">
        <h3>Offline</h3>
      </div>
    </nav>
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
  justify-content: center;
  background-color: rgb(240, 240, 240);
  width: 100vw;
  height: 100vh;
}

.app-status {
  margin-right: 15px;
}

.navbar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 4em;
  border-bottom: 1px solid black;
  box-sizing: border-box;
}

.router-link {
  margin: 0 30px 0 15px;
  background-color: gray;
  display: inline-block;
  padding: 1.4em;
  width: 8em;
}

</style>
