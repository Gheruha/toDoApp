<script>
import { onMount } from 'svelte';

let localTime = '';
let mornornoon = '';

function updateTime(){

    const date = new Date();
    const hour = date.getHours();
    const hourView = {hour: "numeric" , minute:"2-digit" , second:"2-digit"};

    // @ts-ignore
    localTime = date.toLocaleTimeString("en-US" , hourView);

    if(hour >= 12 && hour < 18){
        mornornoon = "Good afternoon"
    }
    else if(hour < 12){
        mornornoon = "Good morning";
    }
    else{
        mornornoon = "Good evening";
    }
}

onMount(() => {
updateTime();
setInterval(updateTime, 1000);
})
</script>
<div class = "flex flex-col text-center">
    <p class = "text-lg text-gray-600">{localTime}</p>
    <h1 class = "text-3xl font-semibold">{mornornoon}, user!</h1>
</div>