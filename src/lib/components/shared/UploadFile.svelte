<script lang="ts">
	import Card from '$lib/components/shared/Card.svelte';

	// Props
	interface Props {
		onFileUpload: (file: File) => void;
		onFilePathChange: (path: string) => void;
	}
	let { onFileUpload, onFilePathChange }: Props = $props();

	// Local state
	let pdfPath = $state<string | null>(null);
	let fileName = $state<string | null>(null);

	const handleFileChange = (event: Event) => {
		const file = (event.target as HTMLInputElement).files?.[0];
		if (file) {
			// Create object URL for the file
			pdfPath = URL.createObjectURL(file);
			fileName = file.name;

			// Call the callback prop if provided
			if (onFileUpload) onFileUpload(file);

			// Call the path change callback if provided
			if (onFilePathChange && pdfPath) onFilePathChange(pdfPath);
		}
	};
</script>

<Card>
	<div class="mb-6 text-2xl font-bold text-gray-800">📄 Select your PDF</div>
	{#if fileName}
		<div class="mb-6 text-sm text-gray-600">
			Current file: {fileName}
		</div>
	{/if}
	<label class="group cursor-pointer">
		<div
			class="rounded-lg border-2 border-dashed border-purple-300 p-8 transition-all hover:border-purple-400 hover:bg-purple-50"
		>
			<input class="hidden" type="file" accept=".pdf" onchange={handleFileChange} />
			<div class="flex flex-col items-center gap-3">
				<svg
					class="h-12 w-12 text-purple-400 group-hover:text-purple-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
					/>
				</svg>
				<span class="text-sm text-gray-600 group-hover:text-gray-700">
					Drop your PDF here or click to browse
				</span>
			</div>
		</div>
	</label>
</Card>
