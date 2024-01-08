<!-- Menu.svelte -->
<script>
	//@ts-nocheck
	import ThemeSwitch from '$lib/themeSwitch/themeSwitch.svelte';
	import '../../app.css';
</script>

<nav class="flex h-8 bg-slate-200 dark:bg-zinc-700">
	<ThemeSwitch />
	<div class="w-full justify-center">
		<a href="/" class="text-xl rounded-md hover:bg-red-300 dark:hover:bg-red-400 p-2">All</a>
		<a href="/active" class="text-xl rounded-md hover:bg-red-300 dark:hover:bg-red-400 p-2"
			>Active</a
		>
		<a href="/completed" class="text-xl rounded-md hover:bg-red-300 dark:hover:bg-red-400 p-2"
			>Completed</a
		>
	</div>
</nav>
