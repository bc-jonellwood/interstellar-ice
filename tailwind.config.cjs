/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
      		md: '768px',
      		lg: '976px',
      		xl: '1440px',
		},
		colors: {
			'accent': '#ffd700',
			'accent-faded': '#ffd70050',
			'darker-yellow': '#eab308',
			'accent-light': '#58C9E8',
			'accent-dark': '#055677',
			'green': '#789b48',
			'dark-green': '#286142',
			'transparent': 'transparent',
			'almost-transparent': '0000ff',
		},
		container:{
			center: true,
		},
		extend: {
			listStyleImage: {
				checkmark: "url('/checkmark.png')",
			}
		},
	},
	plugins: [],
}
