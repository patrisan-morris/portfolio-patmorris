/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				"primary": "rgb(var(--primary))",
				"secundary": "rgb(var(--secundary))",
      			"accent": "rgb(var(--accent))",
			},
			fontFamily: {
				'montserrat': ['Montserrat'],
				'merriweather': ['Merriweather Sans'],
			},
			backgroundImage: {
				'pma-dev': "url('/pma-dev.png')",
			}
		},
	},
	plugins: [],
}
