

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.590dc76e.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/animate.es.09477587.js","_app/immutable/chunks/index.e49d0d70.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = ["_app/immutable/assets/11.5dbe98d7.css"];
export const fonts = [];
