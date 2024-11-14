<script lang="ts" setup>
    import Grid from './grid.vue';
    import Timer from './timer.vue';
</script>
<template>
    <div class="calendar">        
        <Timer/>
        <Grid/>
    </div>
</template>
<style scoped>
    .calendar{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>