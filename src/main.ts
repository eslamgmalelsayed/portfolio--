import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify.js"
import i18n from "./locales/initLocales"
// Particles
declare module "vue3-particles";
import Particles from "vue3-particles";
// Cursor
// import CursorFx from '@luxdamore/vue-cursor-fx';
// import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
// scroll
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
createApp(App).use(i18n).use(vuetify).use(Particles).use(PerfectScrollbarPlugin).mount('#app')