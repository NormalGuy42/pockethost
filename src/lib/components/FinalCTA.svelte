<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { onOpenModal } = $props<{ onOpenModal: () => void }>();
	let visible = $state(false);
	let sectionRef: HTMLElement;

	$effect(() => {
		if (typeof window !== 'undefined' && sectionRef) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				},
				{ threshold: 0.2 }
			);
			observer.observe(sectionRef);
			return () => observer.disconnect();
		}
	});
</script>

<section class="py-20 md:py-24" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center max-w-xl mx-auto">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
					style="font-family: 'Outfit', sans-serif;"
				>
					Ready to stop overthinking hosting?
				</h2>
				<p
					in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
					class="text-slate-500 mb-8"
				>
					Follow us for launch updates. We'll let you know the second Pockethost is live.
				</p>
				<div in:fly={{ y: 20, duration: 400, delay: 100, easing: cubicOut }}>
					<button
						onclick={onOpenModal}
						class="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-200 hover:shadow-lg"
					>
						Get Early Access →
					</button>
				</div>
			</div>
		{/if}
	</div>
</section>
