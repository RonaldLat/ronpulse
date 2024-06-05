/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		/**type {Object}*/
		cakes: [
			{
				name: 'Chocolate Berry Cake',
				description: 'A delightful chocolate cake topped with fresh berries and a hint of mint.',
				price: 2500,
				// image: 'blackforest1-transp.png'
				image: 'output.png'
			},
			{
				name: 'Vanilla Dream Cake',
				description:
					'A classic vanilla cake with layers of creamy frosting and fresh strawberries.',
				price: 2200,
				image: 'blackforest1-transp.png'
			},
			{
				name: 'Red Velvet Cake',
				description:
					'A rich red velvet cake with a smooth cream cheese frosting and a touch of elegance.',
				price: 2800,
				image: 'blackforest1-transp.png'
			},
			{
				name: 'Lemon Poppy Seed Cake',
				description: 'A zesty lemon cake with crunchy poppy seeds and a tangy lemon glaze.',
				price: 2000,
				image: 'blackforest1-transp.png'
			},
			{
				name: 'Carrot Walnut Cake',
				description: 'A moist carrot cake with crunchy walnuts and a creamy cream cheese frosting.',
				price: 2400,
				image: 'blackforest1-transp.png'
			},
			{
				name: 'Black Forest Cake',
				description: 'blackforest1-transp.png',
				price: 2600,
				image: 'path_to_your_image.jpg'
			}
		]
	};
}
