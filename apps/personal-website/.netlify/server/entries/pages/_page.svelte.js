import { c as create_ssr_component, b as each, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/tweenMe.js";
import { B as BlogCard } from "../../chunks/BlogCard.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex flex-col-reverse font-[Ubuntu] w-full py-16 lg:pt-0 lg:flex-col lg:pb-0" data-svelte-h="svelte-17me0ch"><div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"><svg class="absolute left-0 hidden h-full text-gray-400 transform -translate-x-1/2 lg:block" viewBox="0 0 100 100" fill="currentColor" preserveAspectRatio="none slice"><path d="M50 0H100L50 100H0L50 0Z"></path></svg> <img class="object-cover w-full bg-myColor-100 rounded shadow-sm h-96 lg:rounded-none lg:shadow-none md:h-auto lg:h-full" src="/lat2-smaller.webp" alt=""></div> <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"><div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5"><p class="inline-block w-full py-px mb-4 text-xs font-[Play] font-semibold tracking-wider uppercase">who am i?</p> <h2 class="mb-5 font-[Maven] text-4xl font-extrabold first-letter:text-6xl first-letter:text-myColor-600 tracking-widest text-gray-900 sm:text-4xl sm:leading-none">Building intelligent sytems,<br class="hidden md:block"> <span class="inline-block text-deep-violet-accent-400">one line at a time.</span></h2> <div class="flex-row space-y-2 pr-5 mb-5 text-base text-gray-700 md:text-lg"><p>Hello! I&#39;m Ronald Otieno, a software developer specializing in web
          development, data visualization, and machine learning.</p> <p>With expertise in dynamic web applications and a focus on D3.js for
          captivating visualizations, I&#39;m excited to collaborate on impactful
          projects. Let&#39;s make a difference together!</p></div></div></div></div>`;
});
const Portofolio_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-yl6jh0{margin:0}.main.svelte-yl6jh0{overflow-x:hidden}.horizontal-sliders.svelte-yl6jh0{display:flex;flex-wrap:no-wrap;overflow-x:hidden}.slide.svelte-yl6jh0{height:80vh}.next-block.svelte-yl6jh0{height:100vh}",
  map: null
};
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
  $$result.css.add(css);
  return `<div class="main svelte-yl6jh0"><div class="horizontal-sliders w-[500%]  svelte-yl6jh0">${each(projects, (project) => {
    return ` <div class="slide w-full max-w-lg py-4 px-8 shadow-lg rounded-lg my-20 flex flex-col justify-center svelte-yl6jh0"><div class="w-full justify-center md:justify-end -mt-16 svelte-yl6jh0"><img class="w-5/6 h-auto object-cover rounded-md border-2 border-indigo-500 svelte-yl6jh0"${add_attribute("src", project.img, 0)}></div> <div class="svelte-yl6jh0"><h2 class="text-gray-800 text-3xl font-semibold svelte-yl6jh0" data-svelte-h="svelte-1g9rid0">Design Tools</h2> <p class="mt-2 text-gray-600 svelte-yl6jh0">${escape(project.name)}</p></div> <div class="flex justify-end mt-4 svelte-yl6jh0"><a href="#" class="text-xl font-medium text-indigo-500 svelte-yl6jh0">${escape(project.git)}</a></div> </div>`;
  })}</div> <div class="next-block bg-myColor-50 hidden svelte-yl6jh0" data-svelte-h="svelte-1l1bpiz">this is next block</div> </div>`;
});
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tools = [
    { name: "javascript", img: "js.svg" },
    { name: "python", img: "python.svg" },
    { name: "vue", img: "vue.svg" },
    { name: "linux", img: "ubuntu-4.svg" },
    { name: "d3", img: "d3.svg" },
    {
      name: "firebase",
      img: "firebase-logo.svg"
    },
    { name: "git", img: "git-black.svg" },
    { name: "nodejs", img: "nodejs2.png" }
  ];
  return `<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"><div class="grid gap-10 lg:grid-cols-2"><div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg" data-svelte-h="svelte-iyuqxj"><div class="max-w-xl mb-6"><div><p class="inline-block font-[Play] w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase rounded-full">tools</p></div> <h2 class="max-w-lg font-[Play] mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">A programmer is<br class="hidden md:block">
          as good as the
          <span class="inline-block text-myColor-500">tools</span> he uses</h2> <p class="text-base text-gray-700 md:text-lg">To be efficient and productive in what I do, I have carefully picked
          the tools that will help me accomplish my tasks fast.</p></div></div> <div class="p-5 sm:p-8"><div class="columns-3 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 justify-items-center place-items-center">${each(tools, (tool) => {
    return `<img class="drop-shadow-md max-w-[100px] h-auto"${add_attribute("src", tool.img, 0)}${add_attribute("alt", tool.name, 0)}>`;
  })}</div></div></div></div>`;
});
const DailyStoic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  return `<div class="bg-gray-900 my-7 md:mt-20 max-w-2xl space-y-2 border border-myColor-600 mx-auto p-2 rounded-md"><p class="text-myColor-400 font-[Play]" data-svelte-h="svelte-1enrva">Daily Stoic</p> <img class="h-20 w-auto rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV854JIL0_j2RTDqxwS1E_RHToQQYProgsw&usqp=CAU" alt="Marcus Aurelius"> <p class="italic font-[Maven] text-myColo-100">${escape(quote.text)}</p> <p class="text-myColo-50 text-xs">${escape(quote.author)}</p></div>`;
});
const FeaturedPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let latestPosts = [];
  console.log(latestPosts);
  return `<section><p class="inline-block font-[Play] w-full px-3 pl-0 mb-4 text-lg font-semibold tracking-wider text-left text-myColor-500 uppercase rounded-full" data-svelte-h="svelte-zk5hyg">Latest Articles</p> <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mx-auto text-center">${each(latestPosts, (post) => {
    return `<li class="h-full rounded-none bg-gray-200"><a${add_attribute("href", `blog/${post.slug}`, 0)}>${validate_component(BlogCard, "BlogCard").$$render($$result, { post }, {}, {})}</a> </li>`;
  })}</ul> <a href="/blog" class="inline-block font-[Play] w-full mt-5 px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-center text-myColor-500 hover:text-myColor-400 transition duration-150 delay-75 uppercase rounded-full" data-svelte-h="svelte-17cfxdk">All Articles</a></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { quote } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-screen font-[Ubuntu] bg-myColor-50 px-2 lg:px-4">${validate_component(Home, "Home").$$render($$result, {}, {}, {})} ${quote ? `${validate_component(DailyStoic, "DailyStoic").$$render($$result, { quote }, {}, {})}` : ``} ${validate_component(Portofolio, "Portofolio").$$render($$result, {}, {}, {})} ${validate_component(Tools, "Tools").$$render($$result, {}, {}, {})} ${validate_component(FeaturedPosts, "FeaturedPosts").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
