import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import layout from "../layouts/layout.vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("layout", layout);
app.use(createPinia());
app.use(router);
app.mount("#app");
