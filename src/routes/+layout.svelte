<script>
	// @ts-nocheck
	import '../app.css';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	let mornornoon = '';
	function updateTime() {
		const date = new Date();
		const hour = date.getHours();

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

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<!-- Main Div -->
<div class="flex">
	<!-- Menu -->
	<div class="h-full w-1/5 flex flex-col">
		<nav class="h-full w-1/5 bg-slate-100 flex flex-col fixed top-0">
			<span class="material-symbols-outlined pt-4 pb-20 pl-6 big-icon"> task </span>

			<a href="/" class="pl-8 text-xl pb-2 hover:text-violet-700 rounded-lg hover:bg-slate-200 p-2"
				>All</a
			>
			<a
				href="/active"
				class="pl-8 text-xl pb-2 hover:text-violet-700 rounded-lg hover:bg-slate-200 p-2">Active</a
			>
			<a
				href="/completed"
				class="pl-8 text-xl pb-2 hover:text-violet-700 rounded-lg hover:bg-slate-200 p-2"
				>Completed</a
			>
		</nav>
	</div>
	<!-- Menu End -->

	<!-- Todos Div-->
	<div class="flex flex-col w-full items-center pt-20">
		<!-- the Form -->
		<div class="pb-4">
			<h1 class="text-3xl font-semibold">{mornornoon}, user!</h1>
		</div>
		<form method="POST" class="pb-20" action="?/createTodo" use:enhance>
			<label for="" class="text-xl text-gray-600">
				<input
					type="text"
					class="rounded-md bg-slate-50 border border-slate-200 p-4 h-12 w-96 placeholder:"
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
	.big-icon {
		font-size: 42px;
		color: #7e22ce;
	}

	a {
		font-weight: normal;
	}

	a:active {
		color: #7e22ce;
		font-weight: bold;
	}
</style>
