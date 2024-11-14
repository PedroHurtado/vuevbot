
<script setup lang="ts">
  import { useTimer } from './useTimer';
  const timeFormat = useTimer()
</script>

<template>
    <div class="timer">{{timeFormat}}</div>
</template>

<style scoped>
.timer {
  font-size: 1.5rem;
}
</style>