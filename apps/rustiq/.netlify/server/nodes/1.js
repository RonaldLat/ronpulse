

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a9888ac9.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/stores.b7086389.js","_app/immutable/chunks/singletons.d7c88a27.js","_app/immutable/chunks/paths.01a3d415.js"];
export const stylesheets = [];
export const fonts = [];
