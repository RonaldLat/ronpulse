import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.b9b547e2.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/functions.c2ef4aec.js","_app/immutable/chunks/paths.01a3d415.js","_app/immutable/chunks/authState.1cdf1729.js","_app/immutable/chunks/singletons.d7c88a27.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/stores.b7086389.js","_app/immutable/chunks/products.0de01876.js"];
export const stylesheets = ["_app/immutable/assets/0.dc723cbb.css"];
export const fonts = [];
