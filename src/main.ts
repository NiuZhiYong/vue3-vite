import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Cardvue from "./components/card.vue";

export const app = createApp(App);

app.component("Card", Cardvue);

app.mount("#app");
