<script setup lang="ts">
  // import { ref } from 'vue'
import {socialMedia} from "@/utils/socialMedia.ts"

</script>
  
  <template>
    <div class="side pt-10 px-6 bg-sec text-txt rounded-xl pb-8">
      <div class="text-center">
          <img 
          loading="lazy"
          class="d-block mx-auto" 
          src="@/assets/images/me.webp" 
          alt="me" 
          :width="150"
          aspect-ratio="16/9"
          cover
          >
        <h1>Islam Gamal</h1>
        <v-chip label>Frontend Developer</v-chip>
      </div>
      <v-divider :thickness="2" class="my-3 w-75 mx-auto"></v-divider>
      <v-row v-for="{label,info} in socialMedia" align="center">
        <v-col cols="1">
          <v-avatar class="text-link" size="x-small">
            <v-icon icon="mdi-weather-night"></v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="auto">
          <p class="text-grey-lighten-1">{{label.toUpperCase()}}</p>
          <p>{{info}}</p>
        </v-col>
      </v-row>
      <div>

      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
 
  </style>
  