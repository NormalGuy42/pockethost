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

	const steps = [
		{
			number: '01',
			title: 'Zip your project',
			description: 'Put your project in a zip file. We auto-detect what it is — static site, Node.js app, or Python app.',
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`
		},
		{
			number: '02',
			title: 'Upload it',
			description: 'Drag it onto the dashboard. Or paste a link. Or use our homepage uploader — no account needed.',
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>`
		},
		{
			number: '03',
			title: "It's live",
			description: 'Instant URL at yourname.pockethost.io. SSL included. No waiting, no configuring, no cold starts.',
			icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`
		}
	];
</script>

<section id="how-it-works" class="py-20 md:py-24 bg-blue-50" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center mb-12">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
					style="font-family: 'Outfit', sans-serif;"
				>
					Three steps. That's it.
				</h2>
				<p
					in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
					class="text-lg text-slate-500 max-w-xl mx-auto"
				>
					No build pipelines. No Docker. No YAML files. No git push prayers.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				{#each steps as step, i}
					<div
						in:fly={{ y: 20, duration: 400, delay: 100 + i * 75, easing: cubicOut }}
						class="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
					>
						<div class="text-blue-600 mb-3">
							{@html step.icon}
						</div>
						<div class="text-blue-600 font-bold text-xs mb-1.5">{step.number}</div>
						<h3 class="text-lg font-bold text-slate-900 mb-2" style="font-family: 'Outfit', sans-serif;">{step.title}</h3>
						<p class="text-slate-500 text-sm leading-relaxed">{step.description}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
