<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let visible = $state(false);
	let sectionRef: HTMLElement;
	let openIndex = $state<number | null>(null);

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

	const faqs = [
		{
			question: 'What file types can I upload?',
			answer: 'Any zip file containing a static site (index.html), a Node.js project (package.json), or a Python project (requirements.txt). We auto-detect the project type.'
		},
		{
			question: 'Do I need an account to try it?',
			answer: "No. Upload on the homepage without signing up. Your site goes live instantly and stays up for 1 hour. Sign up to keep it."
		},
		{
			question: 'What happens if my Discord bot crashes?',
			answer: 'We auto-restart it. Your bot process is monitored and restarted automatically on failure.'
		},
		{
			question: 'Can I use a custom domain?',
			answer: 'Not yet in the MVP. All projects get a yourname.pockethost.io subdomain. Custom domains are on the roadmap.'
		},
		{
			question: 'Is there a file size limit?',
			answer: 'Upload limits depend on your plan — 10MB on Free, up to 250MB on Pro.'
		},
		{
			question: 'How is this different from Vercel or Netlify?',
			answer: "They're great for frontend frameworks with build pipelines. Pockethost is for raw zips — HTML, bots, Python apps. No build step, no git, no framework required. If you have a zip, you have hosting."
		}
	];

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="py-20 md:py-24 bg-blue-50" bind:this={sectionRef}>
	<div class="container-width max-w-2xl">
		{#if visible}
			<div class="text-center mb-10">
				<h2
					in:fly={{ y: 20, duration: 400, easing: cubicOut }}
					class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
					style="font-family: 'Outfit', sans-serif;"
				>
					Questions? Answers.
				</h2>
			</div>

			<div
				in:fly={{ y: 20, duration: 400, delay: 50, easing: cubicOut }}
				class="bg-white rounded-xl border border-slate-100 overflow-hidden"
			>
				{#each faqs as faq, i}
					<div class="border-b border-slate-100 last:border-b-0">
						<button
							onclick={() => toggle(i)}
							class="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors duration-200"
						>
							<span class="font-medium text-slate-900 text-sm">{faq.question}</span>
							<svg
								class="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 {openIndex === i ? 'rotate-180' : ''}"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</button>
						{#if openIndex === i}
							<div
								transition:slide={{ duration: 200, easing: cubicOut }}
								class="px-5 pb-4"
							>
								<p class="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
