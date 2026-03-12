<script lang="ts">
	let { onOpenModal } = $props<{ onOpenModal: () => void }>();
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '#how-it-works', label: 'How It Works' },
		{ href: '#features', label: 'Features' },
		{ href: '#pricing', label: 'Pricing' }
	];

	function handleNavClick() {
		mobileMenuOpen = false;
	}
</script>

<nav class="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
	<div class="container-width">
		<div class="flex items-center justify-between h-16">
			<a href="/" class="flex items-center gap-2">
				<img src="/pockethost-logo.png" alt="Pockethost Logo" class="w-8 h-8">
				<span class="font-light tracking-tight text-slate-900 text-xl" style="font-family: 'Outfit', sans-serif;">pockethost</span>
			</a>

			<div class="hidden md:flex items-center gap-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-medium"
					>
						{link.label}
					</a>
				{/each}
				<button
					onclick={onOpenModal}
					class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors duration-200"
				>
					Get Early Access →
				</button>
			</div>

			<button
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				class="md:hidden p-2 text-slate-600 hover:text-slate-900"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>

		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-slate-100 py-4">
				<div class="flex flex-col gap-4">
					{#each navLinks as link}
						<a
							href={link.href}
							onclick={handleNavClick}
							class="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
						>
							{link.label}
						</a>
					{/each}
					<button
						onclick={() => { mobileMenuOpen = false; onOpenModal(); }}
						class="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-3 transition-colors duration-200 text-center"
					>
						Get Early Access →
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>
