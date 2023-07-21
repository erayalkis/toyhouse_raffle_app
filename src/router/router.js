import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ParticipantsView from "@/views/ParticipantsView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/participants", component: ParticipantsView },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
