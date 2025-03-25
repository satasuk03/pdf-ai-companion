<script lang="ts">
	let { children } = $props();
</script>

<!-- Add onload animation to the div -->
<div class="animate-fade-in-scale w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
	{@render children()}
</div>
