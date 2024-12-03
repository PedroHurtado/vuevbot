import { defineStore } from "pinia";

export const useCounterStore = (id: String) => {
    const store = defineStore(`${id}`, {
        state: () => {
            return { count: 0 }
        },
        actions: {
            increment() {
                this.count++
            },
        },
    })    
    return Reflect.construct(store, []);
}


