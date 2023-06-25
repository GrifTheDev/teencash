<script>
  import { getDB } from "../firebase";
  import { doc, getDoc, setDoc } from "firebase/firestore";

  export async function toDb() {

    const { db } = getDB();
    const docRef = doc(db, "users", "a");
    console.log((await getDoc(docRef)).data());

    console.log("a")
  }
</script>

<h1 class="underline text-center">Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button on:click={toDb} class="bg-red-500 text-blue-50 place-self-center">Add to firebase</button>
