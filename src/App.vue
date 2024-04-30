<script setup>
import { ref } from "vue";
// icons
// import { mdiAccount } from "@mdi/js";
// theme
import { useTheme } from "vuetify";
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "customDarkTheme";
}
// lang
let lang = ref("ar");
function changeLocale(locale) {
  if (locale == "en") {
    lang.value = "ar";
  }
  if (locale == "ar") {
    lang.value = "en";
  }
}
</script>

<template>
  <!-- dir switch -->
  <v-locale-provider :rtl="$i18n.locale == 'ar' ? true : false">
  <v-app >
      <v-container>
        <!-- lang switch -->
        <v-switch
          @click="
            changeLocale($i18n.locale);
            $i18n.locale = lang;
          "
          v-model="lang"
          color="primary"
          :label="$i18n.locale"
          hide-details
        ></v-switch>
        <!-- theme switch -->
          <v-icon @click="toggleTheme" :icon="theme.global.name.value == 'customDarkTheme' ? 'mdi-weather-night' : 'mdi-weather-sunny'">
          </v-icon>


        <div>{{ $t("hello") }}</div>
        <!-- <v-switch label="Switch" prepend-icon="$vuetify"></v-switch> -->
      </v-container>
    </v-app>
  </v-locale-provider>
</template>

<style scoped lang="scss"></style>
