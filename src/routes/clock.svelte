<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { slide, fly } from 'svelte/transition';

	export let localTime = '';
	let inputHour = 0;
	let inputMinute = 0;
	let notification = '';
	const dispatcher = createEventDispatcher();

	function startTimer() {
		const intervalID = setInterval(() => {
			const now = new Date();
			const currentHour = now.getHours();
			const currentMinute = now.getMinutes();

			if (inputHour === currentHour && inputMinute === currentMinute) {
				notification = 'Time reached!';
				clearInterval(intervalID);
				dispatcher('notification', notification);
			}
		}, 1000);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex 1/5 pr-4" on:click>
	<label for="hour" class="font-semibold pr-2"
		>Hour:
		<input type="number" class="text-purple-700 w-12 text-center" bind:value={inputHour} />
	</label>
	<label for="minutes" class="font-semibold pr-2"
		>Minute:
		<input type="number" class="text-purple-700 w-12 text-center" bind:value={inputMinute} />
	</label>
	<button on:click={startTimer}
		><span class="material-symbols-outlined violet-icon"> alarm_on </span></button
	>
</div>

{#if notification}
	<div
		class="bg-slate-200 rounded-lg p-2 w-2/4 border hover:bg-slate-300 box text-center text-lg items-center"
		in:fly={{ x: 400 }}
		out:slide
	>
		<p>{notification}</p>
	</div>
{/if}

<style>
	.violet-icon {
		color: #7e22ce;
	}
	.violet-icon:hover {
		border-radius: 9999px;
		background-color: #e2e8f0;
	}
	.box {
		transition: border-width 0.1s ease-in-out;
	}

	.box:hover {
		border-width: 2px;
		border-color: #7e22ce;
	}
</style>
