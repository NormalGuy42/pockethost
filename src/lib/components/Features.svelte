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

	const features = [
		{
			title: 'Static Sites',
			description: 'HTML, CSS, JS — the classics. Upload a zip, get a URL. Perfect for portfolios, landing pages, documentation, and link-in-bio pages. PDFs work too.',
			badge: 'Instant deploy',
			mockup: 'browser',
			url: 'portfolio.pockethost.io'
		},
		{
			title: 'Discord Bots',
			description: 'Node.js or Python bots detected automatically from package.json or requirements.txt. Always-on hosting with env vars injected from the dashboard. No VPS required.',
			badge: 'Always-on',
			mockup: 'terminal',
			terminalText: ['[✓] Bot connected to Discord', '[✓] Listening for commands...']
		},
		{
			title: 'Python Apps',
			description: 'Flask, FastAPI, or any Python web framework. Upload your code, we detect requirements.txt and start your app. HTTP port exposed automatically.',
			badge: 'Auto-configured',
			mockup: 'terminal',
			terminalText: ['$ python app.py', '* Running on http://0.0.0.0:8000', '* Ready to serve requests']
		}
	];
</script>

<section id="features" class="py-20 md:py-24" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center mb-12">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
					style="font-family: 'Outfit', sans-serif;"
				>
					One platform. Three deployment types.
				</h2>
				<p
					in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
					class="text-lg text-slate-500 max-w-xl mx-auto"
				>
					From a portfolio page to a Discord bot running 24/7 — Pockethost handles it.
				</p>
			</div>

			<div class="grid md:grid-cols-3 gap-6">
				{#each features as feature, i}
					<div
						in:fly={{ y: 20, duration: 400, delay: 100 + i * 75, easing: cubicOut }}
						class="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg hover:border-slate-200 transition-all duration-300"
					>
						{#if feature.mockup === 'browser'}
							<div class="bg-slate-50 p-3">
								<div class="bg-white rounded-lg shadow-sm overflow-hidden">
									<div class="flex items-center gap-2 px-3 py-2 bg-slate-50 border-b border-slate-100">
										<div class="flex gap-1.5">
											<div class="w-2 h-2 rounded-full bg-red-400"></div>
											<div class="w-2 h-2 rounded-full bg-yellow-400"></div>
											<div class="w-2 h-2 rounded-full bg-green-400"></div>
										</div>
										<div class="flex-1 mx-2">
											<div class="bg-slate-100 rounded px-2 py-0.5 text-[10px] text-slate-500 font-mono flex items-center gap-1">
												<svg class="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
												</svg>
												{feature.url}
											</div>
										</div>
									</div>
									<div class="p-3 h-16 flex items-center justify-center">
										<div class="text-center">
											<div class="text-slate-900 font-semibold text-xs">My Portfolio</div>
											<div class="text-slate-400 text-[10px] mt-0.5">Welcome to my site</div>
										</div>
									</div>
								</div>
							</div>
						{:else}
							<div class="bg-slate-900 p-3">
								<div class="flex items-center gap-1.5 mb-2">
									<div class="w-2 h-2 rounded-full bg-red-500"></div>
									<div class="w-2 h-2 rounded-full bg-yellow-500"></div>
									<div class="w-2 h-2 rounded-full bg-green-500"></div>
								</div>
								<div class="font-mono text-[10px] text-slate-300 space-y-0.5 h-14">
									{#each feature.terminalText || [] as line}
										<div class="{line.includes('✓') ? 'text-green-400' : ''}">{line}</div>
									{/each}
								</div>
							</div>
						{/if}

						<div class="p-5">
							<span class="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
								{feature.badge}
							</span>
							<h3 class="text-lg font-bold text-slate-900 mb-2" style="font-family: 'Outfit', sans-serif;">{feature.title}</h3>
							<p class="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
