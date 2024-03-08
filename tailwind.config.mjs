import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'tock':['Fira Code Variable'],
				'libre':['Libre Baskerville']
			}
		},
	},
	plugins: [animations],
}