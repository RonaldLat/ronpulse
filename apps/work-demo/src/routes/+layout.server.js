/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		/**type {Object}*/
		post: {
			title: `Title for ${params.id || "business name"} goes here`,
			content: `Content for ${params.id || "business name" } goes here`
		}
	};
}

