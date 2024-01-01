<script>
	// @ts-nocheck
	import '../app.css';
	import { enhance } from '$app/forms';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Main Div -->
<div class="flex">
	<!-- Menu -->
	<div class="h-full w-1/4 flex flex-col">
		<nav class="h-full w-1/4 bg-slate-200 flex flex-col fixed top-0">
			<span class="material-symbols-outlined pt-4 pb-20 pl-6 big-icon violet-icon"> task </span>

			<a href="/" class="pl-8 text-xl pb-2 hover:text-violet-700">All</a>
			<a href="/active" class="pl-8 text-xl pb-2 hover:text-violet-700">Active</a>
			<a href="/completed" class="pl-8 text-xl pb-2 hover:text-violet-700">Completed</a>
		</nav>
	</div>
	<!-- Menu End -->

	<!-- Todos Div-->
	<div class="flex flex-col w-full items-center pt-20">
		<!-- the Form -->
		<div class="pb-4">
			<h1 class="text-3xl font-semibold">Hello, user!</h1>
		</div>
		<form method="POST" class="pb-20" action="?/createTodo" use:enhance>
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

		<!-- SLOT FOR TODOS -->
		<slot />
	</div>
	<!-- Todos Div End-->
</div>

<style>
	.big-icon {
		font-size: 58px;
	}
</style>
