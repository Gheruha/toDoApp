<script>
	// @ts-nocheck
	import Todos from './todos.svelte';
	export let data;
</script>

{#each data.todos as todo (todo.id)}
	<!-- Todos UI -->
	<Todos {todo} />
{/each}
