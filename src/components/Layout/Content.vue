<script setup lang="ts">
import About from "../About.vue"
import Resume from "../Resume.vue"
import Contact from "../Contact.vue"
import Portfolio from "../Portfolio.vue"
// sections
// const sections = [
// {section : "About Me"},
// {section : "Portfolio"},
// {section : "Resume"},
// {section : "Contact"},
// ]

</script>

<template>
  <div class="content rounded-xl bg-sec pt-10 px-6">
      <About />
      <Portfolio />
      <Resume />
      <Contact />
  </div>
</template>

<style scoped lang="scss">
  .content{
    height: 90vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
  }
  .content div{
    height: 100%;
    scroll-snap-align: center;
    padding: 1rem;
  }


 
</style>
  