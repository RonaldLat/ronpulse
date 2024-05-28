import * as universal from '../entries/pages/account/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/account/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/account/+layout.js";
export const imports = ["_app/immutable/nodes/2.5ace34de.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/authState.f9dd8d0a.js","_app/immutable/chunks/singletons.fb24a0d5.js","_app/immutable/chunks/paths.58a9b5d5.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
