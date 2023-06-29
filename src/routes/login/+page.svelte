<script lang="ts">
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<body class="bg-white">
<div class="flex justify-center items-center h-screen ">
  <div class="w-1/3 border-solid bg-white border border-gray-400 rounded">
    <h1 class="text-center text-5xl m-3 font-poppins-regular">Login</h1>
    <p class="font-poppins-regular text-center text-lg m-1">Welcome back!</p>
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
        <p class="font-poppins-light">E-mail:</p>
        <input
          name="email"
          type="email"
          class="border-solid border-2 border-black rounded h-8"
        />
        <br />
        <p class="font-poppins-light">Password:</p>
        <input
          type="password"
          class="border-solid border-2 border-black rounded h-8"
          name="password"
        />
        <br />
        <button type="submit" class="border-solid border-2 border-black rounded font-poppins-regular m-2 p-1.5 hover:p-2 active:p-1">
          Login
        </button>
      </form>
    </div>
  </div>
</div>
</body>