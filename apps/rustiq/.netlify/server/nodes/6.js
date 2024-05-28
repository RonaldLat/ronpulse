import * as universal from '../entries/pages/_categoryName_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_categoryName_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[categoryName]/+page.js";
export const imports = ["_app/immutable/nodes/6.b4f6f45d.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.2b6865be.js","_app/immutable/chunks/singletons.fb24a0d5.js","_app/immutable/chunks/paths.58a9b5d5.js","_app/immutable/chunks/products.72874be8.js"];
export const stylesheets = [];
export const fonts = [];
