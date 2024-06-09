/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

  return {
    /**type {Object}*/
    post: {
      title2: `Title for ${params.id || 'business name'} goes here`,
      content2: `Content for ${params.id || 'business name'} goes here`,
    },
    };
}

