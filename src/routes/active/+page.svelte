<script>
	// @ts-nocheck

	// All imports are in this section
	import { enhance } from '$app/forms';
	import { slide, fly } from 'svelte/transition';
	export let data;
	// All imports are in this section

	const hours = Array.from({ length: 24 }, (_, i) => i);
	const minutes = Array.from({ length: 60 }, (_, i) => i);

	//Functions
	function DoneOrNot(todo) {
		todo.done = !todo.done;
	}
	//Functions
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
			<p class="pl-8 text-xl pb-2 hover:text-violet-700 text-violet-900 font-semibold">Active</p>
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

		{#each data.todos as todo}
			<!-- Todos UI -->
			<div class="flex w-3/5 text-center mb-4">
				{#if !todo.done}
					<!-- Done Form-->
					<form action="?/setDone" method="POST">
						<button on:click={() => DoneOrNot(todo)} class="pt-4 pr-4" in:fly={{ y: 20 }} out:slide
							><span class="material-symbols-outlined" class:done={todo.done}>
								done_outline
							</span></button
						>
						<input type="hidden" value={todo.id} name="id" />
					</form>
					<!-- Done Form-->

					<!-- The boxes-->
					<div
						class="w-4/5 p-4 box rounded-lg bg-slate-200 text-lg hover:bg-slate-300 shadow-lg"
						in:fly={{ y: 20 }}
						out:slide
					>
						<!-- The boxes-->

						<!-- DeleteTodos -->
						<form
							action="?/deleteTodo"
							method="POST"
							class="flex w-full justify-between"
							use:enhance
						>
							<input type="hidden" name="id" value={todo.id} />
							<p>{todo.description}</p>
							<button><span class="material-symbols-outlined violet-icon"> delete </span></button>
						</form>
						<!-- DeleteTodos -->
					</div>

					<!--SetTodosTimer-->
					<div class="w-1/12 p-4" in:fly={{ y: 20 }} out:slide>
						<form action="?/setTodoTimer" method="POST">
							<button><span class="material-symbols-outlined violet-icon"> timer </span></button>
							<input type="hidden" name="id" value={todo.id} />
						</form>
					</div>
					<!--SetTodosTimer-->
				{/if}
				<!-- SendTodosTimerData -->
				{#if todo.setTimer}
					<div class="flex w-52 pt-2">
						<form action="?/sendClockData" method="POST">
							<select name="hourData">
								<option value="" disabled selected>Hour:</option>
								{#each hours as hour}
									<option value={+hour}>{hour}</option>
								{/each}
							</select>
							<select name="minuteData">
								<option value="" disabled selected>Minute:</option>
								{#each minutes as minute}
									<option value={+minute}>{minute}</option>
								{/each}
							</select>
							<button class="hidden"
								><span class="material-symbols-outlined violet-icon"> alarm_on </span></button
							>
							<input type="hidden" name="todoid" value={todo.id} />
						</form>
					</div>
				{/if}
				<!-- SendTodosTimerData -->
			</div>
		{/each}
	</div>
	<!-- Todos Div End-->
</div>

<!-- Main Div End-->

<style>
	.done {
		color: #059669;
	}
	.box {
		transition: border-width 0.1s ease-in-out;
	}

	.box:hover {
		border-width: 2px;
		border-color: #7e22ce;
	}

	.big-icon {
		font-size: 58px;
	}

	.violet-icon {
		color: #7e22ce;
	}
	.violet-icon:hover {
		border-radius: 9999px;
		background-color: #e2e8f0;
	}
</style>
