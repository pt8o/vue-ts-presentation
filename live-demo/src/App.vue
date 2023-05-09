<script setup lang="ts">
import AppContext from "./components/AppContext.vue";
import ExampleOne from "./components/ExampleOne.vue";
</script>

<template>
  <AppContext>
    <ExampleOne />
  </AppContext>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
