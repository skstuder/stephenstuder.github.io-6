import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const normalize = "";
const base = "";
const Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hamburger-menu.svelte-30yco0.svelte-30yco0{justify-content:flex-end;display:flex}.drop-menu.svelte-30yco0.svelte-30yco0{height:fit-content;font-family:var(--headingFont);width:55vw;margin-top:var(--headerHeight);background:#53526d;position:fixed;z-index:1;border-radius:10px;right:0}.drop-menu-item.svelte-30yco0.svelte-30yco0{text-align:center;padding:10px;color:var(--offWhite)}#nav-icon3.svelte-30yco0.svelte-30yco0{width:30px;height:25px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.5s ease-in-out;-moz-transition:0.5s ease-in-out;-o-transition:0.5s ease-in-out;transition:0.5s ease-in-out;cursor:pointer}#nav-icon3.svelte-30yco0 span.svelte-30yco0{display:block;position:absolute;height:5px;width:100%;background:var(--offWhite);border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.25s ease-in-out;-moz-transition:0.25s ease-in-out;-o-transition:0.25s ease-in-out;transition:0.25s ease-in-out}#nav-icon3.svelte-30yco0 span.svelte-30yco0:nth-child(1){top:0px}#nav-icon3.svelte-30yco0 span.svelte-30yco0:nth-child(2),#nav-icon3.svelte-30yco0 span.svelte-30yco0:nth-child(3){top:10px}#nav-icon3.svelte-30yco0 span.svelte-30yco0:nth-child(4){top:20.5px}#nav-icon3.open.svelte-30yco0 span.svelte-30yco0:nth-child(1){top:18px;width:0%;left:50%}#nav-icon3.open.svelte-30yco0 span.svelte-30yco0:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}#nav-icon3.open.svelte-30yco0 span.svelte-30yco0:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}#nav-icon3.open.svelte-30yco0 span.svelte-30yco0:nth-child(4){top:18px;width:0%;left:50%}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDesktop = false;
  function onResize(innerWidth) {
    if (window.innerWidth > 600) {
      isDesktop = true;
    } else {
      isDesktop = false;
    }
  }
  $$result.css.add(css);
  onResize();
  return ` ${isDesktop ? `<header data-svelte-h="svelte-1r255k6"><a href="/">Stephen Studer</a> <nav><div><a href="/about">About</a> <a href="/projects">Projects</a> <a href="/blogs">Blog</a></div></nav></header>` : `<header class="hamburger-menu svelte-30yco0"><div id="nav-icon3" class="${["svelte-30yco0", ""].join(" ").trim()}" data-svelte-h="svelte-1xkxrmj"><span class="svelte-30yco0"></span> <span class="svelte-30yco0"></span> <span class="svelte-30yco0"></span> <span class="svelte-30yco0"></span></div></header>`} ${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <main class="layout"><div>${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
