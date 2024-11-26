export async function GetAll<T>(url:string):Promise<[T]>{
    const response= await fetch(url)
    if(response.status ===200){
        const data = await response.json() as [T]
        return data;
    }
    throw `${response.statusText}->${response.status}`
}