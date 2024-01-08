<script>
	// @ts-nocheck
	import '../app.css';
	import { enhance } from '$app/forms';
	import Menu from '$lib/menu/menu.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Main Div -->
<div class="flex flex-col">
	<!-- Menu -->
	<div class = "w-full top-0 fixed">
		<Menu/>
	</div>
	
	<!-- Todos Div-->
	<div class="flex flex-col w-full items-center pt-32">
		<!-- the Form -->
		<div class="pb-4">
			<h1 class="text-3xl font-semibold">Welcome, user!</h1>
		</div>
		<form method="POST" class="pb-20" action="?/createTodo" use:enhance>
			<label for="" class="text-xl text-gray-400">
				<input
					type="text"
					class="rounded-md bg-slate-50 border border-slate-200 dark:bg-zinc-600 dark:border-zinc-700
					p-4 h-12 todo-input"
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
