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
        <h3
          :class="{ online: isOnline, offline: !isFetching && !isOnline }"
        >
          {{isFetching ? "Fetching..." : isOnline ? "Online" : "Offline"}}
        </h3>
      </div>
    </nav>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
</template>


<script setup>
  import { onMounted, ref } from 'vue';

  const isOnline = ref(false);
  const isFetching = ref(true);
  onMounted(async () => {
    console.log("hi")
    fetch("https://toyhouse-rails-api.herokuapp.com/app_status").then(async res => {
      console.log(await res.json());
      if(res.ok) {
        isOnline.value = true;
      }
      isFetching.value = false;
    })
  });
</script>

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
  background-color: rgb(248, 248, 248);
  width: 100vw;
  height: 100vh;
}

.app-status {
  margin-right: 15px;
  color: gray;
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
  margin: 0 0px 0 15px;
  background-color: rgb(250, 250, 250);
  display: inline-block;
  padding: 1.4em;
  width: 8em;
  transition: background-color 200ms;
  text-decoration: none;
  color: #2c3e50;
}

.online {
  color: green;
}

.offline {
  color: red;
}

.router-link-active {
  background-color: rgb(241, 241, 241);
}

.router-link:hover {
  background-color: rgb(241, 241, 241);
}

.router-link:active {
  transition: background-color 100ms;
  background-color: rgb(235, 235, 235);
}


</style>
