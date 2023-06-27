<script lang="ts">
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="grid grid-cols-1">
  <h1 class="text-center text-5xl m-3">Register</h1>

  {#if form?.message}
    <div class="flex justify-center">
      <div class="border-solid border-2 border-black rounded bg-gray-400 text-white w-1/4 text-center">
        {form.message}
      </div>
    </div>
  {/if}

  <div class="flex justify-center text-center">
    <form action="?/register" method="post" novalidate>
      Name: <br />
      <input
        name="name"
        type="text"
        class="border-solid border-2 border-black rounded"
      />
      <br />
      E-mail: <br />
      <input
        name="email"
        type="email"
        class="border-solid border-2 border-black rounded"
      />
      <br />
      Password: <br />
      <input
        type="password"
        class="border-solid border-2 border-black rounded"
        name="password"
      />
      <br />

      Confirm Password: <br />
      <input
        type="password"
        class="border-solid border-2 border-black rounded"
        name="confirmPassword"
      />

      <br />
      <button type="submit" class="border-solid border-2 border-black rounded"
        >Register</button
      >
    </form>
  </div>
</div>
