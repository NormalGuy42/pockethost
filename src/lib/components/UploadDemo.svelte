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
</script>

<section class="section-padding bg-blue-50" bind:this={sectionRef}>
	<div class="container-width">
		{#if visible}
			<div class="text-center mb-12">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
				>
					Try before you sign up.
				</h2>
				<p
					in:fly={{ y: 20, duration: 400, delay: 100, easing: cubicOut }}
					class="text-lg text-slate-500 max-w-2xl mx-auto"
				>
					Drag a zip onto the homepage. Your site is live in seconds. No account. No credit card.
				</p>
			</div>

			<div
				in:fly={{ y: 20, duration: 400, delay: 200, easing: cubicOut }}
				class="max-w-2xl mx-auto"
			>
				<div class="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
					<div class="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
						<div class="flex gap-1.5">
							<div class="w-3 h-3 rounded-full bg-red-400"></div>
							<div class="w-3 h-3 rounded-full bg-yellow-400"></div>
							<div class="w-3 h-3 rounded-full bg-green-400"></div>
						</div>
						<div class="flex-1 mx-4">
							<div class="bg-white rounded px-3 py-1.5 text-sm text-slate-500 font-mono flex items-center gap-2 border border-slate-200">
								<svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
								</svg>
								pockethost.io
							</div>
						</div>
					</div>

					<div class="p-8">
						<div class="text-center mb-8">
							<span class="font-semibold text-xl text-slate-900">pockethost</span>
						</div>

						<div class="border-2 border-dashed border-blue-400 rounded-xl p-10 text-center bg-blue-50/50 mb-6">
							<svg class="w-16 h-16 mx-auto text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
							</svg>
							<p class="text-slate-700 font-medium text-lg mb-1">Drop your .zip here</p>
							<p class="text-slate-400 text-sm">or click to browse</p>
						</div>

						<div class="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
							<div class="flex items-center gap-2">
								<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-green-800 font-medium">Live at →</span>
								<span class="text-blue-600 font-mono text-sm">my-site.pockethost.io</span>
							</div>
							<button class="text-slate-400 hover:text-slate-600">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
								</svg>
							</button>
						</div>

						<p class="text-center text-slate-400 text-sm mt-4">
							Sign up to keep it beyond 1 hour
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
