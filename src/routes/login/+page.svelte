<script lang="ts">
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>
<div class="grid grid-cols-1">
  <h1 class="text-center text-5xl m-3">Login</h1>

  {#if form?.message}
    <div class="flex justify-center">
      <div
        class="border-solid border-2 border-black rounded bg-gray-400 text-white w-1/4 text-center"
      >
        <p>{form.message}</p>
      </div>
    </div>
  {/if}
  <div class="flex justify-center text-center">
    <form action="?/login" method="post" novalidate>
      E-mail: <br />
      <input name="email" type="email" class="border-solid border-2 border-black rounded" />
      <br />
      Password: <br />
      <input
        type="password"
        class="border-solid border-2 border-black rounded"
        name="password"
      />
      <br />
      <button type="submit" class="border-solid border-2 border-black rounded"
        >Login</button
      >
    </form>
  </div>
</div>
