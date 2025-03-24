<script lang="ts">
	let pdfPath = $state<string | null>(null);

	const handleFileChange = (event: Event) => {
		const file = (event.target as HTMLInputElement).files?.[0];
		if (file) {
			pdfPath = URL.createObjectURL(file);
		}
		console.log($state.snapshot(pdfPath));
	}
</script>

<div class="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
	<div class="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full mx-4 transition-transform hover:scale-102">
		<div class="text-2xl font-bold mb-6 text-gray-800">📄 Upload your PDF</div>
		<label class="group cursor-pointer">
			<div class="border-2 border-dashed border-purple-300 rounded-lg p-8 transition-all hover:border-purple-400 hover:bg-purple-50">
				<input 
					class="hidden" 
					type="file" 
					accept=".pdf" 
					onchange={handleFileChange}
				/>
				<div class="flex flex-col items-center gap-3">
					<svg class="w-12 h-12 text-purple-400 group-hover:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
					</svg>
					<span class="text-sm text-gray-600 group-hover:text-gray-700">
						Drop your PDF here or click to browse
					</span>
				</div>
			</div>
		</label>
	</div>
</div>
