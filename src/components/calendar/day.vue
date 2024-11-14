<script lang="ts" setup>



const { day } = defineProps<{
  day: number;
}>();

</script>

<template>
  <div class="day" :data-day="day">{{ day }}</div>
</template>

<style scoped>
.day {
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;
}
.day:hover {
  outline: 1px solid blue;
}
</style>