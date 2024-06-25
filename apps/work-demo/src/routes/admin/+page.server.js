export async function load({ params }) {
	const { id } = params;

	return {
		id,
		demos
	};
}
const demos = [
	{ name: 'demo1', url: 'demo1', niche: 'generic' },
	{ name: 'demo2', url: 'demo2', niche: 'dashboard starter' },
	{ name: 'demo3', url: 'demo3', niche: 'port/construction' },
	{ name: 'demo4', url: 'demo4', niche: 'gym' },
	{ name: 'demo5', url: 'demo5', niche: 'generic' },
	{ name: 'demo6', url: 'demo6', niche: 'bakery' },
	{ name: 'demo7', url: 'demo7', niche: 'bakery' }
];
