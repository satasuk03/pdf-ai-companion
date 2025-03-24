<script lang="ts">
	import { onMount } from 'svelte';

	let time = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<div class="rounded-xl bg-white p-8 shadow-lg">
		<h1 class="font-mono text-4xl font-bold text-gray-800">
			{time.toLocaleTimeString()}
		</h1>
		<p class="mt-2 text-center text-gray-500">
			{time.toLocaleDateString()}
		</p>
	</div>
</div>
