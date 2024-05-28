

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(auth)/signup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.b4ad4136.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/authState.f9dd8d0a.js","_app/immutable/chunks/singletons.fb24a0d5.js","_app/immutable/chunks/paths.58a9b5d5.js"];
export const stylesheets = [];
export const fonts = [];
