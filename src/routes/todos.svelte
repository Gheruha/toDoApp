<script>
  // @ts-nocheck

  // All imports are in this section
  import { enhance } from '$app/forms';
  import { slide, fly } from 'svelte/transition';
  export let todo;
  // All imports are in this section

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  //Functions
  function DoneOrNot(todo) {
    todo.done = !todo.done;
  }
</script>

<!-- Todos UI -->
<div class="flex todos-div text-center mb-4 justify-center" class:box-done={todo.done}>
  <div
    class="p-4 box rounded-md bg-slate-100 text-lg flex
	  hover:bg-slate-200 shadow-lg dark:bg-zinc-700 dark:hover:bg-zinc-700"
    in:fly={{ y: 20 }}
    out:slide
  >
    <!-- Done Form-->
    <form action="?/setDone" method="POST">
      <button on:click={() => DoneOrNot(todo)} class="pr-4"
        ><span class="material-symbols-outlined icon" class:done={todo.done}>
          done_outline
        </span></button
      >
      <input type="hidden" value={todo.id} name="id" />
    </form>

    <!-- DeleteTodos -->
    <form action="?/deleteTodo" method="POST" class="flex w-full justify-between" use:enhance>
      <input type="hidden" name="id" value={todo.id} />
      <p>{todo.description}</p>
      <button><span class="material-symbols-outlined color-icon pr-4"> delete </span></button>
    </form>
    <!-- DeleteTodos -->

    <!--SetTodosTimer-->

    <form action="?/setTodoTimer" method="POST">
      <button><span class="material-symbols-outlined icon"> timer </span></button>
      <input type="hidden" name="id" value={todo.id} />
    </form>

    <!--SetTodosTimer-->

    <!-- SendTodosTimerData -->
    {#if todo.setTimer}
      <div class="flex w-52 pt-2">
        <form action="?/sendClockData" method="POST">
          <select name="hourData" class="dark:bg-zinc-800 dark:text-white">
            {#each hours as hour}
              <option value={hour} selected={hour == todo.hour}>{hour}</option>
            {/each}
          </select>
          <select name="minuteData" class="dark:bg-zinc-800 dark:text-white">
            {#each minutes as minute}
              <option value={minute} selected={minute == todo.minute}>{minute}</option>
            {/each}
          </select>
          <button class="hidden"
            ><span class="material-symbols-outlined violet-icon"> alarm_on </span></button
          >
          <input type="hidden" name="todoid" value={todo.id} />
        </form>
      </div>
    {/if}
  </div>
  <!-- SendTodosTimerData -->
</div>
