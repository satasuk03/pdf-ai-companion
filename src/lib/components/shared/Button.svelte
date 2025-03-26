<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'link';
		size?: 'sm' | 'md' | 'lg';
		loading?: boolean;
		fullWidth?: boolean;
		onClick?: (event: MouseEvent) => void;
		className?: string;
	}

	let {
		type = 'button',
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		fullWidth = false,
		onClick,
		children,
		className,
		...rest
	}: Props = $props();

	const variantClasses = {
		link: 'text-blue-600 hover:text-blue-700',
		primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
		outline:
			'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
		danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
	};

	const sizeClasses = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg'
	};

	function handleClick(event: MouseEvent) {
		if (onClick && !disabled && !loading) {
			onClick(event);
		}
	}
</script>

<button
	{type}
	class={cn(
		'rounded-md font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
		variantClasses[variant],
		sizeClasses[size],
		fullWidth ? 'w-full' : '',
		disabled || loading ? 'cursor-not-allowed opacity-70' : 'cursor-pointer',
		className
	)}
	{disabled}
	onclick={handleClick}
	{...rest}
>
	{#if loading}
		<span class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
		></span>
	{/if}
	{@render children?.()}
</button>
