import * as universal from '../entries/pages/_categoryName_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_categoryName_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[categoryName]/+page.js";
export const imports = ["_app/immutable/nodes/6.fe410c74.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.b7086389.js","_app/immutable/chunks/singletons.d7c88a27.js","_app/immutable/chunks/paths.01a3d415.js","_app/immutable/chunks/products.0de01876.js"];
export const stylesheets = [];
export const fonts = [];
