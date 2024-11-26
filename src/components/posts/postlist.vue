<script setup lang="ts">
import { useQuery } from '@/services/usequery';
import type { Post } from './Post';
import { watch } from 'vue';



const props =defineProps<{
    url:string
}>() 


const {data,loading,error} = await useQuery<Post>(props.url)


/*
    ({url})=>{} //desectructuracion
    const {...rest} =  await useQueryAll<[Post]>(url)->desectructuracion 
*/
watch(props,async ({url})=>{
   const {...rest} =  await useQuery<Post>(url)

   data.value = rest.data.value
   loading.value = rest.loading.value
   error.value = rest.error.value

})

</script>
<template>
        <div>{{props.url}}</div>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <!--
            <div v-else v-for="item in data" :key="item.id">
                <div>{{ item.id }}</div>
                <div>{{ item.title }}</div>
            </div>   
        -->
        <div>
            {{data?.id }}
            {{data?.title }}
        </div>
        
</template>