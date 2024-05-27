

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.4be67058.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/index.9162b484.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = ["_app/immutable/assets/10.4f1e9ba5.css"];
export const fonts = [];
