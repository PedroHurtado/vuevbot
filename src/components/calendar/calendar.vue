<script lang="ts" setup>
import Day from "./day.vue";

function* getDays() {
  for (let i = 0; i < 31; i++) {
    yield i + 1;
  }
}
const days = [...getDays()];
</script>
<template>
  <div class="calendar">
    <Day v-for="day in days" :key="day" :day="day" />
  </div>
</template>
<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1.5rem);
  gap: 0.5rem;
}
</style>