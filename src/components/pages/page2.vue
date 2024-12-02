<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const { name, page, size } = route.query

</script>
<template>
    <div>
        <div>Página2</div>
        <div>name: {{ name }}</div>
        <div>page : {{ page }} </div>
        <div>size : {{ size }}</div>
    </div>

</template>