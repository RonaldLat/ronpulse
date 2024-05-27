import { c as create_ssr_component, d as add_attribute, l as get_store_value, f as compute_rest_props, h as spread, e as escape, i as escape_object, k as setContext, o as compute_slots, g as getContext, j as escape_attribute_value, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable, r as readable } from "../../../chunks/index2.js";
const ShrinkImg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [];
  let { index } = $$props;
  let { src } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `${slots.default ? slots.default({}) : ` <img class="-z-10 w-full h-[80vh]"${add_attribute("src", src, 0)} alt=""${add_attribute("this", images[index], 0)}> `}`;
});
const stores = {};
function localStorageStore(key, initialValue, options) {
  options?.serializer ?? JSON;
  options?.storage ?? "local";
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
let cBase$2 = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { fontSize = 150 } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase$2} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `<figure${spread(
    [
      {
        class: "avatar " + escape(classesBase, true)
      },
      { "data-testid": "avatar" },
      escape_object(prunedRestProps())
    ],
    {}
  )}>${src || fallback ? `<img class="${"avatar-image " + escape(cImage, true)}"${add_attribute("style", $$props.style ?? "", 0)}${add_attribute("src", src, 0)}${add_attribute("alt", $$props.alt || "", 0)}>` : `${initials ? `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", fontSize, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>` : `${slots.default ? slots.default({}) : ``}`}`}</figure>`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const cBase$1 = "space-y-4";
const cList = "flex overflow-x-auto hide-scrollbar";
const cPanel = "";
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesList;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let { justify = "justify-start" } = $$props;
  let { border = "border-b border-surface-400-500-token" } = $$props;
  let { active = "border-b-2 border-surface-900-50-token" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { flex = "flex-none" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { rounded = "rounded-tl-container-token rounded-tr-container-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { regionList = "" } = $$props;
  let { regionPanel = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { panel = "" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("flex", flex);
  setContext("padding", padding);
  setContext("rounded", rounded);
  setContext("spacing", spacing);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0)
    $$bindings.panel(panel);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${justify} ${border} ${regionList}`;
  classesPanel = `${cPanel} ${regionPanel}`;
  return `<div class="${"tab-group " + escape(classesBase, true)}" data-testid="tab-group"> <div class="${"tab-list " + escape(classesList, true)}" role="tablist"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>  ${$$slots.panel ? `<div class="${"tab-panel " + escape(classesPanel, true)}" role="tabpanel"${add_attribute("aria-labelledby", panel, 0)} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>` : ``}</div>`;
});
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let classesTab;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "controls",
    "regionTab",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { controls = "" } = $$props;
  let { regionTab = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
    $$bindings.regionTab(regionTab);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesTab = `${regionTab}`;
  return `<label${add_attribute("class", classesBase, 0)}${add_attribute("title", title, 0)}> <div class="${"tab " + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}> <div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>  <div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``} <div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabSet = 0;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h1 data-svelte-h="svelte-136d6se">Projects</h1> ${validate_component(Avatar, "Avatar").$$render($$result, { src: "lat2-smaller.webp" }, {}, {})} ${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
      panel: () => {
        return ` ${tabSet === 0 ? `<span data-svelte-h="svelte-1yi59d7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span>` : `${tabSet === 1 ? `<span data-svelte-h="svelte-1yi59d7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span>` : `${tabSet === 2 ? `(tab panel 3 contents)
      <span data-svelte-h="svelte-1yi59d7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eos
        dolor alias ipsam adipisci labore vel officia quam a? Veniam cumque, id
        commodi eum sequi perferendis necessitatibus. Nostrum, nemo dolorem.</span>` : ``}`}`} `;
      },
      default: () => {
        return `${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab1", value: 0, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            lead: () => {
              return `(icon)`;
            },
            default: () => {
              return `<span data-svelte-h="svelte-2kj67a">(label 1)</span>`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab2", value: 1, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `(label 2)`;
            }
          }
        )} ${validate_component(Tab, "Tab").$$render(
          $$result,
          { name: "tab3", value: 2, group: tabSet },
          {
            group: ($$value) => {
              tabSet = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `(label 3)`;
            }
          }
        )} `;
      }
    })} <p class="l" data-svelte-h="svelte-qlqg84">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro odit cum numquam a beatae dolorum, itaque nostrum reprehenderit vitae praesentium, iste ab aperiam ratione est doloribus fugit sequi et. Laboriosam saepe sequi repudiandae expedita eveniet. Enim quos quae magnam, nam ea et officia facere dignissimos cupiditate asperiores, eum itaque corrupti nulla accusamus totam blanditiis eos ad. Unde, dolore voluptatem ipsum dolores placeat alias optio accusamus libero corporis enim inventore assumenda iusto possimus fugit. Repellat autem cupiditate sit dolore eaque nobis, nam saepe enim doloribus dicta in cumque numquam expedita assumenda praesentium quidem, nulla recusandae perferendis quam aut id officiis fugiat. Fuga, distinctio culpa incidunt, at labore beatae, quisquam ex quod molestias unde eos neque praesentium voluptatum necessitatibus voluptas numquam. Molestias ut repellat cupiditate ducimus perferendis? Totam fuga a soluta ab, doloribus magni atque fugiat vel voluptas tempora iure, vero voluptatem sit quia sunt, sapiente fugit rerum assumenda provident! Reiciendis illo voluptatibus error. Dolore sint, voluptate voluptas odio quaerat ducimus ea autem numquam harum quod nam dolorem quae pariatur nulla illo nesciunt est deleniti mollitia, perferendis rem quisquam. Impedit iste fugiat temporibus atque ad ex et explicabo soluta harum, ullam voluptas esse iusto. Quam dolore veritatis nam soluta. Officia, dicta!</p> ${validate_component(ShrinkImg, "ShrinkImg").$$render($$result, { index: 0, src: "js.svg" }, {}, {})} <div data-svelte-h="svelte-1g9u7wb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis hic eum a voluptatum porro saepe aliquam, neque laborum, enim, eveniet ea! Harum maxime corrupti sapiente? Perferendis aliquid omnis dignissimos eveniet alias molestias neque dicta harum, cum aperiam officiis! A sint nobis quaerat ut veniam nesciunt, sunt dolorem laborum sit aperiam eaque in repudiandae odit possimus hic atque, maiores voluptate assumenda dolorum praesentium magnam incidunt, recusandae deserunt nostrum. Repudiandae iste enim temporibus magnam quis fugit neque cum atque sed necessitatibus ratione adipisci in explicabo nesciunt nulla, ab tempora voluptate placeat. Corrupti explicabo, quidem consequatur voluptatum eos veritatis laboriosam facilis repudiandae voluptatibus eius libero, nam labore id rerum deserunt, quos eum unde quibusdam sed at? Neque veniam praesentium inventore pariatur dicta totam ducimus asperiores voluptate fuga a veritatis vel itaque ex error quibusdam, sed quasi placeat eligendi, repellat culpa maiores dolorum assumenda corrupti. Dolores commodi suscipit nemo soluta molestiae corporis, obcaecati perferendis, corrupti, non iusto officia! Adipisci voluptates totam cum a deleniti libero iusto accusantium facere maiores mollitia, repudiandae, ut, doloremque asperiores sit soluta doloribus possimus iure. Fuga vero repellendus id incidunt quasi harum, placeat est, nihil sit officiis quaerat aspernatur officia numquam! Fugit, doloremque quasi! Minus tenetur quibusdam, cum explicabo quod eaque facilis blanditiis optio placeat temporibus illo dolorem nam quaerat libero nisi aliquid ut non ab corporis ea rerum! Eius illum dolor cumque magni blanditiis delectus aspernatur architecto! Eum fugiat enim harum amet veniam fugit corrupti odio, odit eius unde veritatis dolore natus est repellendus? Aspernatur in fugiat alias aperiam numquam repellendus minima sed? Cum dicta et fugiat voluptatibus cumque aliquam illo facilis maiores beatae. Facere esse tempora ut ratione voluptatibus consequatur modi reiciendis possimus commodi? Quo, harum dolores odio voluptatem distinctio dolorem dignissimos nemo, libero, aliquam odit vero cupiditate debitis fuga repellat? Voluptatem, assumenda. Id labore repellendus eligendi consequuntur quaerat dolores consequatur, praesentium omnis ipsa. Cumque pariatur nulla aliquid laborum recusandae! Delectus, expedita maxime! Asperiores, necessitatibus quos reprehenderit ipsa deserunt veritatis quas exercitationem fuga, at debitis, id sed. Repellat veritatis, ut asperiores quas delectus corrupti. Nemo ipsum, obcaecati aperiam voluptates animi qui! Tempore error, velit dolores repellendus esse animi architecto fuga molestias magni et sapiente adipisci natus cupiditate nesciunt explicabo minus necessitatibus ex deleniti odit ducimus. Recusandae, et nostrum at maiores cumque quisquam praesentium esse itaque porro accusantium reprehenderit possimus corrupti in natus quam voluptates pariatur nobis eius molestiae deleniti? Autem at non doloremque voluptatem nisi qui nam!</div> ${validate_component(ShrinkImg, "ShrinkImg").$$render($$result, { index: 1, src: "d3.svg" }, {}, {})} <span data-svelte-h="svelte-14lomgq">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium cumque iste eum quaerat impedit, inventore nesciunt fugiat vel quam error delectus sint pariatur dicta aperiam culpa! Suscipit incidunt debitis at voluptates tempora voluptatum nam perspiciatis excepturi hic possimus ipsa nulla vero, soluta quisquam itaque velit, sit, nihil sapiente iusto. Sapiente recusandae modi aperiam nisi eum, porro totam nam cumque reiciendis sed sunt molestiae velit incidunt natus. Itaque blanditiis dolores facilis quidem corrupti fugiat asperiores voluptate impedit sint atque, tempore, repellat minima et nesciunt mollitia delectus nobis eius similique error quasi suscipit repudiandae nihil! Cum ad iste officiis, porro quis eligendi a totam temporibus itaque recusandae possimus magnam eius aliquid quaerat debitis similique ullam id iusto optio, quos quae assumenda placeat esse! At tempora sequi quo illum sint, placeat aut maxime veritatis quas, saepe totam. Pariatur omnis blanditiis dignissimos mollitia non sit veniam, eligendi tempora quibusdam, error reiciendis magnam illum assumenda aperiam minima. Neque, totam deleniti minima sequi, a sed in accusantium doloremque dignissimos labore corporis, magnam maxime iste distinctio aperiam explicabo tempore. In recusandae eius exercitationem minima quibusdam delectus sapiente reprehenderit a eum beatae. Libero non voluptatibus unde pariatur labore a facere, illo enim animi, et, molestiae dolor vel optio! Repellat, corrupti nobis! Dolore ipsa ad temporibus quae sint saepe adipisci reiciendis nulla. Debitis earum illo alias aperiam veniam, eaque maiores doloribus iusto nemo id laudantium ullam adipisci ab! Sint reprehenderit dolores soluta animi saepe illo pariatur nam suscipit cumque inventore fugit aut laudantium minus maxime eos iusto quisquam quae qui magnam explicabo, beatae ab blanditiis. Consequatur possimus officiis, laudantium et esse reprehenderit sapiente doloribus repellat cumque culpa ipsam facilis dolore iure debitis. Distinctio voluptatem ullam, ipsa sunt, aut rerum placeat, nisi eius numquam ea corporis optio sit tenetur. Quo, quae. Autem aperiam inventore repellat deserunt. Praesentium perferendis veniam ipsam nesciunt sed. Labore unde ut, culpa aperiam qui veritatis mollitia eius necessitatibus accusamus neque accusantium optio, eligendi tempora doloribus! Aut vitae soluta numquam facere rem quis officia alias amet quas rerum officiis odio assumenda maxime, animi corrupti dolore vero sapiente nulla esse consequatur molestiae repudiandae cupiditate? Enim et deleniti soluta commodi nisi repudiandae ex eaque ducimus autem? Consequatur mollitia aspernatur iure tempora aut odit excepturi quibusdam eaque rerum aliquid veritatis totam minima animi, numquam vitae eos, repellat dolore. Molestiae, similique nostrum fugit magni, aperiam fuga porro eius sint iusto sapiente facere. Dolorem minima, maiores asperiores debitis voluptate fuga quaerat.</span>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
