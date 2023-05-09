<script setup lang="ts">
import { inject } from "vue";
import { countKey } from "./context";

const { count, incrementCount } = inject(countKey)!;
</script>

<template>
  <div class="container">count: {{ count }}</div>
  <button @click="incrementCount">increment</button>
</template>

<style scoped>
.container {
  font-size: 5rem;
}
</style>
