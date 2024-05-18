import { createVuetify,  type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
const customDarkTheme : ThemeDefinition = {
    dark: true,
    colors: {
      main: "#0f172a",
      sec: "#0b1120",
      txt: "#fff",
      link: "#ceb15a"
    },
};
const customLightTheme : ThemeDefinition = {
  colors: {
    main: "#fff",
    sec: "#fff",
    txt: "#000",
    link: "#ceb15a"
  },
};
export default createVuetify({
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customDarkTheme,
      customLightTheme
    },
  },
  components,
  directives,
})