<script>
	// @ts-nocheck
	import '../app.css';
	import { enhance } from '$app/forms';
	import ThemeSwitch from '$lib/themeSwitch/themeSwitch.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Main Div -->
<div class="flex">
	<!-- Menu -->
	<div class="h-full w-1/5">
		<nav
			class="h-full w-1/5 bg-slate-100 dark:bg-zinc-700 fixed top-0 flex flex-col text-center p-4"
		>
			<ThemeSwitch />

			<p class="pb-24"></p>
			<a
				href="/"
				class="text-xl hover:text-red-400 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 p-2"
				>All</a
			>
			<a
				href="/active"
				class="text-xl hover:text-red-400 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 p-2"
				>Active</a
			>
			<a
				href="/completed"
				class="text-xl hover:text-red-400 rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-600 p-2"
				>Completed</a
			>
		</nav>
	</div>
	<!-- Menu End -->

	<!-- Todos Div-->
	<div class="flex flex-col w-full items-center pt-20">
		<!-- the Form -->
		<div class="pb-4">
			<h1 class="text-3xl font-semibold">Welcome, user!</h1>
		</div>
		<form method="POST" class="pb-20" action="?/createTodo" use:enhance>
			<label for="" class="text-xl text-gray-400">
				<input
					type="text"
					class="rounded-md bg-slate-50 border border-slate-200 dark:bg-zinc-600 dark:border-zinc-700 p-4 h-12 w-96 placeholder:"
					name="description"
					autocomplete="off"
					placeholder="what needs to be done?"
				/>
			</label>
		</form>

		<!-- SLOT FOR TODOS -->
		<slot />
	</div>
	<!-- Todos Div End-->
</div>

<style>
	a {
		font-weight: normal;
	}

	a:active {
		color: #f87171;
		font-weight: bold;
	}
</style>
