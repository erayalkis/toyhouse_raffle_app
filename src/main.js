import { createApp } from "vue/dist/vue.esm-bundler";
import { router } from "@/router/router.js";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
