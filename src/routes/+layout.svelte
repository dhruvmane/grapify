<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon/favicon.svg';
	import favicon_96x96 from '$lib/assets/favicon/favicon-96x96.png'
	import favicon_ico from '$lib/assets/favicon/favicon.ico'
	import favicon_appletouch from '$lib/assets/favicon/apple-touch-icon.png'
	import webmanifest from '$lib/assets/favicon/site.webmanifest'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href={favicon_96x96} sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="shortcut icon" href={favicon_ico} />
	<link rel="apple-touch-icon" sizes="180x180" href={favicon_appletouch} />
	<meta name="apple-mobile-web-app-title" content="Grapify" />
	<link rel="manifest" href={webmanifest} />
</svelte:head>

{@render children()}
