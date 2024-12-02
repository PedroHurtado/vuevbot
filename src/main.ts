
import { createApp } from 'vue'
import  {router} from './router/routes'
import { createPinia } from 'pinia';
import App from './App.vue'

//https://stackoverflow.com/questions/74072848/multiple-instance-of-pinia-store-possible-in-same-page-or-same-component
const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(router);
app.mount('#app')
