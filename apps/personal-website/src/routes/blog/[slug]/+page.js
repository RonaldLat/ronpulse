export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);

    console.log(post.default);
    console.log(post.metadata);

    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    console.log(e, `Could not find${params.slug}`);
  }
}
