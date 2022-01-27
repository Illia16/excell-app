<script>
  import DisplayedData from "./DisplayedData.svelte";

  export let name, data, displayData, error;
  const url = `http://localhost:5001/dev/backend/read`;

  function add(e) {
    console.log("e", e.target.files[0]);

    fetch(url, { mode: "cors", method: "POST", body: e.name })
      .then((res) => res.json())
      .then((res) => {
        data = res;
      });
  }

  function setError(res) {
    error = res;
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <input type="file" name="file" id="file" bind:value={data} on:change={add} />
  {#if error}
    <div>Wrong file fomat!</div>
  {/if}

  {#if data && data.length}
    <div>data is here!</div>
    {#each data as entry}
        <h2>year {entry.year}</h2>
    {/each}
  {/if}
  <button on:click={() => (displayData = !displayData)}>Show/Hide Data</button>
  {#if displayData}
    <DisplayedData />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
