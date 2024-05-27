

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.ae560026.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/each.af864823.js","_app/immutable/chunks/animate.es.09477587.js"];
export const stylesheets = ["_app/immutable/assets/8.d4abe4aa.css"];
export const fonts = [];
