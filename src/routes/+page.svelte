<script>
export let data; 
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

<!-- Menu bar -->
<div class = "w-full">
   <nav class = "w-full bg-blue-400 flex fixed top-0">
      <span class="material-symbols-outlined pl-4 pt-2">
         task
         </span>
      <h1 class = "text-2xl pt-2 pb-2 font-semibold">To do</h1>
   </nav>
</div>


<div>

</div>
<!-- Todos-->
<div class = "flex flex-col items-center pt-28">
   <!-- the Form -->
   <h1 class = "text-left text-4xl font-semibold pb-4">Hello , user!</h1>
   <form method="POST" class = "pb-20">
      <label for="" class = "text-2xl text-gray-600">add a to do:
         <input type="text" class = "rounded-lg bg-slate-200 pl-2" name = "description" autocomplete="off">
      </label>
   </form>

   <!-- Todos UI -->
   {#each data.todos as todo}
      <div class = "w-1/5 p-4 box  rounded-lg bg-slate-200  text-lg hover:bg-slate-400 hover:text-white">{todo.description}</div>
      <br>
   {/each}
</div>

<style>
   .box{
      transition: border-width 0.1s ease-in-out;
   }

   .box:hover{
      border-width: 2px;
      border-color:#3b82f6;
   }

   .material-symbols-outlined {
    font-size: 28px; /* Change this value to the desired size */
}
</style>