<script lang="ts">
	import { onMount } from 'svelte';
	import { saveApiKey, getApiKey, getModel, saveModel } from '$lib/service/config';
	import Card from '$lib/components/shared/Card.svelte';
	import Dropdown from '$lib/components/shared/Dropdown.svelte';
	import { Model } from '$lib/service/ai-wrapper/constants';
	import Button from '$lib/components/shared/Button.svelte';

	let apiKey = $state('');
	let model = $state('');
	let saved = $state(false);

	onMount(() => {
		const storedApiKey = getApiKey();
		if (storedApiKey) {
			apiKey = storedApiKey;
		}

		const storedModel = getModel();
		if (storedModel) {
			model = storedModel;
		}
	});

	function handleSave() {
		saveApiKey(apiKey);
		saveModel(model);
		saved = true;
		setTimeout(() => {
			saved = false;
		}, 2000);
	}
</script>

<div class="m-4 flex h-full items-center justify-center">
	<Card className="mx-auto my-auto">
		<div class="mb-6 flex content-center items-center justify-between">
			<h1 class="text-2xl font-bold text-gray-800">⚙️ Configuration</h1>
			<a href="/test" class="text-blue-600 hover:text-blue-700">Go to test</a>
		</div>
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

			<div>
				<label for="model" class="mb-2 block text-sm font-medium text-gray-700"> Model </label>
				<Dropdown
					options={[
						{ value: Model.CLAUDE_3_7_SONNET, label: Model.CLAUDE_3_7_SONNET },
						{ value: Model.CLAUDE_3_5_SONNET, label: Model.CLAUDE_3_5_SONNET }
					]}
					bind:value={model}
				/>
			</div>

			<Button className="w-full" onclick={handleSave}>Save Configuration</Button>

			{#if saved}
				<div class="mt-4 text-center text-sm text-green-600">
					✅ Configuration saved successfully!
				</div>
			{/if}
		</div>
	</Card>
</div>
