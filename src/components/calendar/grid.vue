<script lang="ts" setup>
import Day from "./day.vue";

function* getDays() {
  for (let i = 0; i < 31; i++) {
    yield i + 1;
  }
}
const days = [...getDays()];

function handlerClick(ev:Event){
  ev.stopPropagation()
  const node = (ev.composedPath() as HTMLElement[]).find(n=>n.dataset && 'day' in n.dataset)
  if(node){
    const {day} =node.dataset
    console.log(Number(day)) 
  }
}



</script>
<template>
  <div class="grid" @click="handlerClick($event)" >
    <Day v-for="day in days" :key="day" :day="day"/>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1.5rem);
  gap: 0.5rem;
}
</style>