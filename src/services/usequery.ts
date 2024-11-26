import { ref } from "vue";
import { GetAll } from "./getAll";

export async function useQueryAll<T>(url: string) {
    const data = ref<[T]>()
    const loading = ref(true)
    const error = ref("")
    try {

        data.value = await GetAll<T>(url)
    }
    catch (err) {
        error.value = err as string;
    }
    finally {
        loading.value = false;
    }
    return {
        data,
        error,
        loading
    }

}