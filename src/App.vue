<script  lang="ts" setup>
import { ref } from 'vue';
import Calendar from './components/calendar/calendar.vue';
const name ="Pedro"
const user=undefined
const data = ref([1,2,3,4,5,6])
function handlerClick(){
  const oldValue = data.value;
  data.value.push(data.value.length+1)        //funcion en determinarios escenaridos
  //data.value = [...data.value] // spread operator que cambia la dir de memoria
  //data.value = structuredClone(data.value)

  /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
  */
  //const newValue = data.value;
  console.log(oldValue===data.value)
}
</script>

<template>
  <Calendar/>
  <!--Interpolacion-->
  <div> Hello {{name }}</div>
  <!--if-->
  <div v-if="user">
    {{user}}
  </div>
  <div v-else>
    <button>Login</button>
  </div>
  <!--for-->
  <li v-for="item in data" :key="item">
    {{ item }}
  </li>
  <!--eventos-->
  <button @click="handlerClick()">Cambiar elemento 3 del array</button>
</template>


