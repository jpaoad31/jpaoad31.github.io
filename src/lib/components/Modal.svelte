<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	let { isOpen = $bindable(false), title, children } = $props();

	function close() {
		isOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			close();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
		onclick={close}
		transition:fade={{ duration: 200 }}
	></div>

	<!-- Modal Content -->
	<div
		class="fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] flex-col overflow-hidden bg-white px-6 pt-6 pb-12 shadow-2xl sm:inset-auto sm:top-1/2 sm:left-1/2 sm:bottom-auto sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:pb-8"
		transition:fly={{ y: 50, duration: 300 }}
	>
		<div class="mb-6 flex items-start justify-between">
			<h2 class="text-2xl font-bold text-gray-900 leading-tight">{title}</h2>
			<button
				onclick={close}
				class="ml-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
				aria-label="Close modal"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>

		<div class="overflow-y-auto text-gray-700 leading-relaxed pr-2 custom-scrollbar">
			{@render children()}
		</div>
	</div>
{/if}

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 4px;
	}
	.custom-scrollbar::-webkit-scrollbar-track {
		background: transparent;
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: #e5e7eb;
		border-radius: 10px;
	}
</style>
