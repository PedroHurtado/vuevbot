import { onMounted, onUnmounted, ref, computed, inject } from "vue";
import type { Pizza } from "./pizza";
import { PubSub } from "@/services/pubsub";

export function useCarrito() {
    
    const suscriptions:Array<()=>void>=([]);

    const pizzas = ref<Pizza[]>([])
    const price = computed(() => pizzas.value.reduce((acc, p) => acc + p.price, 0))

    const pubsub = inject<PubSub<Pizza>>('pubsub') as PubSub<Pizza>
    
    function addPizza(pizza:Pizza) {
        pizzas.value.push(pizza)    
    }    
    onUnmounted(() => {
        suscriptions.forEach(s=>s());
    })
    onMounted(() => {
        suscriptions.push(pubsub.on('carrito',console.log))
        suscriptions.push(pubsub.on('carrito',addPizza))
    })
    return price;
}