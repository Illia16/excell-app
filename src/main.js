import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		userInput: '',
		data: [],
		error: false,
	}
});

export default app;