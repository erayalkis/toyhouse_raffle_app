import { createApp } from 'vue/dist/vue.esm-bundler'
import CharacterForm from './components/CharacterForm.vue';
import ParticipantsList from './components/ParticipantsList.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'

const routes = [
  { path: '/', component: CharacterForm },
  { path: '/participants', component: ParticipantsList },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App);
app.use(router);
app.mount("#app");
