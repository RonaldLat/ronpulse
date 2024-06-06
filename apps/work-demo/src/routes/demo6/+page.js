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
				image: 'blackforest1.1.png'
			},
			{
				name: 'Vanilla Dream Cake',
				description:
					'A classic vanilla cake with layers of creamy frosting and fresh strawberries.',
				price: 2200,
				image: 'pastries1.png'
			},
			{
				name: 'Red Velvet Cake',
				description:
					'A rich red velvet cake with a smooth cream cheese frosting and a touch of elegance.',
				price: 2800,
				image: 'carrrotcake2.png'
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
				image: 'carrrotcake1.png'
			},
			{
				name: 'Black Forest Cake',
				description: 'blackforest1-transp.png',
				price: 2600,
				image: 'path_to_your_image.jpg'
			}
		],

		cakes_slides: [
			{
				name: 'Chocolate Berry Cake',
				price: 2500,
				numbersSold: 150,
				ratings: 4.8,
				description: 'A delightful chocolate cake topped with fresh berries and a hint of mint.',
				availableSizes: ['Small', 'Medium', 'Large'],
				image: 'blackforest2.png'
			},
			{
				name: 'Vanilla Dream Cake',
				price: 2200,
				numbersSold: 200,
				ratings: 4.7,
				description:
					'A classic vanilla cake with layers of creamy frosting and fresh strawberries.',
				availableSizes: ['Small', 'Medium', 'Large'],
				image: 'images/carrrotcake1.png'
			},
			{
				name: 'Red Velvet Cake',
				price: 2800,
				numbersSold: 180,
				ratings: 4.9,
				description:
					'A rich red velvet cake with a smooth cream cheese frosting and a touch of elegance.',
				availableSizes: ['Small', 'Medium', 'Large'],
				image: 'images/carrrotcake2.png'
			},
			{
				name: 'Lemon Poppy Seed Cake',
				price: 2000,
				numbersSold: 130,
				ratings: 4.6,
				description: 'A zesty lemon cake with crunchy poppy seeds and a tangy lemon glaze.',
				availableSizes: ['Small', 'Medium'],
				image: 'chocolatecake2.png'
			},
			{
				name: 'Carrot Walnut Cake',
				price: 2400,
				numbersSold: 170,
				ratings: 4.7,
				description: 'A moist carrot cake with crunchy walnuts and a creamy cream cheese frosting.',
				availableSizes: ['Small', 'Medium', 'Large'],
				image: 'chocolatecake4.png'
			}
		]
	};
}
