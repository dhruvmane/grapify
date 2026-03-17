<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';

	// Lenis: Smooth Scrolling on Every Page ;)
	onMount(() => {
		// Initialize Lenis
		const lenis = new Lenis({
		  autoRaf: true,
		});
	})

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
