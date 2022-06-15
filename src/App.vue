<template>
    <nav class="navbar">
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <div class="nav-links">
        <router-link class="router-link" to="/">
          <img class="homeIcon" :src="homeUrl" />
          Home
        </router-link>
        <router-link class="router-link" to="/participants">
          <img class="peopleIcon" :src="peopleUrl" />
          Participants
        </router-link>
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
  import homeUrl from '@/assets/home-svgrepo-com.svg?url';
  import peopleUrl from '@/assets/people-svgrepo-com.svg?url';
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
  background-color: white;
  width: 100vw;
  height: 100vh;
}

.app-status {
  margin-right: 15px;
  color: gray;
  user-select: none;
}

.navbar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 2.5em;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  background-color: #212529;
}

.router-link {
  margin: 0 0px 0 15px;
  position: relative;
  background-color: #212529;
  display: inline-block;
  width: 8em;
  transition: color, background-color 200ms;
  text-decoration: none;
  color: #909294;
  user-select: none;
}

.online {
  color: #008cba;
}

.offline {
  color: #d9534f;
}

.router-link:hover {
  color: #c7c8c9;
}

.router-link:active {
  transition: color 100ms;
  color: white;
}

.router-link:hover .homeIcon {
  filter: invert(100%) saturate(100%) hue-rotate(160deg) brightness(200%) contrast(98%);
}

.router-link:active .homeIcon {
  filter: invert(100%) saturate(300%) hue-rotate(160deg) brightness(500%) contrast(98%);
}

.router-link:hover .peopleIcon {
  filter: invert(100%) saturate(100%) hue-rotate(160deg) brightness(200%) contrast(98%);
}

.router-link:active .peopleIcon {
  filter: invert(100%) saturate(300%) hue-rotate(160deg) brightness(500%) contrast(98%);
}

.homeIcon {
  position: absolute;
  left: 0;
  margin-left: 15px;
  user-select: none;
}

.peopleIcon {
  position: absolute;
  left: 0;
  margin-left: -7px;
  user-select: none;
}

</style>
