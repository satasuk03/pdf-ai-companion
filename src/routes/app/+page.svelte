<script lang="ts">
	import UploadFile from '$lib/components/shared/UploadFile.svelte';

	let pdfPath = $state<string | null>(null);

	const handleFileChange = (file: File) => {
		pdfPath = URL.createObjectURL(file);
		console.log($state.snapshot(pdfPath));
	};
</script>

<UploadFile
	onFileUpload={handleFileChange}
	onFilePathChange={() => {
		console.log('file path changed');
	}}
/>
