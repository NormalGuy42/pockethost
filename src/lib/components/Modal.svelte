<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { open = $bindable(false) } = $props();

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			open = false;
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			open = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4"
		transition:fade={{ duration: 200 }}
	>
		<div
			class="absolute inset-0 bg-black/50"
			onclick={handleBackdropClick}
			role="button"
			tabindex="-1"
			aria-label="Close modal"
		></div>

		<div
			class="relative bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-center"
			transition:fly={{ y: 10, duration: 200, easing: cubicOut }}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
		>
			<div class="text-slate-900 font-light text-lg mb-5" style="font-family: 'Outfit', sans-serif;">pockethost</div>

			<h2 id="modal-title" class="text-xl font-bold text-slate-900 mb-2" style="font-family: 'Outfit', sans-serif;">
				We're building the simplest<br />hosting platform on the internet.
			</h2>

			<p class="text-slate-400 text-sm mb-6">
				Zip goes in. Thing runs.<br />
				Follow us for launch updates.
			</p>

			<a
				href="https://x.com/pockethost"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2.5 px-5 text-sm transition-colors duration-200"
			>
				Follow @pockethost on X
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>

			<button
				onclick={() => open = false}
				class="mt-3 text-slate-400 hover:text-slate-600 transition-colors duration-200 text-xs"
			>
				Close
			</button>
		</div>
	</div>
{/if}
