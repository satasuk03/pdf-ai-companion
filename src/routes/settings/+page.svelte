<script lang="ts">
	import { onMount } from 'svelte';
	import { saveApiKey, getApiKey } from '$lib/config';
	import Card from '$lib/components/shared/Card.svelte';

	let apiKey = $state('');
	let saved = $state(false);

	onMount(() => {
		const storedApiKey = getApiKey();
		if (storedApiKey) {
			apiKey = storedApiKey;
		}
	});

	function handleSaveApiKey() {
		saveApiKey(apiKey);
		saved = true;
		setTimeout(() => {
			saved = false;
		}, 2000);
	}
</script>

<Card>
	<h1 class="mb-6 text-2xl font-bold text-gray-800">⚙️ Configuration</h1>

	<div class="space-y-4">
		<div>
			<label for="apiKey" class="mb-2 block text-sm font-medium text-gray-700"> API Key </label>
			<input
				id="apiKey"
				type="password"
				bind:value={apiKey}
				class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
				placeholder="Enter your API key"
			/>
		</div>

		<button
			onclick={handleSaveApiKey}
			class="w-full rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
		>
			Save Configuration
		</button>

		{#if saved}
			<div class="mt-4 text-center text-sm text-green-600">
				✅ Configuration saved successfully!
			</div>
		{/if}
	</div>
</Card>
