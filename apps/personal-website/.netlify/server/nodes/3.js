

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.31ea9e26.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js"];
export const stylesheets = [];
export const fonts = [];
