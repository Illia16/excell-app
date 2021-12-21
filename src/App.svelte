<script>
	export let name, data, userInput, error;
	import readFile from './readFile';
	const url = `http://localhost:5001/dev/backend/read`;

	function add(e) {
		console.log('e', e.target.files[0]);
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('file', file);

		name = userInput;
		const data = fetch(url, { mode: 'cors', method: "POST", body: formData})
		data
		.then(res => res.json())
		.then(data => {
			console.log('data!', data);
		})
	}

	function setError(res) {
		error = res;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<input type="file" name="file" id="file" bind:value={data} on:change={add}>
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