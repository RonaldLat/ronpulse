import { c as create_ssr_component, d as add_attribute, b as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/tweenMe.js";
import { B as BlogCard } from "../../chunks/BlogCard.js";
const Home_svelte_svelte_type_style_lang = "";
const css = {
  code: "#content.svelte-1gv6did{max-width:60em;margin-top:100vh}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let header, content, title1, title2, image;
  $$result.css.add(css);
  return `<div class="fixed z-10 py-8 px-3 top-0 left-0 w-screen h-[calc(100vh-29px)] grid grid-rows-2 place-items-center text-left bg-gray-800 bg-[url('/lat2-smaller.webp')] bg-blend-overlay bg-cover bg-center" id="sticky-parallax-header"${add_attribute("this", header, 0)}><p class="h-full w-full font-bold font[Play] text-5xl text-gray-50 flex items-start"${add_attribute("this", title1, 0)} data-svelte-h="svelte-1jzebkf">Ronald Otieno</p> <p class="text-white text-left uppercase text-6xl font-semibold font-[Ubuntu] px-1" data-svelte-h="svelte-1m5ck5y">i make <span class="underline underline-offset-8 leading-loose">ship</span>
    happen, <br>
    with code</p> <p class="self-end w-full h-full text-gray-300 pr-5 pb-4 italic flex text-center items-end justify-end"${add_attribute("this", title2, 0)} data-svelte-h="svelte-ctzi6x">Software Developer</p></div> <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"><div class="h-screen relative flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl svelte-1gv6did" id="content"${add_attribute("this", content, 0)}><h2 class="mb-5 font-[Maven] text-4xl font-extrabold first-letter:text-6xl first-letter:text-myColor-600 tracking-widest text-gray-900 sm:text-4xl sm:leading-none" data-svelte-h="svelte-5jm3g3">I build intelligent sytems,<br class="hidden md:block"> <span class="inline-block text-deep-violet-accent-400">one line at a time.</span></h2> <div class="flex flex-col gap-y-4 mb-5 text-base text-gray-700 md:text-lg" data-svelte-h="svelte-5kj86x"><p>Hello! I&#39;m Ronald Otieno, a software developer specializing in web
        development, data visualization, and machine learning.</p> <p>With expertise in dynamic web applications and a focus on D3.js for
        captivating visualizations, I&#39;m excited to collaborate on impactful
        projects. Let&#39;s make a difference together!</p></div> <p class="w-full hidden mb-14"><img class="-z-10 w-full h-[80vh]" src="js.svg" alt=""${add_attribute("this", image, 0)}></p></div> </div>`;
});
const Portofolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    }
  ];
  let sectionPin;
  let slidingContent;
  return `<div class="body mt-14 hidden"><div class="container"><section data-bgcolor="#bcb8ad" data-textcolor="#032f35" class="bg-myColor-800 h-[50vh] text-gray-900 hidden" data-svelte-h="svelte-wwlji4"><div><h1 data-scroll data-scroll-speed="1"><span>My</span> <span>Projectz</span></h1></div></section> <section id="sectionPin" class="min-h-screen bg-myColor-200 rounded-md"${add_attribute("this", sectionPin, 0)}><div class="pin-wrap flex gap-x-2 text-gray-800 "${add_attribute("this", slidingContent, 0)}><h2 class="text-7xl" data-svelte-h="svelte-o1j5y0">My Projects</h2> ${each(projects, (project) => {
    return `<div class="flex flex-col text-gray-700 border-2 border-gray-700 rounded-md py-8 h-auto "><img class="h-full w-auto py-6"${add_attribute("src", project.img, 0)}${add_attribute("alt", project.alt, 0)}> <span>${escape(project.name)}</span> </div>`;
  })}</div></section> <section data-bgcolor="#e3857a" data-textcolor="#f1dba7" class="hidden" data-svelte-h="svelte-1fekz6g"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></section></div></div>`;
});
const DailyStoic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote: quote2 } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote2 !== void 0)
    $$bindings.quote(quote2);
  return `<div class="bg-gray-900 my-7 md:mt-20 max-w-2xl space-y-2 border border-myColor-600 mx-auto p-2 rounded-md"><p class="text-myColor-400 font-[Play]" data-svelte-h="svelte-1enrva">Daily Stoic</p> <img class="h-20 w-auto rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV854JIL0_j2RTDqxwS1E_RHToQQYProgsw&usqp=CAU" alt="Marcus Aurelius"> <p class="italic font-[Maven] text-myColo-100">${escape(quote2.text)}</p> <p class="text-myColo-50 text-xs">${escape(quote2.author)}</p></div>`;
});
const FeaturedPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let latestPosts = [];
  console.log(latestPosts);
  return `<section><p class="inline-block font-[Play] w-full px-3 pl-0 mb-4 text-lg font-semibold tracking-wider text-left text-myColor-500 uppercase rounded-full" data-svelte-h="svelte-1iyucdy">Latest Articles</p> <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mx-auto text-center">${each(latestPosts, (post) => {
    return `<li class="h-full rounded-none bg-gray-200"><a${add_attribute("href", `blog/${post.slug}`, 0)}>${validate_component(BlogCard, "BlogCard").$$render($$result, { post }, {}, {})}</a> </li>`;
  })}</ul> <a href="/blog" class="inline-block font-[Play] w-full mt-5 px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-center text-myColor-500 hover:text-myColor-400 transition duration-150 delay-75 uppercase rounded-full" data-svelte-h="svelte-5w391g">All Articles</a></section>`;
});
const { quote } = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-screen w-full relative font-[Ubuntu] bg-myColor-50 px-2 lg:px-4">${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${quote ? `${validate_component(DailyStoic, "DailyStoic").$$render($$result, { quote }, {}, {})}` : ``} ${validate_component(Portofolio, "Portofolio").$$render($$result, {}, {}, {})} ${validate_component(FeaturedPosts, "FeaturedPosts").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
