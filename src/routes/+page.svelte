<script>
	import { onMount } from 'svelte';
	import Clock from './clock.svelte';
	export let data;
	
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Main Div-->
<div class="flex">
	<!-- Menu -->
	<div class="h-full w-1/4 flex flex-col">
		<nav class="h-full w-1/4 bg-blue-400 flex flex-col fixed top-0">
			<span class="material-symbols-outlined pt-4 pb-20 pl-6 big-icon"> task </span>

			<p class="pl-8 text-xl pb-2 hover:text-white text-blue-900 font-semibold">All</p>
			<p class="pl-8 text-xl pb-2 hover:text-white">Active</p>
			<p class="pl-8 text-xl pb-2 hover:text-white">Completed</p>
		</nav>
	</div>

	<!-- Todos Div-->
	<div class="flex flex-col w-full items-center pt-20">
		<Clock />
		<!-- the Form -->
		<div class="pb-4">
			<h1 class="text-4xl font-semibold">To do</h1>
		</div>
		<form method="POST" class="pb-20" action="?/createTodo">
			<label for="" class="text-xl text-gray-600"
				>add a to do:
				<input
					type="text"
					class="rounded-sm bg-slate-200 pl-2"
					name="description"
					autocomplete="off"
				/>
			</label>
		</form>

		<!-- Todos UI -->
		{#each data.todos as todo}
			<div class="flex w-3/5 text-center mb-4">
				<div class="w-4/5 p-4 box rounded-lg bg-slate-200 text-lg hover:bg-slate-300">
					<form action="?/deleteTodo" method="POST" class="flex w-full justify-between">
						<input type="hidden" name="id" value={todo.id} />
						<p>{todo.description}</p>
						<button><span class="material-symbols-outlined"> delete </span></button>
					</form>
				</div>

				<div class="w-1/5 pt-4">
					<form action="?/setTodoTimer" method="POST">
						<input type="hidden" name="id" value={todo.id} />
						<button><span class="material-symbols-outlined blue-icon"> timer </span></button>
					</form>
				</div>
				{#if todo.setTimer}
				<p>Hello</p>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.box {
		transition: border-width 0.1s ease-in-out;
	}

	.box:hover {
		border-width: 2px;
		border-color: #3b82f6;
	}

	.big-icon {
		font-size: 58px;
	}

	.blue-icon {
		color: #3b82f6;
	}
</style>
