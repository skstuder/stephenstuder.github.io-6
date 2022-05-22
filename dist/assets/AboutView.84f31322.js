import{_ as Cn,a as Tn}from"./tips-for-learning-a-large-new-codebase-quickly.925c4af1.js";import{d as bn,i as k,r as O,a as i,w as xn,c as q,h as x,o as zn,n as An,b as En,e as jn,p as T,_ as Mn,f as Bn,g as U,j as $,k as mn,l as E,m as hn,q as X,s as gn,F as In,t as On,u as Ln}from"./index.ffc75f35.js";var Rn=`@import url("https://fonts.googleapis.com/css?family=Work+Sans:400|Space+Mono:400");\r
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap");\r
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");\r
:root {\r
  /* Define colors as colors */\r
  --green: #00ebc7;\r
  --red: #ff5470;\r
  --yellow: #fde24f;\r
  --black: #1b2d45;\r
  --darkBlue: #00214d;\r
  --grey: #bfbfbf;\r
  --lightGrey: #f2f4f6;\r
  --darkGrey: #222;\r
  --white: #fff;\r
  --offWhite: #f4f0ec;\r
  --darkPurp: #25253f;\r
  /* Define the colors intentions */\r
  --primary: var(--green);\r
  --danger: var(--red);\r
  --background: var(--lightGrey);\r
  --textColor: var(--black);\r
  --buttonTextColor: var(--white);\r
  --lineColor: var(--grey);\r
  --cardBg: var(--white);\r
  --headerBackground: var(--darkPurp);\r
  --footerBackground: var(--black);\r
  --buttonColor: var(--primary);\r
\r
  /* Styles */\r
  --line: solid 4px var(--lineColor);\r
\r
  /* Type */\r
  --headingFont: "Source Sans Pro", monospace;\r
  --bodyFont: "Work Sans", sans-serif;\r
  --baseFontSize: 100%;\r
  --h1: 4rem;\r
  --h2: 3.441rem;\r
  --h3: 1.953rem;\r
  --h4: 1.563rem;\r
  --h5: 1.25rem;\r
  --smallText: 0.8rem;\r
\r
  /* Elevation */\r
  --level-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r
  --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\r
    0 2px 4px -1px rgba(0, 0, 0, 0.06);\r
  --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  --level-4: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
\r
  /* Positioning */\r
  --containerPadding: 2.5%;\r
  --headerHeight: 3rem;\r
  --border-radius: 10px;\r
  --headerPadding: 2.5%;\r
}\r
/* From Typescale */\r
html {\r
  font-size: var(--baseFontSize);\r
  background: var(--lightGrey);\r
  box-sizing: border-box;\r
}\r
*,\r
*::before,\r
*::after {\r
  box-sizing: inherit;\r
}\r
body {\r
  font-family: var(--bodyFont);\r
  background: var(--background);\r
  color: var(--textColor);\r
  font-weight: 400;\r
  line-height: 1.75;\r
}\r
header {\r
  color: white;\r
  position: fixed;\r
  left: 0;\r
  top: 0;\r
  width: 100%;\r
  height: var(--headerHeight);\r
  background: var(--headerBackground);\r
  box-shadow: var(--level-2);\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  padding: 0 var(--headerPadding);\r
}\r
header a {\r
  color: var(--white);\r
  text-decoration: none;\r
}\r
a {\r
  color: var(--white);\r
  text-decoration: none;\r
}\r
header nav a + a {\r
  margin-left: 10px;\r
}\r
footer {\r
  --footerTextColor: var(--lightGrey);\r
  color: var(--footerTextColor);\r
  background: var(--footerBackground);\r
  padding: 2rem var(--containerPadding);\r
  text-align: center;\r
}\r
footer a {\r
  color: var(--footerTextColor);\r
}\r
footer p {\r
  margin-bottom: 0;\r
  max-width: none;\r
}\r
p {\r
  margin-bottom: 1rem;\r
}\r
p a,\r
blockquote a,\r
ul li a {\r
  color: var(--textColor);\r
  text-decoration: none;\r
  border-bottom: solid 2px var(--primary);\r
  cursor: pointer;\r
}\r
h1,\r
h2,\r
h3,\r
h4,\r
h5 {\r
  margin: 3rem 0 1.38rem;\r
  font-family: var(--headingFont);\r
  font-weight: 400;\r
  line-height: 1.3;\r
}\r
h1 {\r
  margin-top: 0;\r
  font-size: var(--h1);\r
}\r
h2 {\r
  font-size: var(--h2);\r
}\r
h3 {\r
  font-size: var(--h3);\r
}\r
h4 {\r
  font-size: var(--h4);\r
}\r
h5 {\r
  font-size: var(--h5);\r
}\r
small,\r
.text_small {\r
  font-size: var(--smallText);\r
}\r
/* End Typescale */\r
img {\r
  height: 250px;\r
\r
  overflow: hidden;\r
}\r
blockquote {\r
  margin: 10px;\r
  padding: 2em;\r
  background: var(--cardBg);\r
  box-shadow: var(--level-3);\r
}\r
label {\r
  display: block;\r
  font-size: var(--smallText);\r
}\r
input,\r
textarea {\r
  padding: 4px 5px;\r
  border: var(--line);\r
  border-radius: 4px;\r
}\r
textarea {\r
  width: 100%;\r
  height: 5rem;\r
}\r
::placeholder {\r
  color: var(--grey);\r
}\r
hr {\r
  border-top: var(--line);\r
  border-left: none;\r
  border-right: none;\r
}\r
button,\r
.tag {\r
  --buttonColor: var(--primary);\r
  appearance: none;\r
  color: var(--buttonTextColor);\r
  background: var(--buttonColor);\r
  border: none;\r
  border-radius: 10px;\r
  padding: 5px 15px;\r
  box-shadow: var(--level-1);\r
  transition: 0.3s ease-in-out box-shadow;\r
}\r
button:hover {\r
  box-shadow: var(--level-2);\r
}\r
button[disabled] {\r
  opacity: 0.4;\r
}\r
button.cancel {\r
  --buttonColor: var(--danger);\r
  --textColor: var(--white);\r
}\r
button.small {\r
  font-size: var(--smallText);\r
}\r
.layout {\r
  padding: calc(3rem + var(--headerHeight)) var(--containerPadding);\r
}\r
.grid {\r
  --gridCols: 2;\r
  display: block;\r
  grid-template-columns: repeat(var(--gridCols), 1fr);\r
}\r
.cols-3 {\r
  --gridCols: 3;\r
}\r
.flex {\r
  --justifyContent: space-between;\r
  display: flex;\r
  justify-content: var(--justifyContent);\r
}\r
.flex-around {\r
  --justifyContent: space-around;\r
}\r
.flex-justify-center {\r
  --justifyContent: center;\r
}\r
.flex-align-center {\r
  align-items: center;\r
}\r
.flex-col {\r
  flex-direction: column;\r
}\r
.split {\r
  display: block;\r
  grid-template-columns: 33% 67%;\r
  grid-gap: 20px;\r
}\r
@media only screen and (min-width: 500px) {\r
  :root {\r
    --baseFontSize: 112.5%;\r
    --containerPadding: 15%;\r
    --headerPadding: 5%;\r
  }\r
  .grid {\r
    display: grid;\r
  }\r
  .flex {\r
    display: flex;\r
  }\r
  .split {\r
    display: grid;\r
  }\r
  .circle {\r
    width: 1000px;\r
  }\r
}\r
.fake-logo {\r
  margin: 0;\r
  font-size: var(--baseFontSize);\r
}\r
.card {\r
  padding: 2em;\r
  background: var(--cardBg);\r
  box-shadow: var(--level-3);\r
  border-radius: var(--border-radius);\r
}\r
/* First item will never have margin top */\r
.card > *:first-child {\r
  margin-top: 0;\r
}\r
/* Last item will never have margin bottom */\r
.card > *:last-child {\r
  margin-top: 0;\r
}\r
.dark {\r
  --background: var(--black);\r
  --textColor: var(--lightGrey);\r
  --blockQuote: var(--darkBlue);\r
  --headerBackground: var(--darkGrey);\r
  --cardBg: var(--darkGrey);\r
  --buttonTextColor: var(--black);\r
  --footerBackground: var(--darkGrey);\r
}\r
.oled {\r
  --black: #000;\r
}\r
pre {\r
  background: black;\r
  color: white;\r
  display: block;\r
  unicode-bidi: embed;\r
  font-family: monospace;\r
  white-space: pre;\r
  border-radius: 10px;\r
  padding: 5px 10px;\r
}\r
.theme {\r
  /* Define colors as colors */\r
  --green: #4fc4cf;\r
  --red: #ff5470;\r
  --yellow: #fbdd74;\r
  --black: #181818;\r
  --darkBlue: #994ff3;\r
  --grey: #bfbfbf;\r
  --lightGrey: #f2f4f6;\r
  --darkGrey: #222;\r
  --white: #fff;\r
  /* Define the colors intentions */\r
  --primary: var(--green);\r
  --danger: var(--red);\r
  --background: var(--yellow);\r
  --textColor: var(--black);\r
  --buttonTextColor: var(--white);\r
  --lineColor: var(--grey);\r
  --cardBg: var(--white);\r
  --headerBackground: var(--black);\r
  --footerBackground: var(--black);\r
\r
  /* Styles */\r
  --line: dashed 5px var(--yellow);\r
\r
  /* Type */\r
  --headingFont: "Galada", cursive;\r
  --bodyFont: "Work Sans", sans-serif;\r
  --baseFontSize: 100%;\r
  --h1: 3.052rem;\r
  --h2: 2.441rem;\r
  --h3: 1.953rem;\r
  --h4: 1.563rem;\r
  --h5: 1.25rem;\r
  --smallText: 0.8rem;\r
\r
  /* Elevation */\r
  --level-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r
  --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\r
    0 2px 4px -1px rgba(0, 0, 0, 0.06);\r
  --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
  --level-4: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\r
    0 4px 6px -2px rgba(0, 0, 0, 0.05);\r
\r
  /* Positioning */\r
  --containerPadding: 2.5%;\r
  --headerHeight: 4rem;\r
  --border-radius: 25px;\r
}\r
`,Fn=`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
     ========================================================================== */

/**
   * Remove the margin in all browsers.
   */

body {
  margin: 0;
}

/**
   * Render the \`main\` element consistently in IE.
   */

main {
  display: block;
}

/**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
     ========================================================================== */

/**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
     ========================================================================== */

/**
   * Remove the gray background on active links in IE 10.
   */

a {
  background-color: transparent;
}

/**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

b,
strong {
  font-weight: bolder;
}

/**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
   * Add the correct font size in all browsers.
   */

small {
  font-size: 80%;
}

/**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
     ========================================================================== */

/**
   * Remove the border on images inside links in IE 10.
   */

img {
  border-style: none;
}

/* Forms
     ========================================================================== */

/**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
   * Correct the inability to style clickable types in iOS and Safari.
   */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
   * Remove the inner border and padding in Firefox.
   */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
   * Restore the focus styles unset by the previous rule.
   */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
   * Correct the padding in Firefox.
   */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

progress {
  vertical-align: baseline;
}

/**
   * Remove the default vertical scrollbar in IE 10+.
   */

textarea {
  overflow: auto;
}

/**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
     ========================================================================== */

/*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

details {
  display: block;
}

/*
   * Add the correct display in all browsers.
   */

summary {
  display: list-item;
}

/* Misc
     ========================================================================== */

/**
   * Add the correct display in IE 10+.
   */

template {
  display: none;
}

/**
   * Add the correct display in IE 10.
   */

[hidden] {
  display: none;
}
`,Dn="/assets/family.d820e0d7.jpg",Pn="/assets/moto.a220d521.jpg",Nn="/assets/mtb.d53c9d02.jpg",Gn="/assets/surfing.e0e2f6d9.jpeg",Vn="/assets/wife.158976b0.jpg";/**
 * Vue 3 Carousel 0.1.40
 * (c) 2022
 * @license MIT
 */const m={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function Wn(e,o){let t;return function(...a){t&&clearTimeout(t),t=setTimeout(()=>{e(...a),t=null},o)}}function Hn(e,o){let t;return function(...a){const d=this;t||(e.apply(d,a),t=!0,setTimeout(()=>t=!1,o))}}function Un(e){var o,t,a;return e?((t=(o=e[0])===null||o===void 0?void 0:o.type)===null||t===void 0?void 0:t.name)==="CarouselSlide"?e:((a=e[0])===null||a===void 0?void 0:a.children)||[]:[]}function $n(e,o){if(e.wrapAround)return o-1;switch(e.snapAlign){case"start":return o-e.itemsToShow;case"end":return o-1;case"center":case"center-odd":return o-Math.ceil(e.itemsToShow/2);case"center-even":return o-Math.ceil(e.itemsToShow/2);default:return 0}}function Xn(e){if(e.wrapAround)return 0;switch(e.snapAlign){case"start":return 0;case"end":return e.itemsToShow-1;case"center":case"center-odd":return Math.floor((e.itemsToShow-1)/2);case"center-even":return Math.floor((e.itemsToShow-2)/2);default:return 0}}function vn(e,o,t,a){return e.wrapAround?o:Math.min(Math.max(o,a),t)}function qn({slidesBuffer:e,currentSlide:o,snapAlign:t,itemsToShow:a,wrapAround:d,slidesCount:c}){let l=e.indexOf(o);if(l===-1&&(l=e.indexOf(Math.ceil(o))),t==="center"||t==="center-odd"?l-=(a-1)/2:t==="center-even"?l-=(a-2)/2:t==="end"&&(l-=a-1),!d){const h=c-a,g=0;l=Math.max(Math.min(l,h),g)}return l}var Yn=bn({name:"Carousel",props:{itemsToShow:{default:m.itemsToShow,type:Number},itemsToScroll:{default:m.itemsToScroll,type:Number},wrapAround:{default:m.wrapAround,type:Boolean},snapAlign:{default:m.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:m.transition,type:Number},breakpoints:{default:m.breakpoints,type:Object},autoplay:{default:m.autoplay,type:Number},pauseAutoplayOnHover:{default:m.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:m.mouseDrag,type:Boolean},touchDrag:{default:m.touchDrag,type:Boolean},dir:{default:m.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}},setup(e,{slots:o,emit:t,expose:a}){var d;const c=i(null),l=i([]),h=i([]),g=i(0),s=i(1),_=i(null),z=i(null);let S=i({}),v=Object.assign({},m);const r=O(Object.assign({},v)),p=i((d=r.modelValue)!==null&&d!==void 0?d:0),yn=i(0),J=i(0),j=i(0),M=i(0);T("config",r),T("slidesBuffer",h),T("slidesCount",s),T("currentSlide",p),T("maxSlide",j),T("minSlide",M);function Q(){const n=Object.assign(Object.assign({},e),e.settings);S=i(Object.assign({},n.breakpoints)),v=Object.assign(Object.assign({},n),{settings:void 0,breakpoints:void 0}),K(v)}function L(){const n=Object.keys(S.value).map(f=>Number(f)).sort((f,b)=>+b-+f);let u=Object.assign({},v);n.some(f=>window.matchMedia(`(min-width: ${f}px)`).matches?(u=Object.assign(Object.assign({},u),S.value[f]),!0):!1),K(u)}function K(n){for(let u in n)r[u]=n[u]}const wn=Wn(()=>{S.value&&(L(),B()),R()},16);function R(){if(!c.value)return;const n=c.value.getBoundingClientRect();g.value=n.width/r.itemsToShow}function B(){s.value=Math.max(l.value.length,1),!(s.value<=0)&&(J.value=Math.ceil((s.value-1)/2),j.value=$n(r,s.value),M.value=Xn(r),p.value=vn(r,p.value,j.value,M.value))}function F(){const n=[...Array(s.value).keys()];if(r.wrapAround&&r.itemsToShow+1<=s.value){let b=(r.itemsToShow!==1?Math.round((s.value-r.itemsToShow)/2):0)-p.value;if(r.snapAlign==="end"?b+=Math.floor(r.itemsToShow-1):(r.snapAlign==="center"||r.snapAlign==="center-odd")&&b++,b<0)for(let w=b;w<0;w++)n.push(Number(n.shift()));else for(let w=0;w<b;w++)n.unshift(Number(n.pop()))}h.value=n}zn(()=>{S.value&&(L(),B()),An(()=>setTimeout(R,16)),r.autoplay&&r.autoplay>0&&tn(),window.addEventListener("resize",wn,{passive:!0})}),En(()=>{z.value&&clearTimeout(z.value),on(!1)});let y=!1;const D={x:0,y:0},P={x:0,y:0},A=O({x:0,y:0}),Z=i(!1),N=i(!1),Sn=()=>{N.value=!0},kn=()=>{N.value=!1};function nn(n){y=n.type==="touchstart",!(!y&&n.button!==0||I.value)&&(Z.value=!0,D.x=y?n.touches[0].clientX:n.clientX,D.y=y?n.touches[0].clientY:n.clientY,document.addEventListener(y?"touchmove":"mousemove",en,!0),document.addEventListener(y?"touchend":"mouseup",rn,!0))}const en=Hn(n=>{P.x=y?n.touches[0].clientX:n.clientX,P.y=y?n.touches[0].clientY:n.clientY;const u=P.x-D.x,f=P.y-D.y;A.y=f,A.x=u},16);function rn(){Z.value=!1;const n=r.dir==="rtl"?-1:1,u=Math.sign(A.x)*.4,f=Math.round(A.x/g.value+u)*n;let b=vn(r,p.value-f,j.value,M.value);if(f){const w=H=>{H.stopPropagation(),window.removeEventListener("click",w,!0)};window.addEventListener("click",w,!0)}C(b),A.x=0,A.y=0,document.removeEventListener(y?"touchmove":"mousemove",en,!0),document.removeEventListener(y?"touchend":"mouseup",rn,!0)}function tn(){_.value=setInterval(()=>{r.pauseAutoplayOnHover&&N.value||G()},r.autoplay)}function on(n=!0){!_.value||(clearInterval(_.value),n&&tn())}const I=i(!1);function C(n,u=!1){if(on(),p.value===n||I.value)return;const f=s.value-1;if(n>f)return C(n-s.value);if(n<0)return C(n+s.value);I.value=!0,yn.value=p.value,p.value=n,u||t("update:modelValue",p.value),z.value=setTimeout(()=>{r.wrapAround&&F(),I.value=!1},r.transition)}function G(){let n=p.value+r.itemsToScroll;r.wrapAround||(n=Math.min(n,j.value)),C(n)}function an(){let n=p.value-r.itemsToScroll;r.wrapAround||(n=Math.max(n,M.value)),C(n)}const sn={slideTo:C,next:G,prev:an};T("nav",sn);const ln=q(()=>qn({slidesBuffer:h.value,itemsToShow:r.itemsToShow,snapAlign:r.snapAlign,wrapAround:Boolean(r.wrapAround),currentSlide:p.value,slidesCount:s.value}));T("slidesToScroll",ln);const _n=q(()=>{const n=r.dir==="rtl"?-1:1,u=ln.value*g.value*n;return{transform:`translateX(${A.x-u}px)`,transition:`${I.value?r.transition:0}ms`}});function dn(){Q()}function cn(){Q(),L(),B(),F(),R()}function un(){B(),F()}xn(()=>Object.values(e),cn),dn(),jn(()=>{const n=s.value!==l.value.length;e.modelValue!==void 0&&p.value!==e.modelValue&&C(Number(e.modelValue),!0),n&&un()});const fn={config:r,slidesBuffer:h,slidesCount:s,slideWidth:g,currentSlide:p,maxSlide:j,minSlide:M,middleSlide:J};a({updateBreakpointsConfigs:L,updateSlidesData:B,updateSlideWidth:R,updateSlidesBuffer:F,initCarousel:dn,restartCarousel:cn,updateCarousel:un,slideTo:C,next:G,prev:an,nav:sn,data:fn});const V=o.default||o.slides,W=o.addons,pn=O(fn);return()=>{const n=Un(V==null?void 0:V(pn)),u=(W==null?void 0:W(pn))||[];l.value=n,n.forEach((w,H)=>w.props.index=H);const f=x("ol",{class:"carousel__track",style:_n.value,onMousedown:r.mouseDrag?nn:null,onTouchstart:r.touchDrag?nn:null},n),b=x("div",{class:"carousel__viewport"},f);return x("section",{ref:c,class:{carousel:!0,"carousel--rtl":r.dir==="rtl"},dir:r.dir,"aria-label":"Gallery",onMouseenter:Sn,onMouseleave:kn},[b,u])}}});const Jn={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},Y=e=>{const o=e.name;if(!o||typeof o!="string")return;const t=Jn[o],a=x("path",{d:t}),d=e.title||o,c=x("title",null,o);return x("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:d},[c,a])};Y.props={name:String,title:String};const Qn=(e,{slots:o,attrs:t})=>{const{next:a,prev:d}=o,c=k("config",O(Object.assign({},m))),l=k("maxSlide",i(1)),h=k("minSlide",i(1)),g=k("currentSlide",i(1)),s=k("nav",{}),_=c.dir==="rtl",z=x("button",{type:"button",class:["carousel__prev",!c.wrapAround&&g.value<=h.value&&"carousel__prev--in-active",t==null?void 0:t.class],"aria-label":"Navigate to previous slide",onClick:s.prev},(d==null?void 0:d())||x(Y,{name:_?"arrowRight":"arrowLeft"})),S=x("button",{type:"button",class:["carousel__next",!c.wrapAround&&g.value>=l.value&&"carousel__next--in-active",t==null?void 0:t.class],"aria-label":"Navigate to next slide",onClick:s.next},(a==null?void 0:a())||x(Y,{name:_?"arrowLeft":"arrowRight"}));return[z,S]};var Kn=bn({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(e,{slots:o}){const t=k("config",O(Object.assign({},m))),a=k("slidesBuffer",i([])),d=k("currentSlide",i(0)),c=k("slidesToScroll",i(0)),l=i(e.index);t.wrapAround&&(h(),xn(a,h));function h(){l.value=a.value.indexOf(e.index)}const g=q(()=>{const v=t.itemsToShow;return{width:`${1/v*100}%`,order:l.value.toString()}}),s=()=>e.index===d.value,_=()=>{const v=Math.ceil(c.value),r=Math.floor(c.value+t.itemsToShow);return a.value.slice(v,r).includes(e.index)},z=()=>e.index===a.value[Math.ceil(c.value)-1],S=()=>e.index===a.value[Math.floor(c.value+t.itemsToShow)];return()=>{var v;return x("li",{style:g.value,class:{carousel__slide:!0,"carousel__slide--active":s(),"carousel__slide--visible":_(),"carousel__slide--prev":z(),"carousel__slide--next":S()}},(v=o.default)===null||v===void 0?void 0:v.call(o))}}});const Zn=[{alt:"family photo",path:"../assets/images/family.jpg"},{alt:"wedding photo",path:"../assets/images/wife.jpg"},{alt:"friends mountain biking",path:"../assets/images/mtb.jpg"},{alt:"friends surfing",path:"../assets/images/surfing.jpeg"},{alt:"father and son riding dirtbikes",path:"../assets/images/moto.jpg"}],ne={name:"App",components:{Carousel:Yn,Slide:Kn,Navigation:Qn},data(){return{images:Zn,display:3.5}},methods:{getImageUrl(e){return new URL({"../assets/base.css":Rn,"../assets/normalize.css":Fn,"../assets/blogs/tips-for-learning-a-large-new-codebase-quickly.md":Cn,"../assets/images/family.jpg":Dn,"../assets/images/files.jpg":Tn,"../assets/images/moto.jpg":Pn,"../assets/images/mtb.jpg":Nn,"../assets/images/stephen.png":Bn,"../assets/images/surfing.jpeg":Gn,"../assets/images/wife.jpg":Vn}[`../assets/${e}`],self.location).href},onResize(){window.innerWidth>2e3?this.display=3.5:window.innerWidth>1200?this.display=2.5:window.innerWidth>900?this.display=2:this.display=1}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},beforeUnmount(){window.removeEventListener("resize",this.onResize)}},ee=E("h2",null,"About me",-1),re=E("p",null,[gn(" I have been working on front end teams since 2019, my interest lies in the "),E("a",{href:"https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/#:~:text=Back%2Dof%2Dthe%2Dfront%2Dend%20developers,-A%20definition%3A%20A&text=Writing%20application%20business%20logic%20to,the%20application%20to%20function%20properly."},'"back of the frontend"'),gn(" and with various JavaScript frameworks. My favorites currently are Vue.js, Svelte, and Node for building backend utilities, but I am always exploring for tools that are the best fit for each situation. Each unique problem is an opportunity to learn something new and I am always excited for the next challenge. ")],-1),te=E("p",null," When I am not working I spend time with my wife and daughter. I enjoy cooking, mountain biking, going to the gym, and am an avid fan of motocross racing. ",-1),oe=E("br",null,null,-1),ae=["src","alt"];function ie(e,o,t,a,d,c){const l=U("slide"),h=U("navigation"),g=U("carousel");return $(),mn("main",null,[E("div",null,[ee,re,te,oe,hn(g,{"items-to-show":d.display},{addons:X(()=>[hn(h)]),default:X(()=>[($(!0),mn(In,null,On(d.images,s=>($(),Ln(l,{key:s},{default:X(()=>[E("img",{src:c.getImageUrl(s.path),alt:s.alt},null,8,ae)]),_:2},1024))),128))]),_:1},8,["items-to-show"])])])}var de=Mn(ne,[["render",ie]]);export{de as default};
