

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.a7d289f7.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js"];
export const stylesheets = ["_app/immutable/assets/6.9c5492fa.css"];
export const fonts = [];
