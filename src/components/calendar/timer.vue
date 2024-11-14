<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

let handlerTimer:any;

function getTime(date: Date) {
  let options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat("es-ES", options).format(date);
}

const date = ref(getTime(new Date))
onMounted(()=>handlerTimer= setInterval(()=> date.value= getTime(new Date()),1000))
onUnmounted(()=> clearInterval(handlerTimer))

</script>
<template>
    <div class="timer">{{date}}</div>
</template>
<style scoped>
.timer {
  font-size: 1.5rem;
}
</style>