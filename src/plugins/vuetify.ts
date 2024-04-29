import { createVuetify,  type ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const customDarkTheme : ThemeDefinition = {
    dark: true,
    colors: {
      background: "#15202b",
    },
};

export default createVuetify({
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customDarkTheme,
    },
  },
  components,
  directives,
})