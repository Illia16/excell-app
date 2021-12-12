<script>
	export let name, data, userInput, error;
	import readFile from './readFile';

	function add() {
		name = userInput;
	}

	function onChange(e) {
		// const res = readFile.init(e);
		// console.log('res', res);
		// if (res?.invalidFile) setError(res.invalidFile);

		const data = fetch('/backend/read', {method: "GET"})
		data.then((res) => {
			console.log('res', res);
		})
	}

	function setError(res) {
		error = res;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<!-- <input type="text" bind:value={userInput}> -->
	<input type="file" name="file" id="file" bind:value={data} on:change={onChange}>
	<!-- <button on:click={add} >Add to array</button> -->
	{#if error}
	 <div>Wrong file fomat!</div>
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