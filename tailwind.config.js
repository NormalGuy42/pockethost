/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				heading: ['Outfit', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace']
			},
			letterSpacing: {
				tighter: '-0.04em',
				tight: '-0.03em',
				snug: '-0.02em'
			}
		}
	},
	plugins: []
};
