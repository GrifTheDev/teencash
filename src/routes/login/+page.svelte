<script lang="ts">
  import type { ActionData } from "./$types";
  export let form: ActionData;
</script>

<body class="bg-pinkish">
  <div class="flex justify-center items-center h-screen">
    <div class="w-1/4 border-solid bg-white border border-gray-400 rounded-3xl">
      <h1 class="text-center text-5xl m-3 font-mulish-bold mt-16 mb-4">
        Login
      </h1>

      {#if form?.message}
        <div class="flex justify-center">
          <p class="text-center text-lg text-buttonRed m-1 mt-2 mb-7 mx-3">{form.message}</p>
        </div>
      {:else}
        <p class="text-center text-lg m-1 mt-2 mb-7">Welcome back!</p>
      {/if}

      <div class="flex justify-center text-center">
        <form action="?/login" method="post" novalidate>
          <input
            name="email"
            type="email"
            class="border-solid border-2 border-inputBorder rounded-md h-10 mb-4 pl-1"
            placeholder="E-mail"
          />
          <br />
          <input
            type="password"
            class="border-solid border-2 border-inputBorder rounded-md h-10 pl-1"
            name="password"
            placeholder="Password"
          />
          <br />
          <div class="flex justify-center text-center m-2">
            <a
              href="/register"
              class="font-mulish-light text-href mt-2 underline"
              >Don't have an account? Sign up.</a
            >
          </div>
          <div class="flex justify-center text-center m-2">
            <a href="/reset" class="font-mulish-light text-href mb-2 underline"
              >Forgot your password?</a
            >
          </div>
          <button
            type="submit"
            class="scale-105 rounded-xl font-mulish-semibold mt-0 mb-10 p-1.5 bg-buttonRed px-10 transition ease-in-out shadow-button1-idle hover:shadow-button1-hover hover:scale-110 active:shadow-button1-acitve active:scale-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</body>
