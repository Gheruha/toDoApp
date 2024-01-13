<script>
  // @ts-nocheck
  import Todos from '../todos.svelte';
  export let data;
</script>

{#each data.todos as todo (todo.id)}
  {#if !todo.done}
    <Todos {todo} />
  {/if}
{/each}
