import Notfound from '@/components/pages/notfound.vue';
import {createRouter,createWebHistory} from 'vue-router'

//https://web.dev/articles/http-cache?hl=es-419
//https://web.dev/articles/bfcache?utm_source=devtools&hl=es-419
//https://router.vuejs.org/guide/advanced/lazy-loading.html
//Que pasa si tengo 1000 páginas
export const router = createRouter({
    history: createWebHistory(),
    routes: [
       {path:"/pagina1/:id", component:()=>import('@/components/pages/page1.vue')},
       {path:"/pagina2", component:()=>import('@/components/pages/page2.vue')},
       {path:"/pagina3", component:()=>import('@/components/pages/page3.vue')},
       {path:"/:catchAll(.*)", component:Notfound}
    ]
});