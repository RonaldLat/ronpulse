export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts?limit=10`);
  const posts = await response.json();
  console.log('posts: ', posts);

  return {
    posts
  };
};
