<script lang="ts">
	const productLinks = [
		{ href: '#how-it-works', label: 'How It Works' },
		{ href: '#features', label: 'Features' },
		{ href: '#pricing', label: 'Pricing' }
	];

	const resourceLinks = [
		{ href: '#', label: 'Docs', comingSoon: true },
		{ href: '#', label: 'Blog', comingSoon: true },
		{ href: '#', label: 'Status', comingSoon: true }
	];

	const connectLinks = [
		{ href: '#', label: 'Twitter / X', external: true },
		{ href: '#', label: 'GitHub', external: true },
		{ href: '#', label: 'Discord', external: true }
	];
</script>

<footer class="bg-slate-900 text-slate-400 py-16">
	<div class="container-width">
		<div class="grid md:grid-cols-4 gap-12 mb-12">
			<div>
				<a href="/" class="flex items-center gap-2">
					<img src="/pockethost-logo.png" alt="Pockethost Logo" class="w-8 h-8">
					<span class="font-light tracking-tight text-white text-xl" style="font-family: 'Outfit', sans-serif;">pockethost</span>
				</a>
				<p class="mt-4 text-sm leading-relaxed">
					The simplest hosting platform on the internet. Zip it. Upload it. It's live.
				</p>
			</div>

			<div>
				<h4 class="font-semibold text-white mb-4">Product</h4>
				<ul class="space-y-3">
					{#each productLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm hover:text-white transition-colors duration-200"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="font-semibold text-white mb-4">Resources</h4>
				<ul class="space-y-3">
					{#each resourceLinks as link}
						<li>
							<span class="text-sm text-slate-500">
								{link.label}
								{#if link.comingSoon}
									<span class="text-xs text-slate-600 ml-1">(coming soon)</span>
								{/if}
							</span>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h4 class="font-semibold text-white mb-4">Connect</h4>
				<ul class="space-y-3">
					{#each connectLinks as link}
						<li>
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="text-sm hover:text-white transition-colors duration-200"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="border-t border-slate-800 pt-8">
			<p class="text-sm text-slate-500">
				© 2026 Pockethost
			</p>
		</div>
	</div>
</footer>
