<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>
<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/pagina1/1">Página1</RouterLink>
            </li>
            <li>
                <RouterLink to="/pagina2?name=pedro&page=1&size=25">Página2</RouterLink>
            </li>
            <li>
                <RouterLink to="/pagina3">Página3</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
   
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>