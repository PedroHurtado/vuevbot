<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const {label,name} = defineProps<{
    modelValue: string,
    label:string,
    name:string,
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

function handleInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value ?? ''; // Maneja posibles valores null
    emit('update:modelValue', value);
}

</script>
<template>
    <div class="control">
        <label :for="name">{{label }}</label>
        <input :value="modelValue" :id="name" 
        @input="handleInput" type="text" />
    </div>
</template>

<style scoped>
.control{
    margin: 0.5rem 0 0.5rem 0;
    display: flex;
    flex-direction: column;
    width: max-content;    
}
</style>