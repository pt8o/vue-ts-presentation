<script setup lang="ts">
import { provide, ref } from "vue";
import { countKey } from "./context";

const count = ref(0);

function incrementCount() {
  count.value += 1;
}

provide(countKey, {
  count,
  incrementCount,
});
</script>

<template>
  <slot />
</template>
