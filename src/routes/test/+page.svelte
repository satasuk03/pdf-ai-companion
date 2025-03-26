<script lang="ts">
	import { onMount } from 'svelte';
	import { getApiKey } from '$lib/service/config';
	import { getModel } from '$lib/service/ai-wrapper/service';
	import { Model } from '$lib/service/ai-wrapper/constants';
	import Card from '$lib/components/shared/Card.svelte';

	let apiKey = $state<string | null>(null);
	let prompt = $state('Tell me a short joke about programming');
	let response = $state('');
	let loading = $state(false);
	let error = $state<string | null>(null);

	onMount(() => {
		apiKey = getApiKey();
	});

	async function handleSubmit() {
		if (!apiKey) {
			error = 'API key is missing. Please set it in the settings page.';
			return;
		}

		try {
			error = null;
			loading = true;
			response = '';

			const model = getModel(Model.CLAUDE_3_7_SONNET, apiKey);
			const result = await model.generateText(prompt);

			response = result;
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unknown error occurred';
			console.error(err);
		} finally {
			loading = false;
		}
	}
</script>

<Card>
	<h1 class="mb-6 text-2xl font-bold text-gray-800">🤖 Claude API Test</h1>

	{#if !apiKey}
		<div class="mb-4 rounded-md bg-yellow-50 p-4 text-yellow-700">
			No API key found. Please set your API key in the <a href="/settings" class="underline"
				>settings page</a
			>.
		</div>
	{/if}

	<div class="space-y-4">
		<div>
			<label for="prompt" class="mb-2 block text-sm font-medium text-gray-700">Prompt</label>
			<textarea
				id="prompt"
				bind:value={prompt}
				rows="4"
				class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
				placeholder="Enter your prompt here"
			></textarea>
		</div>

		<button
			onclick={handleSubmit}
			disabled={loading || !apiKey}
			class="w-full rounded-md bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
		>
			{loading ? 'Generating...' : 'Generate Response'}
		</button>

		{#if error}
			<div class="rounded-md bg-red-50 p-4 text-red-700">
				<p class="font-medium">Error:</p>
				<p>{error}</p>
			</div>
		{/if}

		{#if response}
			<div class="mt-6">
				<h2 class="mb-2 text-lg font-medium text-gray-800">Response:</h2>
				<div class="rounded-md bg-gray-50 p-4 whitespace-pre-wrap">{response}</div>
			</div>
		{/if}
	</div>
</Card>
