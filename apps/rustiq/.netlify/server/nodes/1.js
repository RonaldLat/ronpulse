

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.86907703.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/stores.2b6865be.js","_app/immutable/chunks/singletons.fb24a0d5.js","_app/immutable/chunks/paths.58a9b5d5.js"];
export const stylesheets = [];
export const fonts = [];
