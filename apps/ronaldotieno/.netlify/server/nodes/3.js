

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f421f49e.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js"];
export const stylesheets = [];
export const fonts = [];
