import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.e373a407.js","_app/immutable/chunks/4.a3c20ffd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.8bc7166e.js","_app/immutable/chunks/index.f4df78b7.js"];
export const stylesheets = [];
export const fonts = [];
