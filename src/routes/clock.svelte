<script>
	import { onMount } from 'svelte';

	export let localTime = '';
	export let mornornoon = '';

	function updateTime() {
		const date = new Date();
		const hour = date.getHours();
		const hourView = { hour: 'numeric', minute: '2-digit', second: '2-digit' };

		// @ts-ignore
		localTime = date.toLocaleTimeString('en-US', hourView);

		if (hour >= 12 && hour < 18) {
			mornornoon = 'Good afternoon';
		} else if (hour < 12) {
			mornornoon = 'Good morning';
		} else {
			mornornoon = 'Good evening';
		}
	}

	onMount(() => {
		updateTime();
		setInterval(updateTime, 1000);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-col text-center" on:click>
	<h1>{localTime}</h1>
	<h1>{mornornoon} , user!</h1>
</div>
