<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="fixed h-screen w-screen bg-gradient-to-br from-purple-50 to-pink-50">
	{@render children()}
</div>
