/** @type {import('tailwindcss').Config} */
export default {
	// content: ['./src/**/*.{html,js,svelte,ts}'],
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#2fcf65',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff',
					'base-200': '#d9d9d9'
				}
			},
			'dark',
			'cupcake'
		]
	},
	plugins: [require('daisyui')]
};
