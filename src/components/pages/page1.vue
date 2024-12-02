<script setup lang="ts">
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const {id} = route.params
</script>
<template>
    <h1>Página1 params:{{id}}</h1>
</template>