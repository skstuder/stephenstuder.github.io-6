

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.2286fa7d.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js"];
export const stylesheets = ["_app/immutable/assets/2.708bab39.css"];
export const fonts = [];
