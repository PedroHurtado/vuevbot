<script setup lang="ts">
import { ref } from 'vue';
const dialog = ref<HTMLDialogElement>()
const show=()=>{
    dialog?.value?.show()
}
const showModal=()=>{
    dialog?.value?.showModal()
}
defineExpose({
    show,
    showModal
})
</script>
<template>
    <dialog ref="dialog">
        <form method="dialog">
            <slot name="x"></slot>            
            <menu>
                <button id="cancel" type="reset">Cancel</button>
                <button type="submit">Confirm</button>
            </menu>
        </form>
    </dialog>
</template>