

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/git/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ae45fc08.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js"];
export const stylesheets = [];
export const fonts = [];
