<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
	{@render children()}
</div>
