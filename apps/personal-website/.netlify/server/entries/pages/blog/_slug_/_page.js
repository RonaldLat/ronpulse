const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/Query Parameters, Pagination, and SvelteKit Endpoints.md": () => import("../../../../chunks/Query Parameters_ Pagination_ and SvelteKit Endpoints.js").then((n) => n._), "../../../posts/concatenation of array.md": () => import("../../../../chunks/concatenation of array.js").then((n) => n._), "../../../posts/dark-mode.md": () => import("../../../../chunks/dark-mode.js").then((n) => n._), "../../../posts/demystifying-binary--search.md": () => import("../../../../chunks/demystifying-binary--search.js").then((n) => n._), "../../../posts/git bisect explained.md": () => import("../../../../chunks/git bisect explained.js").then((n) => n._), "../../../posts/hello-world.md": () => import("../../../../chunks/hello-world.js").then((n) => n._), "../../../posts/post1.md": () => import("../../../../chunks/post1.js").then((n) => n._), "../../../posts/python tricks for writing better code.md": () => import("../../../../chunks/python tricks for writing better code.js").then((n) => n._), "../../../posts/template.md": () => import("../../../../chunks/template.js").then((n) => n._), "../../../posts/understanding-sorting-algorithms-quick-sort.md": () => import("../../../../chunks/understanding-sorting-algorithms-quick-sort.js").then((n) => n._), "../../../posts/using js libraries with svelte.md": () => import("../../../../chunks/using js libraries with svelte.js").then((n) => n._) }), `../../../posts/${params.slug}.md`);
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
export {
  load
};
