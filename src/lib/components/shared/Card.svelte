<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLHtmlAttributes } from 'svelte/elements';

	interface Props extends HTMLHtmlAttributes {
		className?: string;
	}

	let { children, className }: Props = $props();
</script>

<!-- Add onload animation to the div -->
<div
	class={cn('animate-fade-in-scale w-full max-w-md rounded-xl bg-white p-8 shadow-lg', className)}
>
	{@render children?.()}
</div>
