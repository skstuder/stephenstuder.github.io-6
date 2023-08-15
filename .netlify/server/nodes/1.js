

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5770aeec.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js","_app/immutable/chunks/stores.022aac9b.js","_app/immutable/chunks/singletons.9ecf5322.js"];
export const stylesheets = [];
export const fonts = [];
