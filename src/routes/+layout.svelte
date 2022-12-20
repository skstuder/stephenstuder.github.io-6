<script>
	import '../styles/normalize.css';
	import '../styles/base.css';
	import Nav from '../components/Nav.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
</script>

<Nav />
<main class="layout">
	{#key $page}
		<div in:fly={{ duration: 500 }}>
			<slot />
		</div>
	{/key}
</main>
