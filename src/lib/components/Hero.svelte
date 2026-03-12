<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { onOpenModal } = $props<{ onOpenModal: () => void }>();
	let dragging = $state(false);

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		dragging = true;
	}

	function handleDragLeave() {
		dragging = false;
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		dragging = false;
		onOpenModal();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			onOpenModal();
		}
	}
</script>

<section class="min-h-[calc(100svh-4rem)] flex items-center bg-white">
	<div class="container-width w-full py-12 md:py-16">
		<div class="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
			<!-- Text Content -->
			<div class="text-center md:text-left">
				<div
					in:fly={{ y: 20, duration: 500, delay: 0, easing: cubicOut }}
					class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 border border-blue-100"
				>
					<span class="relative flex h-2 w-2">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
					</span>
					Coming Soon
				</div>

				<h1
					in:fly={{ y: 20, duration: 500, delay: 50, easing: cubicOut }}
					class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-5 leading-[1.1]"
					style="font-family: 'Outfit', sans-serif;"
				>
					Zip it. Upload it.<br /><span class="text-blue-600">It's live.</span>
				</h1>

				<p
					in:fly={{ y: 20, duration: 500, delay: 100, easing: cubicOut }}
					class="text-lg lg:text-xl text-slate-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
				>
					The hosting platform for people who don't want to think about hosting.
					Static sites, bots, and apps — live in seconds.
				</p>

				<div
					in:fly={{ y: 20, duration: 500, delay: 150, easing: cubicOut }}
					class="hidden md:block"
				>
					<a
						href="#how-it-works"
						class="text-sm text-slate-400 hover:text-slate-600 transition-colors duration-200 font-medium inline-flex items-center gap-1.5"
					>
						See how it works
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Drop Zone -->
			<div in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}>
				<div
					class="group relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border-2 transition-all duration-300 overflow-hidden cursor-pointer"
					class:border-blue-500={dragging}
					class:bg-blue-50={dragging}
					class:scale-[1.02]={dragging}
					class:border-slate-100={!dragging}
					class:hover:border-blue-200={!dragging}
					class:hover:shadow-2xl={!dragging}
					ondragover={handleDragOver}
					ondragleave={handleDragLeave}
					ondrop={handleDrop}
					onclick={onOpenModal}
					role="button"
					tabindex="0"
					aria-label="Upload zip file"
					onkeydown={handleKeydown}
				>
					<div class="relative p-8 lg:p-10 text-center">
						<div class="mb-5 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
							<div class="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto text-blue-600 border border-blue-100 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
								<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
								</svg>
							</div>
						</div>

						<h3 class="text-xl font-bold text-slate-900 mb-1.5" style="font-family: 'Outfit', sans-serif;">
							Drop your .zip here
						</h3>
						<p class="text-slate-400 text-sm mb-6">or click to browse</p>

						<div class="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
							Select File
						</div>
					</div>
				</div>

				<!-- Mobile "See how it works" link -->
				<div class="mt-8 text-center md:hidden">
					<a
						href="#how-it-works"
						class="text-sm text-slate-400 hover:text-slate-600 transition-colors duration-200 font-medium inline-flex items-center gap-1.5"
					>
						See how it works
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
