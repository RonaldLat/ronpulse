import { _ as __vite_glob_0_0 } from "../../../../chunks/Query Parameters_ Pagination_ and SvelteKit Endpoints.js";
import { _ as __vite_glob_0_1 } from "../../../../chunks/concatenation of array.js";
import { _ as __vite_glob_0_2 } from "../../../../chunks/dark-mode.js";
import { _ as __vite_glob_0_3 } from "../../../../chunks/demystifying-binary--search.js";
import { _ as __vite_glob_0_4 } from "../../../../chunks/git bisect explained.js";
import { _ as __vite_glob_0_5 } from "../../../../chunks/hello-world.js";
import { _ as __vite_glob_0_6 } from "../../../../chunks/post1.js";
import { _ as __vite_glob_0_7 } from "../../../../chunks/python tricks for writing better code.js";
import { _ as __vite_glob_0_8 } from "../../../../chunks/template.js";
import { _ as __vite_glob_0_9 } from "../../../../chunks/understanding-sorting-algorithms-quick-sort.js";
import { _ as __vite_glob_0_10 } from "../../../../chunks/using js libraries with svelte.js";
import { j as json } from "../../../../chunks/index.js";
async function getPosts(limit = 10) {
  let posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/posts/Query Parameters, Pagination, and SvelteKit Endpoints.md": __vite_glob_0_0, "/src/posts/concatenation of array.md": __vite_glob_0_1, "/src/posts/dark-mode.md": __vite_glob_0_2, "/src/posts/demystifying-binary--search.md": __vite_glob_0_3, "/src/posts/git bisect explained.md": __vite_glob_0_4, "/src/posts/hello-world.md": __vite_glob_0_5, "/src/posts/post1.md": __vite_glob_0_6, "/src/posts/python tricks for writing better code.md": __vite_glob_0_7, "/src/posts/template.md": __vite_glob_0_8, "/src/posts/understanding-sorting-algorithms-quick-sort.md": __vite_glob_0_9, "/src/posts/using js libraries with svelte.md": __vite_glob_0_10 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");
    const metadata = file.metadata;
    const post = { ...metadata, slug };
    post.published && posts.push(post);
  }
  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts.slice(0, limit);
}
async function GET({ url }) {
  const limit = url.searchParams.get("limit");
  const posts = await getPosts(limit);
  return json(posts);
}
export {
  GET
};
