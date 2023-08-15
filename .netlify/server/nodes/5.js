

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blogs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.648e0b6d.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js"];
export const stylesheets = ["_app/immutable/assets/5.461902bf.css"];
export const fonts = [];
