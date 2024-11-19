import { onMounted, onUnmounted, ref, computed, inject } from "vue";
import type { Pizza } from "./pizza";
import { PubSub } from "@/services/pubsub";

export function useCarrito() {
    let suscription:()=>void;
    const pizzas = ref<Pizza[]>([])
    const price = computed(() => pizzas.value.map(p => p.price).reduce((acc, p) => acc + p, 0))

    const pubsub = inject<PubSub<Pizza>>('pubsub') as PubSub<Pizza>
    
    function addPizza(pizza:Pizza) {
        //ev.stopPropagation();
        //const event: CustomEvent = ev as CustomEvent
        //const pizza = event.detail as Pizza
        pizzas.value.push(pizza)
        // pizzas.value = [...pizzas.value]
    }

    //onMounted(() => document.addEventListener('add-carrito', addPizza))
    onUnmounted(() => suscription && suscription())
    onMounted(() => suscription = pubsub.on('carrito',addPizza))
    return price;
}