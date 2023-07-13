import { createApp } from "vue/dist/vue.esm-bundler";
import { router } from "@/router/router.js";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
