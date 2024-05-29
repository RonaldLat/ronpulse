

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cart/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.69b98c88.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/functions.c2ef4aec.js","_app/immutable/chunks/products.0de01876.js","_app/immutable/chunks/paths.01a3d415.js"];
export const stylesheets = [];
export const fonts = [];
