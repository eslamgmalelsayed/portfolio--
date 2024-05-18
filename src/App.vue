<script setup lang="ts">
import { ref, reactive ,onMounted,watch  } from "vue";
import Navbar from "./components/Layout/Navbar.vue"
import SideMenu from "./components/Layout/SideMenu.vue"
import Content from "./components/Layout/Content.vue"
import { useTheme } from 'vuetify'
const theme = useTheme();
import { loadSlim } from "tsparticles-slim";
const particlesInit = async engine => {
  await loadSlim(engine);
};
const particlesLoaded = async container => {}; 
// function handleTheme (){
//     let setGlobalTheme = setGlobalTheme
// console.log(setGlobalTheme);
// }
// let partColor = reactive( {partColor: theme.global.current.value.colors.main})
</script>

<template>
  <!-- dir switch -->
  <v-locale-provider :rtl="$i18n.locale == 'ar' ? true : false">
    <!-- scroll -->
    <PerfectScrollbar>
        <v-app>
        <!-- particles -->
        <div>
            <vue-particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
            />
            <vue-particles
                id="tsparticles"
                :particlesInit="particlesInit"
                :particlesLoaded="particlesLoaded"
                :options="{
                        background: {
                            color: {
                                value: '#0f172a'
                            }
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: 'push'
                                },
                                onHover: {
                                    enable: true,
                                    mode: 'repulse'
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40
                                },
                                push: {
                                    quantity: 4
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: '#ffffff'
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outMode: 'bounce',
                                random: false,
                                speed: 2,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 30
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: 'circle'
                            },
                            size: {
                                random: true,
                                value: 5
                            }
                        },
                        detectRetina: true
                    }"
            />
        </div>
    
          <v-container style="width: 70%;">
            <Navbar />
              <v-row class="mt-16 position-relative">
                <v-col lg="4" cols="12">
                  <SideMenu />
                </v-col>
                <v-col lg="8" cols="12">
                  <Content />
                </v-col>
              </v-row>
              <!-- <div>{{ $t("hello") }}</div> -->
          </v-container>
        </v-app>
    </PerfectScrollbar>
  </v-locale-provider>
</template>

<style lang="scss">
#app{
  height: 100vh;
  /* overflow: hidden; */
}
::selection{
  background: rgb(236, 131, 50);
}
</style>
