import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";
import router from "./router";
import store from "./store/index";
import VueScrollTo from 'vue-scrollto'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueScrollTo)
app.use(VueChartkick)
app.mount("#app");
