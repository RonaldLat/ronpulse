/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		/**type {Object}*/
		post: {
			title: `Title for ${params.id || 'business name'} goes here`,
			content: `Content for ${params.id || 'business name'} goes here`,
			phone_number: '0725000000'
		},
		gym: {
			name: 'FitLife Gym',
			title: 'Transform your fitness journey with us!',
			subtitle: `At FitLife Gym, we're dedicated to helping you achieve your health and wellness goals. Our state-of-the-art facilities and expert trainers provide everything you need to succeed.`,
			cta: 'Get Started Today!',
			cta_statement: 'Sign up for a free trial and experience the FitLife difference.'
		}
	};
}
