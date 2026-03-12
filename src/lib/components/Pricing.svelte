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
				{ threshold: 0.1 }
			);
			observer.observe(sectionRef);
			return () => observer.disconnect();
		}
	});

	const plans = [
		{
			name: 'Free',
			price: '$0',
			period: '/month',
			description: 'Perfect for trying it out',
			features: [
				'1 static site',
				'Custom *.pockethost.io subdomain',
				'SSL included',
				'10MB upload limit'
			],
			cta: 'Get Started Free',
			highlighted: false
		},
		{
			name: 'Starter',
			price: '$3',
			period: '/month',
			description: 'For personal projects',
			features: [
				'5 static sites',
				'Everything in Free',
				'50MB upload limit per site',
				'Basic analytics'
			],
			cta: 'Get Starter',
			highlighted: false
		},
		{
			name: 'Indie',
			price: '$9',
			period: '/month',
			description: 'For serious builders',
			features: [
				'25 static sites',
				'5 dynamic apps (bots + Python)',
				'Everything in Starter',
				'100MB upload per project',
				'Env variable management',
				'Priority support'
			],
			cta: 'Get Indie',
			highlighted: true
		},
		{
			name: 'Pro',
			price: '$29',
			period: '/month',
			description: 'For power users',
			features: [
				'Unlimited static sites',
				'20 dynamic apps',
				'Everything in Indie',
				'250MB upload per project',
				'Priority support',
				'Annual plan: $249/yr (save 28%)'
			],
			cta: 'Get Pro',
			highlighted: false
		}
	];
</script>

<section id="pricing" class="py-20 md:py-24 bg-slate-50" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center mb-12">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
					style="font-family: 'Outfit', sans-serif;"
				>
					Simple plans. No math required.
				</h2>
				<p
					in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
					class="text-lg text-slate-500 max-w-xl mx-auto"
				>
					Flat monthly pricing. No per-site charges. No bandwidth penalties.
				</p>
			</div>

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
				{#each plans as plan, i}
					<div
						in:fly={{ y: 20, duration: 400, delay: 100 + i * 75, easing: cubicOut }}
						class="relative bg-white rounded-xl border {plan.highlighted ? 'border-2 border-blue-600 shadow-md' : 'border-slate-100'} p-6 flex flex-col transition-all duration-300 hover:shadow-lg"
					>
						{#if plan.highlighted}
							<div class="absolute -top-3 left-1/2 -translate-x-1/2">
								<span class="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
									Most Popular
								</span>
							</div>
						{/if}

						<div class="mb-5">
							<h3 class="text-base font-bold text-slate-900 mb-1.5" style="font-family: 'Outfit', sans-serif;">{plan.name}</h3>
							<div class="flex items-baseline gap-0.5">
								<span class="text-3xl font-bold text-slate-900" style="font-family: 'Outfit', sans-serif;">{plan.price}</span>
								<span class="text-slate-400 text-sm">{plan.period}</span>
							</div>
							<p class="text-slate-400 text-xs mt-1.5">{plan.description}</p>
						</div>

						<ul class="space-y-2.5 mb-6 flex-grow">
							{#each plan.features as feature}
								<li class="flex items-start gap-2 text-slate-500 text-sm">
									<svg class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									{feature}
								</li>
							{/each}
						</ul>

						<button
							onclick={onOpenModal}
							class="w-full {plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'} font-medium rounded-lg py-2.5 text-sm transition-colors duration-200"
						>
							{plan.cta}
						</button>
					</div>
				{/each}
			</div>

			<p
				in:fly={{ y: 20, duration: 400, delay: 400, easing: cubicOut }}
				class="text-center text-slate-400 text-xs mt-10"
			>
				All plans include: SSL · Custom subdomain · Global CDN for static sites · Dashboard access
			</p>
		{/if}
	</div>
</section>
