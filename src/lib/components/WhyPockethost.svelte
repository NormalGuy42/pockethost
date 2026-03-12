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

	const benefits = [
		{
			title: 'No account required',
			description: 'Upload on the homepage without signing up. Your site goes live instantly. Sign up later to keep it.',
			icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>`
		},
		{
			title: 'Flat pricing',
			description: 'No surprise bandwidth bills. No compute charges. No egress fees. Pay the same every month.',
			icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
		},
		{
			title: 'Instant URLs',
			description: 'Every project gets a yourname.pockethost.io URL with SSL. Always on, auto-restart on crash.',
			icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`
		}
	];
</script>

<section class="py-20 md:py-24 bg-slate-50" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center mb-12">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
					style="font-family: 'Outfit', sans-serif;"
				>
					Hosting should be boring.
				</h2>
				<p
					in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
					class="text-lg text-slate-500 max-w-xl mx-auto"
				>
					You have better things to do than configure Nginx.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				{#each benefits as benefit, i}
					<div
						in:fly={{ y: 20, duration: 400, delay: 100 + i * 75, easing: cubicOut }}
						class="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
					>
						<div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
							{@html benefit.icon}
						</div>
						<h3 class="text-lg font-bold text-slate-900 mb-2" style="font-family: 'Outfit', sans-serif;">
							{benefit.title}
						</h3>
						<p class="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
