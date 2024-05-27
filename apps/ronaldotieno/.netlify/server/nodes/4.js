

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/git/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.47b9aaf6.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js"];
export const stylesheets = [];
export const fonts = [];
