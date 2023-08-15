import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.91418f0f.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js","_app/immutable/chunks/stores.022aac9b.js","_app/immutable/chunks/singletons.9ecf5322.js"];
export const stylesheets = ["_app/immutable/assets/0.7c7b0897.css"];
export const fonts = [];
