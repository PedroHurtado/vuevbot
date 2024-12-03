<script setup lang="ts">
    import { useCounterStore } from '@/services/counterstore';
    const {position} = defineProps<{
        position:String
    }>()
    const counter = useCounterStore(position);
    function increment(){
        counter.increment()
    }
</script>
<template>
    <div>        
        <div>{{position }} -> {{counter.count}}</div>
        <button @click="increment">Increment</button>
    </div>    
</template>