import { c as create_ssr_component, d as add_attribute, b as each } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--text-color:#111;--bg-color:#b9b3a9}.body.svelte-1f5x8l5.svelte-1f5x8l5{font-family:termina, sans-serif;color:var(--text-color);background:var(--bg-color);transition:0.3s ease-out;overflow-x:clip;width:100%}section.svelte-1f5x8l5.svelte-1f5x8l5{min-height:100vh;width:100%;max-width:100vw;overflow-x:hidden;position:relative}section.svelte-1f5x8l5.svelte-1f5x8l5:not(#sectionPin){display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));grid-gap:2rem;padding:50px 10vw;margin:auto;place-items:center}img.svelte-1f5x8l5.svelte-1f5x8l5{width:auto;object-fit:cover}h1.svelte-1f5x8l5.svelte-1f5x8l5{font-size:clamp(1.5rem, 16vw + 0.5rem, 5rem);line-height:1;font-weight:800;margin-bottom:1rem;position:absolute;top:10vw;left:10vw;z-index:4;overflow-wrap:break-word;hyphens:auto}@media(max-width: 768px){h1.svelte-1f5x8l5.svelte-1f5x8l5{font-size:clamp(1.5rem, 5vw + 0.5rem, 5rem)}}h1.svelte-1f5x8l5 span.svelte-1f5x8l5{display:block}h2.svelte-1f5x8l5.svelte-1f5x8l5{font-size:2rem;max-width:400px}.svelte-1f5x8l5.svelte-1f5x8l5{box-sizing:border-box}#sectionPin.svelte-1f5x8l5.svelte-1f5x8l5{height:100vh;overflow:hidden;display:flex;left:0;background:var(--text-color);color:var(--bg-color)}.pin-wrap.svelte-1f5x8l5.svelte-1f5x8l5{height:100vh;justify-content:flex-start;align-items:center;padding:50px 10vw}.pin-wrap.svelte-1f5x8l5>.svelte-1f5x8l5{min-width:60vw;padding:0 5vw}p.svelte-1f5x8l5.svelte-1f5x8l5{position:absolute;bottom:10vw;right:10vw;width:200px;line-height:1.5}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = [
    {
      name: "Furniture Place Clone",
      url: "https://frosty-hopper-d52530.netlify.app/",
      img: "furniture-palace-clone-pc.webp",
      alt: "screenshot of Furniture Palace clone Website",
      git: "",
      description: ""
    },
    {
      name: "Ideal Sofas Website",
      url: "https://happy-liskov-d56336.netlify.app/",
      img: "ideal-sofas-pc.webp",
      alt: "screenshot of Ideal Sofas Website",
      git: "",
      description: ""
    },
    {
      name: "Dudi Resort website",
      url: "",
      img: "dr-portofolio.webp",
      alt: "screenshot of Dudi Resort Website",
      git: ""
    },
    {
      name: "Milly Cakes website",
      url: "",
      img: "mc-portofolio.webp",
      alt: "screenshot of Dudi Resort Website",
      git: "",
      description: ""
    }
  ];
  let sectionPin;
  let slidingContent;
  $$result.css.add(css);
  return `<div class="body svelte-1f5x8l5"><div class="container overflow-visible svelte-1f5x8l5"><section data-bgcolor="#bcb8ad" data-textcolor="#032f35" class="svelte-1f5x8l5" data-svelte-h="svelte-b4aoxu"><div class="svelte-1f5x8l5"><h1 data-scroll data-scroll-speed="1" class="svelte-1f5x8l5"><span class="svelte-1f5x8l5">My</span> <span class="svelte-1f5x8l5">Projects</span> <span class="svelte-1f5x8l5">section</span></h1> <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2" class="svelte-1f5x8l5">With Motion One</p></div></section> <section id="sectionPin" class="svelte-1f5x8l5"${add_attribute("this", sectionPin, 0)}><div class="pin-wrap flex svelte-1f5x8l5"${add_attribute("this", slidingContent, 0)}><h2 class="svelte-1f5x8l5" data-svelte-h="svelte-sodgck">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2> ${each(projects, (project) => {
    return `<img class="h-auto w-auto svelte-1f5x8l5"${add_attribute("src", project.img, 0)}${add_attribute("alt", project.alt, 0)}>`;
  })}</div></section> <section data-bgcolor="#e3857a" data-textcolor="#f1dba7" class="svelte-1f5x8l5" data-svelte-h="svelte-xcj3yg"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" class="svelte-1f5x8l5"></section></div> </div>`;
});
export {
  Page as default
};
