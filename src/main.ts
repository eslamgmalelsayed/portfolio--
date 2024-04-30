import { createApp } from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify.js"
import i18n from "./locales/initLocales"

createApp(App).use(i18n).use(vuetify).mount('#app')