import { createApp } from "vue";
import { router } from "./router";
import { pinia } from "./stores";
import { i18n } from "./i18n";
import { queryClient } from "./services";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/index.scss";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(i18n);
app.use(queryClient);
app.mount("#app");
