import axios from "axios";
export async function Get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url)
    if (response.status === 200) {
        return response.data;
    }
    throw `${response.statusText}->${response.status}`
}

export async function GetFetch<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (response.status === 200) {
        return response.json() as T;
    }
    throw `${response.statusText}->${response.status}`
}