import { ref } from "vue";
import { Get } from "./get";

export async function useQuery<T>(url: string) {
    const data = ref<T>()
    const loading = ref(true)
    const error = ref("")
    try {

        data.value = await Get<T>(url)
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