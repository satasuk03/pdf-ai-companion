<script lang="ts">
	import Button from '$lib/components/shared/Button.svelte';
	import Card from '$lib/components/shared/Card.svelte';
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

<div class="flex min-h-screen items-center justify-center">
	<Card className="flex flex-col items-center justify-center">
		<h1 class="font-mono text-4xl font-bold text-gray-800">
			{time.toLocaleTimeString()}
		</h1>
		<p class="mt-2 text-center text-gray-500">
			{time.toLocaleDateString()}
		</p>
		<div class="mt-6 flex w-full flex-col items-center justify-center gap-2">
			<Button className="w-full" onclick={() => (window.location.href = '/app')}>
				Start using the app
			</Button>
			<Button
				variant="outline"
				size="sm"
				className="w-full"
				onclick={() => (window.location.href = '/settings')}
			>
				Go to settings
			</Button>
		</div>
	</Card>
</div>
