<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

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

	const technologies = [
		{ name: 'Fly.io', description: 'Global compute' },
		{ name: 'Tigris', description: 'Object storage' },
		{ name: 'Cloudflare', description: 'DNS & CDN' },
		{ name: 'Nginx', description: 'Reverse proxy' },
		{ name: 'Node.js', description: 'Runtime' },
		{ name: 'Python', description: 'Runtime' }
	];
</script>

<section class="py-16 md:py-20" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center mb-8">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
					style="font-family: 'Outfit', sans-serif;"
				>
					Built on infrastructure you trust.
				</h2>
			</div>

			<div
				in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
				class="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-6"
			>
				{#each technologies as tech, i}
					<div
						class="text-slate-300 hover:text-slate-900 transition-colors duration-200 text-center"
					>
						<span class="font-semibold text-lg" style="font-family: 'Outfit', sans-serif;">{tech.name}</span>
					</div>
				{/each}
			</div>

			<p
				in:fly={{ y: 20, duration: 400, delay: 100, easing: cubicOut }}
				class="text-center text-slate-400 text-sm max-w-xl mx-auto"
			>
				Pockethost runs on Fly.io machines with Tigris storage and Cloudflare DNS. Your projects are served fast, globally.
			</p>
		{/if}
	</div>
</section>
