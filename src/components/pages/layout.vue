<script setup lang="ts">
    import Menu from './menu.vue';
    import { RouterView } from 'vue-router'; 
</script>
<template>
    <div class="layout">
        <Menu/>
        <RouterView/>
    </div>
</template>
<style lang="css" scoped>
    .layout{
        display: grid;
        grid-template-columns: 25% 1fr;
        gap:0.5rem;
    }
</style>