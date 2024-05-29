

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.66420c40.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/stores.7826f6c6.js","_app/immutable/chunks/singletons.04ef73c4.js","_app/immutable/chunks/index.e49d0d70.js"];
export const stylesheets = [];
export const fonts = [];
