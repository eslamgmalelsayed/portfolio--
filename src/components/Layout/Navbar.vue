<script setup lang="ts">
import { ref } from 'vue'
// theme
import { useTheme } from "vuetify";
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "customLightTheme" : "customDarkTheme";
  // const setGlobalTheme = defineEmits(['setGlobalTheme', 'theme.global.name.value'])
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
    <v-app-bar class="bg-transparent" scroll-behavior="hide collapse elevate">
        <v-row class="px-16" justify="end" align="center">
            <v-col cols="auto">
                <!-- theme switch -->
                <v-icon class="text-white" title="theme" @click="toggleTheme" :icon="theme.global.name.value == 'customDarkTheme' ? 'mdi-weather-night' : 'mdi-weather-sunny'">
                </v-icon>
            </v-col>
            <v-col cols="auto">
                <!-- lang switch -->
                <v-switch
                title="lang"
                @click="
                    changeLocale($i18n.locale);
                    $i18n.locale = lang;
                "
                v-model="lang"
                color="primary"
                :label="$i18n.locale"
                hide-details
                ></v-switch>
            </v-col>

        </v-row>
    </v-app-bar>
</template>

<style scoped lang="scss">
</style>
