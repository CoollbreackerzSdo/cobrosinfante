import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'tock':['Fira Code Variable'],
				'libre':['Libre Baskerville']
			},
			colors:{
				'antiflash-white':'#F0F0F0ff',
				'dim-gray':'#5B6167ff',
				'french-gray':'#AAB3BBff',
				'raw-umber':'#966B42ff',
				'onyx':'#36393Dff',
				'eerie-black':'#1E242Aff',
				'eerie-black-2':'#18181Bff',
				'cinereous':'#9E928Bff',
				'charcoal':'#354551ff',
			}
		},
	},
	plugins: [animations],
}