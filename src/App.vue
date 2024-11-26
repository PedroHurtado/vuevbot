<script lang="ts" setup>
import { ref, provide } from 'vue';
import Calendar from '@/components/calendar/calendar.vue';
import PizzaList from './components/carrito/PizzaList.vue';
import Dialog from './components/dialog.vue';
import type { Pizza } from './components/carrito/pizza';
import { PubSub } from '@/services/pubsub';
import './webcomponent'
import Postlist from './components/posts/postlist.vue';


const url = ref("https://my-json-server.typicode.com/typicode/demo/posts/1")
const dialog = ref();

const name = "Pedro"
const user = undefined
const data = ref([1, 2, 3, 4, 5, 6])
function changeUrl() {
  url.value = "https://my-json-server.typicode.com/typicode/demo/posts/2"
}
function handlerClick() {
  const oldValue = data.value;
  data.value.push(data.value.length + 1)        //funcion en determinarios escenaridos
  //data.value = [...data.value] // spread operator que cambia la dir de memoria
  //data.value = structuredClone(data.value)

  /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone
  */
  //const newValue = data.value;
  console.log(oldValue === data.value)
}
provide('pubsub', new PubSub<Pizza>())

const activeDialog = ref('Home')
const dialogs = {

}
function showDialog() {
  dialog.value.showModal()
  //cambiar el ref
  //activeDialog.value = ''
}
</script>

<template>

  <div>
    <button @click="changeUrl">Pagina1</button>
  </div>
  <button @click="showDialog">Show Section1</button>
  <button @click="showDialog">Show Section2</button>
  <button @click="showDialog">Show Section3</button>
  <Dialog ref="dialog">
    <template #x>
      <section>
        <p>
          <label for="favAnimal">Favorite animal:</label>
          <select id="favAnimal">
            <option></option>
            <option>Brine shrimp</option>
            <option>Red panda</option>
            <option>Spider monkey</option>
          </select>
        </p>
      </section>
      <!--
      <component is:dialogs[activeDialog]></component>
    -->

    </template>
  </Dialog>

  <PizzaList />

  <Calendar />
  <!--Interpolacion-->
  <div> Hello {{ name }}</div>
  <!--if-->
  <div v-if="user">
    {{ user }}
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

  
  <Suspense>
    <Postlist :url="url" />
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  

  
  



</template>