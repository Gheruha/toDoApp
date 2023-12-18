<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import { slide, fly } from 'svelte/transition';

	let inputHour = 0;
	let inputMinute = 0;
	let notification = '';
	const dispatcher = createEventDispatcher(); // I will help you to make the communication of child to parent, I will send the functions to him , the events and so on ...
	let show_timer = true;

	function startTimer() {
		const intervalID = setInterval(() => {
			const now = new Date();
			const currentHour = now.getHours();
			const currentMinute = now.getMinutes();

			if (inputHour === currentHour && inputMinute === currentMinute) {
				notification = 'Time reached!';
				clearInterval(intervalID);
				dispatcher('notification', notification);
				show_timer = false;
			}
		}, 1000);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex 1/5 pr-4" on:click>
	<label for="hour" class="font-semibold pr-2" style="display: {show_timer ? 'block' : 'none'};"
		>Hour:
		<input
			type="number"
			class="text-purple-700 w-12 text-center"
			bind:value={inputHour}
			style="display: {show_timer ? 'block' : 'none'};"
		/>
	</label>
	<label for="minutes" class="font-semibold pr-2" style="display: {show_timer ? 'block' : 'none'};"
		>Minute:
		<input
			type="number"
			class="text-purple-700 w-12 text-center"
			bind:value={inputMinute}
			style="display: {show_timer ? 'block' : 'none'};"
		/>
	</label>
	<button on:click={startTimer}
		><span
			class="material-symbols-outlined violet-icon"
			style="display: {show_timer ? 'block' : 'none'};"
		>
			alarm_on
		</span></button
	>
</div>

{#if notification}
	<div
		class="bg-violet-100 rounded-lg p-2 w-2/4 border hover:bg-violet-200 box text-center text-lg items-center shadow-lg"
		in:fly={{ x: 1000 }}
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
