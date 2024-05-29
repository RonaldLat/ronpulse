import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.6465dc4d.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/functions.c2ef4aec.js","_app/immutable/chunks/paths.58a9b5d5.js","_app/immutable/chunks/authState.f9dd8d0a.js","_app/immutable/chunks/singletons.fb24a0d5.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.2b6865be.js","_app/immutable/chunks/products.72874be8.js"];
export const stylesheets = ["_app/immutable/assets/0.dc723cbb.css"];
export const fonts = [];