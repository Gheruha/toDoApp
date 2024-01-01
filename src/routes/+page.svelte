<script>
	// @ts-nocheck

	// All imports are in this section
	import { enhance } from '$app/forms';
	import { slide, fly } from 'svelte/transition';
	export let data;
	// All imports are in this section

	const hours = Array.from({ length: 24 }, (_, i) => i);
	const minutes = Array.from({ length: 60 }, (_, i) => i);

	/* DEBUG PART
	let debug = [{count: 0}];
	function RunDebug(){

		setInterval(() => {
			debug[0].count += 1;
			if(debug[0].count == 5){
				debug[0].count = 0;
			}
		},500)
	}*/

	//Functions
	function DoneOrNot(todo) {
		todo.done = !todo.done;
	}
</script>

{#each data.todos as todo, index}
	<!-- Todos UI -->
	<div class="flex w-3/5 text-center mb-4">
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
			<form action="?/deleteTodo" method="POST" class="flex w-full justify-between" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<p>{todo.description}</p>
				<!--<p>{todo.elapsed}</p> -->
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
