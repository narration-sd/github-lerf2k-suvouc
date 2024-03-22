import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from './astro_BhVei4sG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/narration-sd/github-lerf2k-suvouc/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$BadCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BadCard;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-ksnuhekv> <a${addAttribute(href, "href")} data-astro-cid-ksnuhekv> <h2 data-astro-cid-ksnuhekv> ${title} <span data-astro-cid-ksnuhekv>&rarr;</span> </h2> ${renderComponent($$result, "ShowLoadEnv", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-ksnuhekv": true, "client:component-path": "/home/narration-sd/github-lerf2k-suvouc/src/components/ShowLoadEnv.tsx", "client:component-export": "ShowLoadEnv" })} <p data-astro-cid-ksnuhekv> ${body} </p> </a> </li> `;
}, "/home/narration-sd/github-lerf2k-suvouc/src/components/BadCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$GoodCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoodCard;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-w42bhqlq> <a${addAttribute(href, "href")} data-astro-cid-w42bhqlq> <h2 data-astro-cid-w42bhqlq> ${title} <span data-astro-cid-w42bhqlq>&rarr;</span> </h2> ${renderComponent($$result, "ShowClientEnv", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-w42bhqlq": true, "client:component-path": "/home/narration-sd/github-lerf2k-suvouc/src/components/ShowClientEnv", "client:component-export": "ShowClientEnv" })} <p data-astro-cid-w42bhqlq> ${body} </p> </a> </li> `;
}, "/home/narration-sd/github-lerf2k-suvouc/src/components/GoodCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path> <defs data-astro-cid-j7pv25f6> <linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6> <stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop> <stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop> </linearGradient> </defs> </svg> <h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Astro</span></h1> <!--
		<p class="instructions">
			To get started this time, open the directory <code>src/pages</code> in your project.<br />
			<strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		--> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "BadCard", $$BadCard, { "href": "https://docs.astro.build/", "title": "Env Test loadEnv", "body": "Learn how Astro doesn't work", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "GoodCard", $$GoodCard, { "href": "https://docs.astro.build/", "title": "Env Test import.meta.env", "body": "Learn how Astro does work", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "/home/narration-sd/github-lerf2k-suvouc/src/pages/index.astro", void 0);
const $$file = "/home/narration-sd/github-lerf2k-suvouc/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
