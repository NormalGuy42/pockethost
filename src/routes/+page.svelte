<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Features from '$lib/components/Features.svelte';
	import WhyPockethost from '$lib/components/WhyPockethost.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import FinalCTA from '$lib/components/FinalCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Modal from '$lib/components/Modal.svelte';

	let modalOpen = $state(false);

	function openModal() {
		modalOpen = true;
	}
</script>

<svelte:head>
	<title>Pockethost — Zip it. Upload it. It's live.</title>
</svelte:head>

<div class="min-h-screen bg-white">
	<Navbar onOpenModal={openModal} />
	<main>
		<Hero onOpenModal={openModal} />
		<HowItWorks />
		<Features />
		<WhyPockethost />
		<Pricing onOpenModal={openModal} />
		<TechStack />
		<FAQ />
		<FinalCTA onOpenModal={openModal} />
	</main>
	<Footer />
</div>

<Modal bind:open={modalOpen} />
