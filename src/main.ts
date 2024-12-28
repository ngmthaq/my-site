import { createApp } from "vue";
import { router } from "./router";
import { pinia } from "./stores";
import { i18n } from "./i18n";
import { theme, themeOptions } from "./theme";
import App from "./App.vue";
import "primeicons/primeicons.css";
import "./assets/scss/index.scss";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(theme, themeOptions);
app.mount("#app");
