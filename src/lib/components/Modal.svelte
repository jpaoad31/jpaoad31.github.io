<script lang="ts">
	let { isOpen = $bindable(false), title, children } = $props();

	let dialog = $state<HTMLDialogElement | null>(null);

	function close() {
		isOpen = false;
	}

	// Close when the click lands on the dialog itself (the ::backdrop area),
	// not on its content.
	function onBackdropClick(event: MouseEvent) {
		if (event.target === dialog) close();
	}

	$effect(() => {
		if (!dialog) return;
		if (isOpen) {
			if (!dialog.open) dialog.showModal();
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = '';
			};
		} else if (dialog.open) {
			dialog.close();
		}
	});
</script>

<dialog
	bind:this={dialog}
	onclose={close}
	onclick={onBackdropClick}
	aria-labelledby="modal-title"
	class="max-h-[90vh] overflow-hidden bg-white px-6 pt-6 pb-12 shadow-2xl sm:pb-8"
>
	<div class="mb-6 flex items-start justify-between">
		<h2 id="modal-title" class="text-2xl font-bold text-gray-900 leading-tight">{title}</h2>
		<button
			onclick={close}
			class="ml-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
			aria-label="Close modal"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<div class="overflow-y-auto text-gray-700 leading-relaxed pr-2 custom-scrollbar">
		{@render children?.()}
	</div>
</dialog>

<style>
	/* Geometry + transitions live here so the animation transform doesn't
	   collide with positioning, and so we can animate the native top-layer
	   dialog open/close via allow-discrete. */
	dialog {
		position: fixed;
		inset: auto 0 0 0; /* mobile: bottom sheet */
		width: 100%;
		margin: 0;
		border: none;
		flex-direction: column;
		opacity: 0;
		transform: translateY(50px);
		transition:
			opacity 0.3s ease,
			transform 0.3s ease,
			overlay 0.3s ease allow-discrete,
			display 0.3s ease allow-discrete;
	}

	/* Drive display from the open state so the UA's closed `display: none`
	   is respected — a Tailwind `flex` class here would override it and leave
	   the invisible dialog capturing pointer events over the page. */
	dialog[open] {
		display: flex;
		opacity: 1;
		transform: translateY(0);
	}

	/* Don't intercept clicks during the brief close animation. */
	dialog:not([open]) {
		pointer-events: none;
	}

	/* Entry animation start state */
	@starting-style {
		dialog[open] {
			opacity: 0;
			transform: translateY(50px);
		}
	}

	@media (min-width: 640px) {
		dialog {
			inset: 0;
			margin: auto; /* centers in the viewport */
			max-width: 32rem; /* matches max-w-lg */
			height: fit-content;
			border-radius: 1rem;
		}
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(4px);
		opacity: 0;
		transition:
			opacity 0.2s ease,
			overlay 0.2s ease allow-discrete,
			display 0.2s ease allow-discrete;
	}

	dialog[open]::backdrop {
		opacity: 1;
	}

	@starting-style {
		dialog[open]::backdrop {
			opacity: 0;
		}
	}

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
