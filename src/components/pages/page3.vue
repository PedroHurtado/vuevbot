<script setup lang="ts">
import { useRouter } from 'vue-router';
//https://router.vuejs.org/guide/essentials/navigation.html
const router = useRouter()
function handlerClick() {
    router.push({
        path: '/pagina2', query: {
            name: 'pedro',
            page:1,
            size:25
        }
    })
}
</script>
<template>
    <div>
        <div>Página3</div>
        <button @click="handlerClick">Ir a página 2</button>
    </div>
</template>