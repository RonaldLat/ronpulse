

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.fd2cefde.js","_app/immutable/chunks/scheduler.bdb66109.js","_app/immutable/chunks/index.d57fb68a.js","_app/immutable/chunks/paths.58a9b5d5.js","_app/immutable/chunks/supabaseClient.c7aa5afe.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/products.72874be8.js"];
export const stylesheets = [];
export const fonts = [];
