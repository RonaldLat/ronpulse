

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.db4b9535.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/stores.7e5a01ee.js","_app/immutable/chunks/singletons.ea5b92be.js","_app/immutable/chunks/paths.560ae5b7.js"];
export const stylesheets = [];
export const fonts = [];
