import { ref, computed, onMounted, onUnmounted } from "vue";


function getTime(date: Date) {
  let options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Intl.DateTimeFormat("es-ES", options).format(date);
}

export function useTimer(){
  let handlerTimer:any;
  const date = ref(new Date)
  onMounted(()=>handlerTimer= setInterval(()=> date.value= new Date,1000))
  onUnmounted(()=> clearInterval(handlerTimer))

  const timeFormat = computed(()=>getTime(date.value))
  return timeFormat
}



