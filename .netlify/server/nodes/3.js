

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e2d432ec.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js"];
export const stylesheets = [];
export const fonts = [];
