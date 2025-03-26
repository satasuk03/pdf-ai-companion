<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		options: { value: string; label: string }[];
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		className?: string;
	}

	let {
		options,
		value = $bindable(''),
		placeholder = 'Select an option',
		disabled = false,
		className
	}: Props = $props();

	function handleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		value = target.value;
	}
</script>

<div class={cn('w-full', className)}>
	<select
		{disabled}
		{value}
		onchange={handleChange}
		class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-purple-500 focus:ring-purple-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
	>
		{#if !value}
			<option value="" disabled selected>{placeholder}</option>
		{/if}
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
