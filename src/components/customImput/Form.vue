<script setup lang="ts">
import { ref } from 'vue';
import Input from './Input.vue';
const name = ref("Pedro Hurtado")
const phone = ref("")
function handlerSubmit(ev:Event){
    ev.preventDefault()
    const data = {
        name:name.value,
        phone:phone.value
    }
    console.log(data)
}
</script>
<template>
    <form @submit="handlerSubmit">
        <Input name="name" label="introduzca el nombre" v-model="name" />
        <Input name="phone" label="introduzca el teléfono" v-model="phone" />
        <button type="submit">Enviar</button>
    </form>
</template>